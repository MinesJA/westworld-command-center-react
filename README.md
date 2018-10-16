# Westworld Command Center

DB
==
Run `json-server --watch db.json --port 3001` to start the server on port 3001 (so you can run React on port 3000 simultaneously).

Endpoints:
1. GET /hosts
2. GET /areas



Rules
========
Hosts
1. Clicking a host selects them on the map and displays their information in the info box in the bottom right corner. Only one host can be selected at a time.
2. Hosts can only exist in one area at a time (including ColdStorage).

HostInfo
1. The image, name, and gender icon should be set based on the currently selected Host.
2. The Area dropdown should be selected with the area the host is currently in (initially pulled from db).
3. The Active/Decommissioned toggle should reflect the hosts current status (initially pulled from db).
4. If a host has an active status, selecting a new area from the dropdown should move that host to the corresponding area. If the host is Decommissioned they should not be able to leave ColdStorage.
5. Setting a hosts toggle to Decommissioned should immediately remove them from their area and place them in ColdStorage.

ColdStorage
1. All Hosts start in Cold Storage.
2. Cold Storage can hold both Active and Decommissioned Hosts. But Hosts set to Decommissioned are automatically removed from any area they are currently in and placed into Cold Storage.
3.

Area
1. Area's should be rendered based on info fetched from db. Format the name to remove underscores and capitalize. Ex: 'high_plains' should be displayed as "High Plains"
2. Set the style property on the parent div of the Area component with the incoming style attribute from the db.
3. Areas can only hold as many hosts as the limit attribute dictates from the database. Once that limit is reached, hosts should be restricted from being added to that area.
4. Only Bernard should be able to enter the "Under Construction" area.
