# Selected lure details

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

- `lake-setups.js`: integrated lure layout and visible-card animation playback.
- `tackle-coach.js`: lure instructions, technique mapping and timed step labels.
- `tackle-coach.css`: responsive detail boxes, animation scene and both themes.
- `sw.js`: cache version 125 to refresh these assets on existing installations.
- `images/techniques/gifs/`: 18 animated technique diagrams.
- `images/techniques/posters/`: 18 matching static technique diagrams.

The asset filenames are retained so `index.html` does not need another change.
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

Replace `lake-setups.js`, `tackle-coach.js`, `tackle-coach.css` and `sw.js` in the
same folder as the app's `index.html`. Add `techniques/` inside the existing
`images/` folder, retaining both `gifs/` and `posters/` subfolders and their names.
No change to `index.html` or the existing `images/lures/` folder is required.

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
