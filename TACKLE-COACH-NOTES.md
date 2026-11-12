# Lake information and selected lure details

The lake-information box groups the lake rules buttons, selected-species season
and limits, recorded fish, and stocking history. The top contains four matching
blue buttons in a two-by-two grid: Lake-specific rules, Fishing rules, Recorded
fish and Stocking records. Record buttons open native modal dialogs without
expanding the card. Stocking history shows all recorded years in the modal.
These records remain accessible when no species is selected, the season is
closed, or no tackle recommendations are available.

The duplicate View full rules link has been removed; the two rules buttons at
the top of Lake information remain available.

Smart Tackle Box is a separate section below, with its species selector, colours,
lures and setup details. Species selection and fishing-date changes update the
season and limits above while keeping all four buttons available. Closing tackle
recommendations clears the selected-species summary while keeping lake records.

Selecting a lure reveals a large original image on the left, with Size & weight,
Rigging, Rod and Line boxes on the right when the lake card has enough width.
How to fish it spans the full width underneath, followed by a fuller Why this lure explanation. The separate Gear section has been removed. Existing
location advice and extra tips are visible by default as stacked boxes inside
How to fish it, beside the animation on wide cards and below it on narrow cards.
Retrieve, depth, location and extra advice share sentence-level deduplication,
including matching repeated sentences under different headings. Closely matching
sentences and repeated topic headings are consolidated without changing the
underlying recommendation data. Rigging sentences are also considered so an
identical instruction is not repeated in the fishing tips.

The layout responds to the lake-card width through container queries. Cards under
620 px stack the image above the detail boxes; rod and line stack individually
under 340 px. Older engines without native details-content styling use the stacked
layout. Both light and dark themes are supported. Each lure uses its original
image once; there is no coach or repeated alternative-bait card. How to fish it
now animates the selected lure’s existing PNG within a reusable technique scene,
labelled as an example. The image shows the actual selected tackle; motion is
an illustrative retrieve path rather than a simulation of each moving component.

## Updated app files

- `index.html`: passes the existing lake rules and records into the grouped layout.
- `lake-setups.js`: grouped lake information, record modals and lure playback.
- `tackle-coach.js`: lure instructions, technique mapping and timed step labels.
- `tackle-animation.js`: reusable SVG scenes and unchanged PNG sprites for all 18 techniques.
- `tackle-coach.css`: responsive detail boxes, animation scene and both themes.
- `fishing-rules.js`: renders the four lake-information buttons and retains them on date changes.
- `logbook.js`: quick notes, one-tap setup saves, removable context and lake navigation.
- `logbook.css`: responsive logbook cards and editor in both themes.
- `sw.js`: cache version 135 to refresh these assets on existing installations.
- Original lure PNGs remain in `images/lures/`, with no pixel edits or new image assets.

Existing script and stylesheet filenames are retained.
Existing lure images, species, recommendation rankings, colours and rules data
are unchanged. Source PNG dimensions, alpha bounds and tie points are described
in the animation module, so no additional image files are required.
Rod and line values are the existing species/condition gear recommendations,
relocated into the selected lure rather than independently generated per lure.

## Animation behaviour and installation

The selected lure image is reused in all of its applicable technique scenes.
There are 18 reusable paths, not a separate animation file for each lure. The
engine keeps the same SVG image element while updating its position, angle and
supporting rod, line and rig shapes. Complete rig PNGs are shown without adding a
second copy of their weight or leader. Drop-shot weights remain fixed on bottom.
Small spoon tilts suggest movement; blade rotation, skirt movement and other
three-dimensional component actions are not simulated.

Only one visible open-lure scene plays at a time, capped at 30 updates per second.
Play/Pause freezes and resumes the current frame. Closing a lure resets it to a
readable static pose. Closing/replacing the card, changing fish, leaving the scene
or hiding the page stops its animation. Reduced-motion preferences show the static
pose until Play is selected, and changing the preference to reduced motion pauses
playback. Image loading failure leaves the written instructions available; Play
retries the original image. Titles, three step labels and cues remain HTML text.
Surface zig-zag and glide demonstrations are labelled as top views.

For the quick-notes update, replace `index.html`, `lake-setups.js`, `sw.js`,
`logbook.js` and `logbook.css` in the app's root folder beside `index.html`.
No new images are needed.
If PNG animation support is not already installed, use the complete app archive,
including its `index.html` and `tackle-animation.js`.
There are no image uploads for this update. The old `images/techniques/` GIF and
poster folder is no longer referenced and may be removed from an existing install.
The existing `images/lures/` folder is unchanged. The service worker includes the
new script and continues caching original lure images on demand.

## Quick notes

Notes is always available beside Saved spots in the main toolbar. Tap a saved
note to open its lake card, centre the map and reveal that specific note, even
when a newer note exists. Current search, fish and Saved spots filters are cleared
when navigating to a note. If its lake is unavailable, the note remains saved.

