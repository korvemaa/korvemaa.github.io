---
title:  "Automated Conversions"
description: "The conversion pipeline to get model files into the Enviz ecosystem."
group: "Enviz"
tags: ["automation", "blender", "azure"]
thumbnail: "images/space-ai.png"
date: 'Jan 2 2024'
links: ["https://enviz.co"]
---

## What is an Automated Conversion?

Essentially what an automated conversion is, is that you a customer would upload your 3dsMax, SketchUp, Revit, .fbx,  what ever model to our portal and it'll run an automation pipeline in our backend that will cleanup 
the geometry, fix any flip face orientation and z fighting issues, optimise it, give it nice lighting then add it to our platform.

Ive labeled this project as -Automated Conversions- as through out my time Ive worked on it the name of the project/product kept changing. Some names its gone by is Automated pipeline, Space AI, Enviz Space to now just Enviz.

## Technical Bits

I think the technical aspect of whats happening in the background is super interesting to me so this will also be a little write up as to how it works, take away, my dos and donts if I was to make something equivalent again.

There are key aspects to this project

- Cloud infrastructure
 
- Automation that happens in blender

- Automation that happens in our scene processor

- Loading it on the app


Which will be outlined bellow. If this doesn't interest you. go away!!

## Cloud infrastructure

My biggest ever mistake ever working on this and Ill never do this again is using Kubernetes. I used kubernetes to easily orchestrate multiple jobs across the same nodes as I thought it'd be easy to do it like that. Boy
was I wrong. I feel like the entire time I was fighting kubernetes and how it works with jobs, at some point I wrote my own job orchestrator that is a deployment that manages jobs in a namespace (either prod or staging) but
even then I was having issues with the pods just not scheduling sometimes, nodes not auto scaling to facilitate running a job, pods randomly deleting themselves and not giving any reason why among other things.

If I was to setup the infrastructure again I would of just use a VM scale set with docker so deployment of the process was easy and setup the job orchestrator to scale the vm set up or down based on job count. Although I would 
have to experiment since I also dont know what issues or problems I might face using a VM scale set. 

## Job Orchestrator

Explain what the job orchestrator orchestrates

## Blender Automation

Explain what happens inside blender

## Scene Processing

Explain archetype

## Scene File Format 

Chunk based file format