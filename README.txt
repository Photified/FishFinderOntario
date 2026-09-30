Fish Finder Ontario: waterbody coverage and small edits
September 30, 2026

UPLOAD THESE FIVE FILES to your existing app folder, replacing the same names:
- index.html
- guided-tour.js
- app-data.js
- lakesData.json
- sw.js

Keep all other files, including access-points.js, accessPoints.json and images.
The existing images/lures/spawnsacs.png file on your live site was verified
as a working PNG. The old singular filename spawnsac.png returns 404.

WATERBODY COVERAGE
The previous app file had 2,154 waterbody records. The access point layer is
a separate dataset and is not limited to those records. A species filter can
also hide waterbodies while the access markers remain visible.

This update adds 11,588 waterbody records from the Waterbody Location sheet
in the government 2026 regulations workbook supplied for this project.
Total app waterbody records: 13,742.

New coordinates come directly from that sheet, deduplicated by government
Waterbody Location Identifier. Aquatic Resource Area species and attributes
are joined by the same identifier where available. Of the added records,
6,302 have an Aquatic Resource Area match and 6,915 have no usable species
summary in the supplied data. The app keeps those species unknown.
Stocking records, where available, are joined by government identifier and
shown separately as historical stocking information.

Original waterbody records, app identifiers, coordinates and stored-data
keys are preserved. New records use stable government identifiers.

The dataset is still a snapshot of the supplied files. It does not contain
every waterbody in Ontario, and access points are not assigned to waterbodies
or fish species merely because they are close to a waterbody pin.

OTHER EDITS
- Tutorial advancement buttons now say Next step; final steps retain Finish.
- Spawn Sacs now uses images/lures/spawnsacs.png.
- Removed the generic regulations button from waterbody dropdowns.
- Ontario fishing regulations is available in Settings and opens the official
  Ontario Fishing Regulations Summary landing page.
- Updated the cache version so deployed changes replace the old app cache.

VALIDATION
Checked existing record preservation, new ID uniqueness, source coordinate
matching, unknown species handling, map/Advisor loading, tutorial wording,
Settings-only regulations placement and opening the official link, and an
actual Advisor recommendation rendering the real spawn sacs PNG.
Checked new cache installation, old cache cleanup and offline data retrieval.
Other image assets and base map tiles were represented by test placeholders.
This package has not been deployed to your live website.

SOURCE FILES
fishingregulationsexceptionopendata_2026-01-01.xlsx
Aquatic_resource_area_polygon_segment_.csv
Fish_Stocking_Data_For_Recreational_Purposes.csv
Contains information licensed under the Open Government Licence - Ontario.
