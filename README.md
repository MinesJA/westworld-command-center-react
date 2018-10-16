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
1. Clicking a Host selects them on the map and displays their information in the info box in the bottom right corner. If a Host is selected, clicking a different Host should de-select the previous Host (only one selected Host at a time).
2. Hosts can either exist in one of the many areas, or in Cold Storage.
3. If a Host is 'Decommissioned' (ie. if their 'active' attribute is set to 'false') then they should appear in Cold Storage.

HostInfo
1. The image, name, and gender icon should be set based on the currently selected Host.
2. The Active/Decommissioned toggle should reflect the hosts current "active" status. If the 'active' attribute is false, the host toggle should read "Decommissioned". If the 'active' attribute is set to true, the host toggle should read 'Active'.
3. The Area dropdown should be selected with the area the host is currently in. If the host is 'Decommissioned', Cold Storage, the dropdown should be rendered
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
