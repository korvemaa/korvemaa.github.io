---
title:  "Web Editor"
description: Customer facing space editor for Enviz.
group: "Enviz"
tags: ["webgl", "unity", "csharp"]
thumbnail: "images/space-editor.png"
date: 'Jan 1 2024'
links: ["https://enviz.co"]
---

## What is it?

The web editor is a Unity webgl web app that is used within the client portal (portal.enviz.co) where customers can edit their spaces by changing teleport points, the dollhouse camera and update the skybox.

## Whats holding it up?

On the frontend side the web editor is using Unity, with UI toolkit and a custom framework I made for handling application state in a purely data-oriented way. 

On the backend trenches it uses a function-app for handling basic updates to the scene such as teleport and dollhouse location changes. If you are uploading a sky then it goes into the same backend as 
the one that is used for processing automated conversions, AKA the Automation pipeline. Where itll convert the sky texture you uploaded too two textures (since they need to be pow2) and itll
compress it to DXT first for web so you get quicker feedback on what the sky will look like, then in the background itll process the ASTC mobile version as that usually takes longer due to how big the sky
textures usually are.

## Technical Challenges

I would say we didn't encounter many technical challenges but the ones we did face were painful. Such as communicating between the player and the web page. Unity does NOT make this easy with how much boiler
plate you have to write to communicate between the two. As in the editor there is a lot of communication between the two such as to handling uploads, firestore data changes for previewing the sky, etc.

## How did it turn out?

I'd have pictures and a video here to show it but its pretty boring so make an Enviz account, upload a space then you can edit it somewhere in the portal.