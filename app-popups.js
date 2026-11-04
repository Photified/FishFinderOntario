/* Keep native field values and form submission, with an app-rendered picker. */
(() => {
  const dialog = document.getElementById('appPopup');
  const heading = document.getElementById('appPopupTitle');
  const body = document.getElementById('appPopupBody');
  const triggers = new WeakMap();
  let returnFocus;

  function open(title, content, trigger) {
    returnFocus = trigger || document.activeElement;
    heading.textContent = title;
    body.replaceChildren(content);
    dialog.showModal();
    (body.querySelector('[aria-current="true"], input, button') || dialog.querySelector('.popup-close')).focus();
  }

  dialog.querySelector('.popup-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (returnFocus?.isConnected) returnFocus.focus({preventScroll:true});
  });

  function sync(field) {
    const trigger = triggers.get(field);
    if (!trigger) return;
    const value = field.matches('select') ? field.selectedOptions[0]?.textContent.trim() : field.value;
    trigger.textContent = value || 'Choose…';
    trigger.disabled = field.disabled;
  }

  function commit(field, value) {
    dialog.close();
    if (field.value === value) return;
    field.value = value;
    field.dispatchEvent(new Event('input', {bubbles:true}));
    field.dispatchEvent(new Event('change', {bubbles:true}));
    if (!field.isConnected && field.matches('.fishing-date')) {
      requestAnimationFrame(() => document.querySelector('.fishing-date-label .popup-trigger')?.focus({preventScroll:true}));
    }
  }

  function chooseOption(field, title, trigger) {
    const options = document.createElement('div');
    options.className = 'popup-options';
    for (const option of field.options) {
      if (option.hidden) continue;
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = option.textContent.trim();
      button.disabled = option.disabled || option.parentElement.matches('optgroup:disabled');
      if (option.selected) button.setAttribute('aria-current', 'true');
      button.addEventListener('click', () => commit(field, option.value));
      options.append(button);
    }
    open(title, options, trigger);
  }

  function chooseDate(field, title, trigger) {
    const form = document.createElement('form');
    form.innerHTML = `<div class="popup-date-fields">
      <label>Month<input name="month" type="text" inputmode="numeric" pattern="[0-9]{1,2}" maxlength="2" required></label>
      <label>Day<input name="day" type="text" inputmode="numeric" pattern="[0-9]{1,2}" maxlength="2" required></label>
      <label>Year<input name="year" type="text" inputmode="numeric" pattern="[0-9]{4}" maxlength="4" required></label>
    </div><p class="popup-date-error" role="alert"></p><button type="submit" class="btn-primary">Apply date</button>`;
    const [year, month, day] = field.value.split('-');
    for (const [name, value] of Object.entries({year, month, day})) form.elements.namedItem(name).value = value || '';
    form.addEventListener('submit', event => {
      event.preventDefault();
      const values = new FormData(form);
      const yyyy = values.get('year');
      const mm = values.get('month').padStart(2, '0');
      const dd = values.get('day').padStart(2, '0');
      const value = `${yyyy}-${mm}-${dd}`;
      const parsed = new Date(value + 'T00:00:00Z');
      if (yyyy === '0000' || !Number.isFinite(+parsed) || parsed.toISOString().slice(0, 10) !== value) {
        form.querySelector('.popup-date-error').textContent = 'Enter a valid date.';
        return;
      }
      commit(field, value);
    });
    open(title, form, trigger);
  }

  function enhance(field) {
    if (triggers.has(field)) return;
    const label = field.labels?.[0] || field.parentElement.querySelector('label');
    const title = field.getAttribute('aria-label') || label?.firstChild?.textContent.trim() || 'Choose an option';
    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'popup-trigger';
    trigger.setAttribute('aria-haspopup', 'dialog');
    triggers.set(field, trigger);
    field.hidden = true;
    field.after(trigger);
    function update() {
      sync(field);
      trigger.setAttribute('aria-label', title + ', ' + trigger.textContent);
    }
    update();
    field.addEventListener('change', update);
    field.addEventListener('input', update);
    trigger.addEventListener('click', () => {
      if (field.matches('select')) chooseOption(field, title, trigger);
      else chooseDate(field, title, trigger);
    });
  }

  const selector = 'select, input.fishing-date';
  function enhanceWithin(root) {
    if (root.matches?.(selector)) enhance(root);
    root.querySelectorAll?.(selector).forEach(enhance);
  }
  document.addEventListener('DOMContentLoaded', () => {
    enhanceWithin(document.body);
    new MutationObserver(records => {
      for (const record of records) for (const node of record.addedNodes) enhanceWithin(node);
    }).observe(document.body, {childList:true, subtree:true});
  });

  window.AppPopups = {
    notice(title, message) {
      const text = document.createElement('p');
      text.textContent = message;
      open(title, text);
    }
  };
})();
