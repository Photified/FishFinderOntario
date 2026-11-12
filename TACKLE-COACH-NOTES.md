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
image once; there is no coach or repeated alternative-bait card.

## Updated app files

- `lake-setups.js`: integrated lure layout, rod/line boxes and conditional explanations.
- `tackle-coach.js`: starting sizes, rigging and fuller lure/method instructions.
- `tackle-coach.css`: responsive hero/facts grid, compact fallback and both themes.
- `sw.js`: cache version 124 to refresh these assets on existing installations.

The asset filenames are retained so `index.html` does not need another change.
No images, species, recommendation rankings, colours or rules data were changed.
Rod and line values are the existing species/condition gear recommendations,
relocated into the selected lure rather than independently generated per lure.

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