Add note opens one text box and Save. The lake and local date are automatic.
Selected fish, lure and known conditions appear as visual chips. Every chip has
an accessible one-tap remove button. Removing the lure also removes its attached
size, rod, line and retrieve snapshot. There are no setup fields, date/time pickers,
result questions or required context selections.

Save this setup in an expanded lure saves immediately, without a form. The
confirmation offers Add note to optionally add text or remove unwanted context.
Saved setups are labelled as saved, rather than asserting they were actually used.
Notes have Edit and Delete actions; Delete works immediately and offers Undo.
Long lists load 20 at a time and offer a lake filter when multiple lakes are present.

The independent `ffoLogbookV1` browser store is retained. Previous single legacy
notes are not imported. New notes and saved setups are independent of favourites.
Setup and condition strings are snapshots; later recommendation changes do not
change previous notes. Cancel via Close or Escape discards an unsaved draft.
Storage errors keep the text in the editor and preserve existing data. Clearing
saved app data also removes notes. No accounts, cloud sync or new images are added.

## Compact lake rules summary

The old top pill row is removed. Maximum depth, surface area and recorded water
clarity remain as labelled facts inside Lake information when available, with the
same metric/imperial conversions. Approximate-location notices are retained there.
Waterbody type is no longer repeated beside a named river/lake, and stocking years
remain in the Stocking records modal.

The selected-species heading contains the fish name only. Season status, a
clickable FMZ pill and the chosen date share a wrapping row. The pill opens the
same official zone page as the previous link, in a new tab. With no species
selected, the zone pill remains available. No zone is invented when none is known.

The limit type appears once above the Sport and Conservation licence boxes when
all rows in the group share that type. Licence boxes then show the values and
any attached conditions, rather than repeating the limit type. Mixed daily catch
and possession limits retain their separate labels. The source regulation group
is retained, with the combined bass label shortened to Largemouth + Smallmouth
combined. Shared size limits, area cautions, residency, seasonal conditions and
aggregate trout/salmon notes remain intact.

Single-zone cards omit the repeated zone suffix from limit group captions. Where
records cover different zones, the group captions keep their zone labels to avoid
mixing the scope of different limits. The full rules modal is unchanged.

## Visual conditions picker

The Conditions button sits beside the Smart Tackle Box heading and shows the
currently applied choices. It opens a native modal with labelled radio tiles:
Sunny, Cloudy, Rainy, Windy; Clear or Muddy water; Cool or Warm water temperature.
Each group includes Not sure, preserving the unknown value used by the original
recommendation logic. Weather uses inline SVG icons, clarity uses labelled
swatches, and temperature uses thermometer symbols. No image files are added.

Selections stay in the modal until Apply conditions. Cancel, the close button and
Escape discard the draft. Reopening restores the applied choices. Apply updates
recommendations and the compact summary, leaving any still-recommended open lure
selected. Applying unchanged choices preserves the existing lure and animation
nodes. The chosen conditions apply across species within that lake context;
other lakes retain their own independent selections. The general advice view
uses the same picker without requiring a lake.

Native radio groups support arrow-key selection. Dialog focus is constrained and
returns to the Conditions button on close. Animation playback pauses while the
picker is open. The modal scrolls on short screens with its actions kept visible.

## Content

The original selected technique is retained as the lead instruction. Additional
presentation and depth-control guidance covers the existing lure families and
fishing methods, including casting, vertical jigging, trolling, floats and bait
rigs. No measured depth, fish position, weather observation or outcome is inferred.

Why this lure now describes the selected lure’s physical appeal, presentation
role and practical limits in a full paragraph, even without conditions. A second
paragraph connects relevant selected clarity, temperature or weather settings to
that role. Missing settings do not introduce assumed conditions. These explanations
replace the short reason fragments; the recommendation rankings are unchanged.

Sizes remain broad editorial starting options rather than required purchases or
manufacturer specifications. This is FFO guidance, not Ministry-approved advice.
The existing rules module continues to handle season and bait filtering.

## References consulted

- Indiana DNR, Fishing Tips When & Where: https://www.in.gov/dnr/fish-and-wildlife/education-programs/learn-to-fish/fishing-tips-and-videos/fishing-tips-when-and-where
- Texas Parks & Wildlife, Rigging Up, Not Wigging Out: https://tpwd.texas.gov/publications/pwdpubs/media/fishing_rigs.pdf
- Freshwater Fisheries Society of BC, Beginner’s Guide to Fishing Rods + Tackle: https://www.gofishbc.com/learn/fishing-tips/lake-fishing/beginners-guide-to-fishing-rods-tackle
- Rapala Canada, How to Master the X-Rap Haku: https://www.rapala.ca/ca_en/blog/how-to-master-the-x-rap-haku

