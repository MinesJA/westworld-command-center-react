# Westworld Command Center

![alt main](https://cdn-images-1.medium.com/max/2000/1*BnjGd8N6zu9-Fe6stEJDEg.png)


Overview
========
The Executives at Delos Inc. need you to help them build some software for their new theme park: WestWorld. WestWorld is an interactive theme park where guests get to experience life in the Wild Wild West with the help of some AI known as "Hosts". But WestWorld needs a way to deploy these hosts to different areas of the park and bring them back to "Cold Storage" where they can be repaired or retired. Your job is to create a React based interface that allows you to select Hosts, activate them, and send them to any area of the park or call them back to Cold Storage. Your application should look something like this when you're finished:

![alt map](https://i.imgur.com/mPo0UYQ.png)


Setup
=====
Watch a walk through of what's expected to complete this challenge here: https://youtu.be/GhCazAgsJzw

Clone
-----

`git fork` and `git clone` this repo onto your computer. 

Run `npm install && npm start` in your terminal to start the React application.

DB
--
The database is based on a db.json file in the repo. There will be no Posts or Patches, only Get requests.

Run `json-server --watch db.json --port 4000` in your terminal to start the server on port 4000 (so you can run React on port 3000 simultaneously).

Endpoints:
1. GET /hosts
2. GET /areas


Deliverables
============

The components and styling have already been given to you. It'll be your job to import the components in the right order to build the component tree correctly and add most of the logic. Any conditional styling will be given via changing classNames. For example, if styling on a button should changed based on a click, you'll be given two classNames to swap in depending on what the current status of that button is.

Checkpoint 1: Build the Component Tree
--------------------------------------
Determine how the component tree should be built. Some of the imports have already been given for you. Before you get started, it is highly suggested to draw your component tree on paper. A couple things to note:

1. Let the visual cue of the application guide you. For example, there are clearly two main sections to this application: The top half (`WestworldMap`) and the bottome half (`Headquarters`). How should each of those components import the components that live inside them?
2. Aside from visual cues, what functional cues can you get from the application? For example, clearly the `Area` component holds hosts in a type of list. So what component does an area need to render that list? Is there another component that also holds hosts in a list that's not an area component?
3. Remember that two seperate component branches can import the same component.

Checkpoint 2: Determine Where State Lives
-----------------------------------------
You're going to be fetching information from two endpoints. Where should you be doing that and where should that data live once it's been fetched? Remember the rule: hold state as high as necessary but NO HIGHER. For example:

![alt map](https://i.imgur.com/ge9Hfz9.jpg)

Checkpoint 3: Render the Areas
------------------------------
Area info comes in through the `/areas` endpoint. You'll have to turn that into the appropriate number of areas on the map. Styling is given for you but you'll have to pass the area name to the `id` attribute to make it appear in the right place on the map. Format the name to remove underscores and capitalize all words for the label. Ex: 'high_plains' should be displayed as "High Plains"


Checkpoint 4: Render the Hosts
------------------------------
The `Host` component represents a host Thumbnail. You'll have to render the appropriate number of hosts based on the data fetched from the `/hosts` endpoint with the appropriate imageUrl for each. You'll also need to make sure they render in the right place. Note that their `active` attribute is set to `false`, meaning they come in decommissioned. Decommissioned hosts should always appear in `ColdStorage` no matter what their `area` attribute is set to.

Checkpoint 5: Host Behavior
---------------------------
Follow these rules for selecting and moving hosts:

1. Clicking a `Host` selects them with a red border and displays their information in the `HostInfo` component.
2. Only one `Host` can be selected at a time.
3. Only one `Host` can exist on the screen at a time. If they're in `Cold Storage` then they're not on the `WestworldMap` and visa versa.
4. If a host's `active` attribute is set to `false` then they are decommissioned and should appear in `ColdStorage`. The `HostInfo` toggle should reflect this as well, reading "Active" if `active: true` and "Decomissioned" if `active: false`. 
5. The Area dropdown should be pre-selected with the area the host is currently in, even if they are in `ColdStorage`.
4. If a host has an `active` status, selecting a new area from the dropdown should move that host to the corresponding area. If the host is Decommissioned they should not be able to leave `ColdStorage`, but their `area` attribute/dropdown should still update.
5. Setting a hosts toggle to Decommissioned should immediately remove them from their area and place them in `ColdStorage`.

Checkpoint 4: Limit Hosts
--------------------------
Each `Area` should only allow the number of hosts given by that area's limit attribute. This includes hosts set to areas in `ColdStorage`. This is a hard deliverable and there are many ways to do this. Think about where you should actually be blocking this action (ie. what component should the rejection happen in).

Checkpoint 5: Activate All/Decommission All
--------------------------------------------
Clicking the `Activate All` button should activate all hosts. The button should turn green and change to read `Decommission All`. Clicking the `Decommssion All` button should decommission all hosts and the button should change red and read `Activate All`.

Checkpoint 5: Logging
----------------------

