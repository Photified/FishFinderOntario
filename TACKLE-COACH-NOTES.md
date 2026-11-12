# Smart Tackle Box update

Each lure opens an accordion with a larger existing image, starting size or weight,
rigging guidance, the current technique, and an optional “Not getting bites?” coach.
One lure is expanded per waterbody card. Suggested colours remain visible above
the lure options. Coaching cycles through one adjustment at a time and links to
another currently displayed, permitted recommendation when available.

## Files

- `lake-setups.js`: accordion rendering, coaching controls and alternative navigation.
- `tackle-coach.js`: shared lure profiles and method-based coaching.
- `tackle-coach.css`: responsive accordion and coaching styling for both themes.
- `index.html`: loads the two new assets.
- `sw.js`: cache version 120, with both new assets cached.

## Advice and scope

FFO editorial guidance, not Ministry-approved advice. Sizes are broad starting
options, not manufacturer specifications or requirements to purchase particular
gear. Rig weight, lure model, target fish and conditions still matter. No lake
depth, fish location, weather observation or result is inferred. Conditions are
the user's selections; unspecified conditions stay unspecified.

The original recommendation selection, colours, species, rules data and filtering
are unchanged. A selected condition combination supplies the existing technique
and lure explanation. Shared coaching adds adjustments for the lure's fishing
method, with conditional suggestions for cool water, muddy water and wind where
applicable. Alternatives only link to the already-filtered recommendations.
The existing rules module remains responsible for season and bait filtering;
this update does not expand its interpretation of gear restrictions.

## Reference material consulted

These explain general tackle and presentation principles. Editorial starting-size
ranges are not claims that a source mandates one setup for a lake or condition.

- Ontario, Learn to Fish — Digital: https://www.ontario.ca/page/learn-fish-digital
- Indiana DNR, Fishing Equipment Tips: https://www.in.gov/dnr/fish-and-wildlife/education-programs/learn-to-fish/fishing-tips-and-videos/fishing-tips-equipment/
- Freshwater Fisheries Society of BC, How to Fish for Trout with Lures: https://www.gofishbc.com/learn/fishing-tips/lake-fishing/how-to-fish-for-trout-with-lures
- Rapala Canada, Best Rapala Baits for Beginner Anglers: https://www.rapala.ca/ca_en/blog/best-rapala-baits-for-beginner-anglers

## Validation

All 900 species/condition selections (including unspecified conditions) retain the
original recommendation output. Checked all 1,280 recommendation entries across
20 species, resolving 171 lure names to 58 existing images and complete profiles.

DOM integration checks passed for opening, closing and exclusive accordions,
coaching cycling, alternative selection and focus, condition updates, refresh,
species switching, close focus, actual closed-season suppression, bait-filtered
alternatives and escaped content. Browser visual verification was unavailable in
this environment, so no claim of browser or device layout validation is made.