- Ontario, Learn to Fish — Digital: https://www.ontario.ca/page/learn-fish-digital
- Indiana DNR, Fishing Equipment Tips: https://www.in.gov/dnr/fish-and-wildlife/education-programs/learn-to-fish/fishing-tips-and-videos/fishing-tips-equipment/
- Freshwater Fisheries Society of BC, How to Fish for Trout with Lures: https://www.gofishbc.com/learn/fishing-tips/lake-fishing/how-to-fish-for-trout-with-lures
- Rapala Canada, Best Rapala Baits for Beginner Anglers: https://www.rapala.ca/ca_en/blog/best-rapala-baits-for-beginner-anglers
- Rapala Canada, When and How to Fish the Best Rapala Jigging Baits: https://www.rapala.ca/ca_en/blog/when-and-how-to-fish-the-best-rapala-jigging-baits
- Z-Man, Top 9+ ChatterBait Commandments: https://zmanfishing.com/blogs/news/top-9-chatterbait%C2%AE-commandments
- Z-Man, Unlocking the Full Potential of a ChatterBait: https://zmanfishing.com/blogs/news/fishing-a-chatterbait%C2%AE-differently

## Verification

All 900 species/condition selections retain the original recommendation output.
All 1,280 recommendation entries across 20 species resolve to existing images,
size/rigging profiles and fuller fishing instructions. DOM checks passed for the
stacked boxes, lure-specific explanations, coach removal, image reuse/enlargement,
exclusive selection, conditions, refresh, focus, season/bait filters and escaping.
Chromium 153 render checks passed at viewport widths 320, 390, 768, 1280 and
1440 px in light and dark themes (10 configurations), including mobile touch
emulation. Checks covered wide-column alignment, narrow-card stacking, rod/line
reflow, full-width fishing instructions, no horizontal overflow, hidden collapsed
panels, exclusive selection and keyboard Enter/Space operation. Desktop and mobile
screenshots were visually reviewed. These are browser/emulation checks, not tests
on physical devices or other browser engines.

PNG animation checks cover all 1,280 recommendation entries and all 18 techniques,
with 101 distinct image/technique combinations. Browser checks sample nine phases
per combination (909 frames), verifying original PNG identity, reuse of image
nodes, finite geometry and no clipped visible lure bounds. Desktop/mobile checks
cover movement, Play/Pause and resume, active steps, card/accordion switching,
reduced-motion static poses, missing-image fallback/retry, no GIF requests and
no horizontal overflow in light/dark themes at 320, 390, 768, 1280 and 1440 px.

Lake-grouping browser checks passed in light and dark themes at 320, 390, 1280
and 1440 px. Checks use the app's actual lake-card renderer and rule data, covering
the four-button grid, native record modals, stable card position, complete stocking
history, species switching/closing, the rules dialog, season/date refresh,
unavailable records and no available advisor species. Modal checks include close
buttons, Escape, keyboard focus, focus return, scrollable long histories, correct
records after changing lakes and no horizontal overflow. Recommendation checks still
match all 900 original species/condition selections and all 1,280 lure entries.

Tip-content checks cover 900 complete/partial condition selections and 3,020
displayed lure entries, including all 58 existing lure images. No exact duplicate
sentences remain inside the generated tip stacks; 216 duplicate tip boxes are
removed across those selections. The reported clearer-water duplicate is covered
explicitly, while distinct follow-up advice is retained. Layout checks verify
default-visible tip boxes, desktop columns/mobile stacks and expanded explanations.

Condition-picker checks cover staged Apply/Cancel/Escape behaviour, all three
Not sure options, partial settings, restored selections, native radio keyboard
controls, focus return, per-lake isolation, the general advice view, unchanged
choice preservation and short-screen action visibility. The original 900
recommendation selections, 1,280 source entries, tip deduplication and PNG playback
remain covered by the existing checks.

Compact-rule comparison checks cover 2,460 dated species/zone/local-rule scenarios
and 1,976 displayed limit groups. Licence values, conditions, common size notes,
aggregate notes, warnings, blocked states and bait filters match the prior version.
Browser checks cover Bluegill/Sunfish, combined bass scope, single/multiple zones,
clickable/keyboard-accessible pills, dates, modal access, unknown selections,
physical facts and unit conversions at 320, 390, 768, 1280 and 1440 px in both themes.

Quick-note Chromium checks cover desktop and mobile widths in both themes:
one text box, one-tap setup saving, removable context, immutable snapshots,
navigation to the correct lake and older note, filter reset, editing,
one-tap delete/Undo, persistence, empty-note handling, safe text rendering,
storage failures, pagination, keyboard focus and modal bounds. Tests use the
real card renderer, selection function and note-navigation callback with map
services stubbed. These are browser checks, not physical-device testing.
