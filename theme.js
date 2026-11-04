(() => {
  const key='ffo-appearance';
  function apply(value) {
    const theme=value==='dark'?'dark':'light';
    document.documentElement.dataset.theme=theme;
    document.getElementById('lightTheme').media=theme==='light'?'all':'not all';
    document.getElementById('darkTheme').media=theme==='dark'?'all':'not all';
    document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#003e6d':'#333333';
    const select=document.getElementById('appearanceTheme');if(select)select.value=theme;
  }
  let saved='light';try{saved=localStorage.getItem(key)||'light';}catch{}
  apply(saved);
  document.addEventListener('DOMContentLoaded',()=>{
    const select=document.getElementById('appearanceTheme');select.value=document.documentElement.dataset.theme;
    select.addEventListener('change',()=>{apply(select.value);try{localStorage.setItem(key,select.value);}catch{}});
  });
})();
