---
title:  "GoldSrc Map Loader"
description: Load GoldSrc maps at runtime. Automatically mounting WADs and other assets.
group: "Personal"
tags: ["c#", "goldsrc", "unity"]
thumbnail: "images/goldsrc-bsp/thumbnail.webp"
date: 'Dec 12 2023'
videos: ["h0kvOKy3lW8"]
---

## Why did I make this

I wanted to be able to develop levels within a different editor other then unity to speed up the level design process. But I realized
that it was a silly idea after a couple years. Occlusion and a bunch of other things wouldn't work making the performance of the level worse.

A better idea would of been to make a BSP editor importer. Nonetheless it was still pretty cool.

## Interesting Technical Bits

* The lightmaps in a .bsp are stored per-face. So because of this I pack them into atlases
* Mounts WADs relative to the .bsp
* Sets up correct entities based on their classname