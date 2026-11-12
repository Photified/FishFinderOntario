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
How to fish it spans the full width underneath, followed by Why this lure when an
explanation is available. The separate Gear section has been removed. Existing
location advice and extra tips remain available inside How to fish it.

The layout responds to the lake-card width through container queries. Cards under
620 px stack the image above the detail boxes; rod and line stack individually
under 340 px. Older engines without native details-content styling use the stacked
layout. Both light and dark themes are supported. Each lure uses its original
image once; there is no coach or repeated alternative-bait card. How to fish it
now includes a representative technique animation, labelled as an example.

## Updated app files

- `index.html`: passes the existing lake rules and records into the grouped layout.
- `lake-setups.js`: grouped lake information, record modals and lure playback.
- `tackle-coach.js`: lure instructions, technique mapping and timed step labels.
- `tackle-coach.css`: responsive detail boxes, animation scene and both themes.
- `fishing-rules.js`: renders the four lake-information buttons and retains them on date changes.
- `sw.js`: cache version 129 to refresh these assets on existing installations.
- `images/techniques/gifs/`: 18 animated technique diagrams.
- `images/techniques/posters/`: 18 matching static technique diagrams.

Existing script and stylesheet filenames are retained.
Existing lure images, species, recommendation rankings, colours and rules data
are unchanged. New technique images are in their own subfolder.
Rod and line values are the existing species/condition gear recommendations,
relocated into the selected lure rather than independently generated per lure.

## Animation behaviour and installation

Animations load when an open lure diagram becomes visible. Only one plays at a
time. Play/Stop controls are always available; closing a lure or moving it out of
view stops playback. Reduced-motion preferences show a static poster until Play
is selected. Replays restart from the first frame and reuse downloaded bytes.
The existing service worker caches requested image assets for repeat visits.
Titles, three step labels and the current cue are HTML text so they remain readable
in narrow cards. Representative diagrams explain technique, not the exact action
of every lure model. Existing written instructions remain alongside or below.

For the record-modal update, replace `index.html`, `lake-setups.js`,
`fishing-rules.js`, `tackle-coach.css` and `sw.js` together in the app's root
folder. The status, date and zone link share a row when space allows and wrap
on narrow cards. If technique
animations have not yet been installed, also replace `tackle-coach.js` and add
`techniques/` inside the existing `images/` folder, retaining both `gifs/` and
`posters/` subfolders and their names.
No changes to the existing `images/lures/` folder are required.

## Content

The original selected technique is retained as the lead instruction. Additional
presentation and depth-control guidance covers the existing lure families and
fishing methods, including casting, vertical jigging, trolling, floats and bait
rigs. No measured depth, fish position, weather observation or outcome is inferred.

Complete condition selections use the existing lure explanation. Partial selections
show one only when it is consistent across matching occurrences of that lure and
technique. No conditions are invented for a general recommendation.

Sizes remain broad editorial starting options rather than required purchases or
manufacturer specifications. This is FFO guidance, not Ministry-approved advice.
The existing rules module continues to handle season and bait filtering.

## References consulted

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
stacked boxes, conditional explanations, coach removal, image reuse/enlargement,
exclusive selection, conditions, refresh, focus, season/bait filters and escaping.
Chromium 153 render checks passed at viewport widths 320, 390, 768, 1280 and
1440 px in light and dark themes (10 configurations), including mobile touch
emulation. Checks covered wide-column alignment, narrow-card stacking, rod/line
reflow, full-width fishing instructions, no horizontal overflow, hidden collapsed
panels, exclusive selection and keyboard Enter/Space operation. Desktop and mobile
screenshots were visually reviewed. These are browser/emulation checks, not tests
on physical devices or other browser engines.

Animation checks cover all 1,280 recommendation entries and all 18 technique
diagrams, including lure-specific casting, jigging and trolling distinctions.
Chromium checks cover visible playback, actual GIF motion, timed phase labels,
Play/Stop, replay without redownload, card switching, reduced motion, missing-file
fallback/retry and no horizontal overflow at all ten configurations above.

Lake-grouping browser checks passed in light and dark themes at 320, 390, 1280
and 1440 px. Checks use the app's actual lake-card renderer and rule data, covering
the four-button grid, native record modals, stable card position, complete stocking
history, species switching/closing, the rules dialog, season/date refresh,
unavailable records and no available advisor species. Modal checks include close
buttons, Escape, keyboard focus, focus return, scrollable long histories, correct
records after changing lakes and no horizontal overflow. Recommendation checks still
match all 900 original species/condition selections and all 1,280 lure entries.
