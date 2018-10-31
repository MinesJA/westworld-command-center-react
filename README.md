# Westworld Command Center

![alt main](https://cdn-images-1.medium.com/max/2000/1*BnjGd8N6zu9-Fe6stEJDEg.png)


Overview
========
The Executives at Delos Inc. need you to help them build some software for their new theme park: WestWorld. WestWorld is an interactive theme park where guests get to experience life in the Wild Wild West with the help of some AI known as "Hosts". But WestWorld needs a way to deploy these hosts to different areas of the park and bring them back to "Cold Storage" where they can be repaired or retired. Your job is to create a React based interface that allows you to select Hosts, activate them, and send them to any area the park or call them back to Cold Storage.


DB
==
Run `json-server --watch db.json --port 3001` to start the server on port 4000 (so you can run React on port 4000 simultaneously).

Endpoints:
1. GET /hosts
2. GET /areas


Video Demo: https://youtu.be/NXP-mNpUTYU


Layout
======

A number of components have already been built for you. You can start with the first two components branching from App:

1) WestWorldMap - Represents the map and all it contains.
2) Headquarters - Represents where Hosts live when they're not deployed and all your controls.

Start by drawing your component Tree based on what components you think should be importing the other existing components. Remember, components can be imported by more than one parent component.

Deliverables
=====

**Area**
1. Area's should be rendered based on info fetched from the `/areas` endpoint. Format the name to remove underscores and capitalize all words. Ex: 'high_plains' should be displayed as "High Plains"
2. Set the style property on the parent div of the Area component with the incoming style attribute from the db. This ensures areas are rendered in the right position and at the right size.
3. Areas can only hold as many hosts as the limit attribute dictates from the database. Once that limit is reached, hosts should be restricted from being added to that area.
4. Only Bernard should be able to enter the "Under Construction" area.

**Hosts**
1. Hosts should be rendered based on info fetched from the `/hosts` endpoint.
2. Clicking a Host selects them on the map (selected hosts should have a red border) and displays their information in the info box. If a Host is selected, clicking a different Host should de-select the previous Host (only one selected Host at a time).
3. Hosts can either exist in one of the many areas, or in Cold Storage. There should never be more than one of the same host on the screen at any given time.
4. If a Host is 'Decommissioned' (ie. if their 'active' attribute is set to 'false') then they should be removed from whatever area they are currently in and returned to Cold Storage.

**HostInfo**
1. The image, name, and gender icon should be set based on the currently selected Host.
2. The Active/Decommissioned toggle should reflect the hosts current "active" status. If the 'active' attribute is false, the host toggle should read "Decommissioned". If the 'active' attribute is set to true, the host toggle should read 'Active'.
3. The Area dropdown should be pre-selected with the area the host is currently set to, even if the host is Decommissioned and in Cold Storage.
4. If a host has an active status, selecting a new area from the dropdown should move that host to the corresponding area. If the host is Decommissioned they should not be able to leave ColdStorage, even though their area can be changed. If their area is changed and their status is switched to active they should move to that 
5. Setting a hosts toggle to Decommissioned should immediately remove them from their area and place them in ColdStorage.

**Activate All Button**
1. Clicking the `Activate All` button should set all hosts active status to true.
2. Once the Activate All button has been clicked, the button should switch from `red` to `green` and should read `DECOMMISSION ALL`.
3. Clicking the `DECOMMISSION ALL` button should set all hosts active status to false and revert the button back to the `red` `ACTIVATE ALL` button.
