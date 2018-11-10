# Westworld Command Center

![alt main](https://cdn-images-1.medium.com/max/2000/1*BnjGd8N6zu9-Fe6stEJDEg.png)


Overview
========
The Executives at Delos Inc. need you to help them build some software for their new theme park: WestWorld. WestWorld is an interactive theme park where guests get to experience life in the Wild Wild West with the help of some AI known as "Hosts". But WestWorld needs a way to deploy these hosts to different areas of the park and bring them back to "Cold Storage" where they can be repaired or retired. Your job is to create a React based interface that allows you to select Hosts, activate them, and send them to any area of the park or call them back to Cold Storage. Your application should look like this when you're finished:

![alt map](https://i.imgur.com/mPo0UYQ.png)


Setup
=====
Watch a walk through of what's expected to complete this application here: https://youtu.be/GhCazAgsJzw

Clone
-----

`git fork` and `git clone` this repo onto your computer. 

Run `npm install && npm start` in your terminal to start the React application.

DB
--
The database is based on a db.json file in the repo. There will be no Posts or Patches, only Get requests.

Run `json-server --watch db.json --port 3001` in your terminal to start the server on port 4000 (so you can run React on port 3000 simultaneously).

Endpoints:
1. GET /hosts
2. GET /areas


Deliverables
============

The components and styling have already been setup for you. It'll be your job to import them in the right order to build the component tree correctly and add most of the logic. Any conditional styling will be given via changing classNames. For example, if styling on a button should changed based on a click, you'll be given two classNames to swap in depending on what the current status of that button is.

Checkpoint 1: Build the Component Tree
--------------------------------------
Determine how the component tree should be built. Some of the imports have already been given for you. Before you get started, it is highly suggested to draw your component tree on paper. A couple things to note:

1. Let the visual cue of the application guide you. For example, there are clearly two main sections to this application: The top half (WestworldMap) and the bottome half (Headquarters). How should each of those components import the components that live inside them?
2. Aside from visual cues, what functional cues can you get from the application? For example, clearly Area's hold hosts in a list. So what component does an area need to "list out the hosts"? Is there another component that also holds hosts in a list that's not an area component?
3. Remember that two seperate component branches can import the same component.

Checkpoint 2: Determine Where State Lives
-----------------------------------------
You're going to be fetching information from two endpoints. Where should you be doing that and where should that data live once it's been fetched? Remember the rule: hold state as high as necessary but NO HIGHER. For example:

![alt map](https://i.imgur.com/ge9Hfz9.jpg)

Checkpoint 3: Render the Areas
------------------------------
Area info comes in through the `/areas` endpoint. You'll have to turn that into the appropriate number of areas on the map. Styling is given for you but you'll have to pass int he area name into the `id` attribute to make it appear in the right place on the map. Format the name to remove underscores and capitalize all words for the label. Ex: 'high_plains' should be displayed as "High Plains"


Checkpoint 4: Render the Hosts
------------------------
The Host component represents a Host Thumbnail. You'll have to render the appropriate number of hosts based on the data fetched from the `/hosts` endpoint with the appropriate imageUrl for each. You'll also need to make sure they render in the right place. Note that their `active` attribute is set to `false`, meaning they come in decommissioned. Decommissioned hosts should always appear in Cold Storage no matter what their `area` attribute is set to.



Follow these rules for selecting and moving hosts:

1. Clicking a Host selects them on the map and displays their information in the info box in the bottom right corner. If a Host is selected, clicking a different Host should de-select the previous Host (only one selected Host at a time).
2. Hosts can either exist in one of the many areas, or in Cold Storage.
3. If a Host is 'Decommissioned' (ie. if their 'active' attribute is set to 'false') then they should appear in Cold Storage.
4. The image, name, and gender icon should be set based on the currently selected Host.
2. The Active/Decommissioned toggle should reflect the hosts current "active" status. If the 'active' attribute is false, the host toggle should read "Decommissioned". If the 'active' attribute is set to true, the host toggle should read 'Active'.
3. The Area dropdown should be selected with the area the host is currently in. If the host is 'Decommissioned', Cold Storage, the dropdown should be rendered
4. If a host has an active status, selecting a new area from the dropdown should move that host to the corresponding area. If the host is Decommissioned they should not be able to leave ColdStorage.
5. Setting a hosts toggle to Decommissioned should immediately remove them from their area and place them in ColdStorage.

Checkpoint 4: Limit Hosts
--------------------------
Each area should only allow the number of hosts given by their limit attribute. This includes hosts set to areas in Cold Storage. This is a hard deliverable and there are many ways to do this. Don't get discouraged!

Checkpoint 5: Logging
----------------------


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
1. Clicking the `ACTIVATE ALL` button should set all hosts active status to true.
2. Once the Activate All button has been clicked, the button should switch from `red` to `green` and should read `DECOMMISSION ALL`.
3. Clicking the `DECOMMISSION ALL` button should set all hosts active status to false and revert the button back to the `red` `ACTIVATE ALL` button.
