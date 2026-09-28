Fish Finder Ontario: boat launches, shore access and Advisor update
September 28, 2026

UPLOAD THESE FOUR FILES TO YOUR EXISTING APP FOLDER:
1. index.html (replace your existing index.html)
2. sw.js (replace your existing sw.js)
3. access-points.js (new)
4. accessPoints.json (new)

Keep your existing images folder and all other app files. The original upload
was named index(1).html; the deployment file in this package is index.html.
Upload all four files together, then open the app after deployment completes.
The new service worker uses a new cache version. Existing saved lakes and
notes are preserved. This package has not been deployed to your live website.

WHAT CHANGED
- Separate map controls for waterbodies, boat launches and shore access.
- Access point list, clustered map markers and individual site details.
- Directions to the selected access point using Google Maps.
- Save specific access points and private notes on the current device.
- Saved Spots filters the access list as well as waterbody results.
- Explore access points near a selected waterbody.
- Advisor automatically brings the highlighted species into view when opened
  from a lake or when returning through the Advisor tab.

DATA
Source: Government of Ontario, Fishing Access Point.
https://data.ontario.ca/dataset/fishing-access-points
Contains information licensed under the Open Government Licence - Ontario.
https://www.ontario.ca/page/open-government-licence-ontario

The September 28, 2026 snapshot includes 2,427 records marked Yes for public
map display: 2,207 boat launches, 167 shoreline access points and 53 enhanced
shoreline access points (such as docks and piers). Records marked No for map
display are excluded. This is a bundled snapshot; it does not automatically
synchronize with the provincial database. The app update button retrieves
the files you have deployed, not a new import from Ontario.

Fields include ownership, parking, fee status, accessibility, launch surface
and last site verification where recorded. Unknown values remain unknown.
The import date is separate from the site's verification date.

Access records can include private sites and fees. Nearby access points are
not automatically linked to a lake or assigned fish species. Directions use
the recorded access point coordinates; follow local signs and site rules.
Distances in the app are straight-line distances.

VALIDATION
Checked map layers, access details, directions links, saving notes and reload,
Saved Spots filters, nearby access exploration, existing waterbody search,
Advisor selected-species visibility on mobile, and JavaScript errors.
Verified service worker installation, old cache cleanup and offline retrieval
of the new access data and script. Browser checks used placeholder images
and map tiles; your existing image assets were not included in the upload.
