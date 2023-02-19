


---
custom_css: blog_post
title: Can Browser Vendors not let SSR on the side please?
---

A few things in the world of the Web front-end developers have caught my attention lately. Two things mainly. The first is around how defining frontend as centered around JS is uh... problematic, at least if we want people to use our stuff. The other is around Interop 2023 and in particular Declarative Shadow DOM. And I feel that both are more linked than we think. That they reflect a reality of the evolution of WHATWG and W3C, and by reflection the browser vendors in the past decade.
<!--more--> 

## Wait, noone can use this thing?

There have been a bit of movement around the realization that equating Web Frontend with JavaScript generated slow, heavy, and at this point actively hampering your ability to serve users, results.

For a bit of back-story, the best place to start is probably Alex Russel's state of browser clients 2023, followed by Alex Russell’s long and eloquent assault on SPA stacks, which is informed by it. I think the state of the browser is the most important to keep in mind. Yes, you can build amazing UI with any of the SPAs stack, but the reality is that you would build for an audience that does not exist. The reality of what the machine of our users can run is a strong constraint. One that we cannot wish away.

Laurie Voss’ “The case for frameworks” was an interesting response, that i think you should read too. I think it is quite representative of the current model of the world that is pervasive in the frontend developer world.