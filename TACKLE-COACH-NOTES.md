# Selected lure details

Selecting a lure enlarges its original image in place and reveals a single stack
of detail boxes: Size & weight, Rigging, How to fish it, and Why this lure when
a relevant explanation is available. Suggested colours remain above the options.
There is one image per lure. The coach and adjustment controls have been removed.

## Updated app files

- `lake-setups.js`: stacked detail boxes and conditional recommendation explanations.
- `tackle-coach.js`: starting sizes, rigging and fuller lure/method instructions.
- `tackle-coach.css`: stacked boxes, enlarged selected image, light and dark themes.
- `sw.js`: cache version 123 to refresh these assets on existing installations.

The asset filenames are retained so `index.html` does not need another change.
No images, species, recommendation rankings, colours or rules data were changed.

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
Browser visual verification was unavailable; no device layout test is claimed.
