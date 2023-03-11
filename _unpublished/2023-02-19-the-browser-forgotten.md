


---
custom_css: blog_post
title: The DX that the front-end crowd left on the side of the road
---

A few things in the world of Web front-end developers have caught my attention lately. Two things mainly. The first is around how defining the front-end as centered around JS is uh... problematic, at least if we want people to use our stuff. The other is around Interop 2023 and in particular Declarative Shadow DOM. And I feel that both are more linked than we think. They reflect the reality of the evolution of WHATWG and W3C and by reflection the browser vendors in the past decade.
<!--more--> 

## Wait, no one can use this?

There has been a bit of movement on the Internet lately, around the realization that equating Web Front-end with JavaScript generated slow, heavy, and at this point actively hampering your ability to serve users, web sites.

For a bit of back-story, the best place to start is probably [Alex Russel's state of browser clients 2023](https://infrequently.org/2022/12/performance-baseline-2023/), followed by [his long and eloquent assault on SPA stacks, which is informed by it](https://infrequently.org/2023/02/the-market-for-lemons/). I think the state of the browser is the most important to keep in mind and is less controversial. Yes, you can build amazing UI with any of the SPAs stacks, but the reality is that you would build for an audience that does not exist. The reality of what the machine of our users can run is a strong constraint. One that we cannot wish away.

[Laurie Voss’ “The case for frameworks”](https://seldo.com/posts/the_case_for_frameworks) was an interesting response, that I think you should read too. I think it is quite representative of the current model of the world that is pervasive in the front-end developer world. I have a lot of problems with it, but I will not try to attack them today.

More interestingly to me, Laurie makes the point that the JS frameworks _save developer time_. This is a regularly tooted advantage of all these front-end frameworks. I would argue that if no one can use it, as the state of the client landscape shows is probably the case, then the Developer Experience (DX) does not matter. Going faster to produce something useless does not help.

But I think there is another interesting argument here, one that matters a lot.

## How can we make the DX better for the browser? 

My argument here is that JS, while native to the browser stack, is not the "native" way to render a UI on the browser. The native way is HTML combined with CSS. JS (and WASM) are supposed to be used for two things. Enhancing the presentation with some dynamic change when needed (a sprinkling of dynamic elements on top of a mostly static one) and compensating for the missing features of the "native" stack.

The reason we use JS, a lot of the time, is to compensate for what the browser APIs are missing. Or our back-ends that generate the native data. We have calendars widgets because the native HTML ones are crap. We have complex forms enhancement because styling the default HTML one was hard. We import a whole WASM image decoder because we do not have Jpeg XL supported in our browsers. We use components in JSX or with Web Component because HTML does not have ways to encapsulate and compose elements. Etc Etc.

We can see that relatively well when we look at how Phoenix Liveview is enabling people to get dynamic elements and componentization on the back end too, without needing to ship these massive amounts of JS. And we see that JS was a crutch to compensate for a handicap because Liveview end up with far less bandwidth demand and far less work on the client. Does it solve _every_ of the problems the JS framework tackles? No of course not. But I think it does show that closing the DX gap lies in bringing to the browsers the capabilities that the JS frameworks have explored and polished for us.

In this model, the JS frameworks play the role of a trailblazer. Exploring the design space until they find out what problems need to be solved. But for this model to work, we need the browser vendors to constantly play catch up. To add to the "native" stack the capabilities that have proven to be game changers in the JS world.

In the past 5 to 10 years, this has not happened as much as we would like. It is time for the pendulum to swing. Partly, this is because the browser vendors had to first catch up to make the browsers _usable_. We may forget it now that we all use Grid, Flexbox, HSL, Fetch, and all. But this space used to be dire. It is a space where JQuery was the crutch and trailblazer, another JS framework.

And I want to acknowledge the tremendous work done by Developer Advocates, WG members at W3C and WHATWG before it got merged back, developers at the vendors, and all the other people that keep going to work every day to help make the web easier to use and nicer for everyone. This is hard work, this has been hard work, and we rarely know about the constant efforts they have to do to bring things forward.

And thanks to their work, the browsers caught up with JQuery, making the DX for the web far better. But now we need to do the same with the path React and co have traced.

## SSR wishlist

This brings us to the wishlist. I am not a front-end person by choice. This is not my specialty. But it happens that I regularly have to write them, because tools need to interact with humans, and front-ends are kind of needed for that. And the web is the easiest platform to build this on when you need remote tooling. But it also means that I am _ruthless_ with my tools.

I need tools for the front-end that are featureful, easy to use, and adapted to developers with limited front-end experience doing it all. I need things that give me instant feedback because I will not have a designer. The only way I can make things pretty is through constant incremental change based on how it looks to me. Also, it means I cannot bring in a full design system, nor a JS framework, because just keeping this stuff properly plumbed in and up to date is more time than I can allocate to it.

So I am an SSR person. Fully static sites are done with Jekyll, Soupault, or an equivalent. Semi-dynamic one, that needs to adapt the data they show, with Phoenix. And if I need a dynamic page, it is going to be Liveview. My CSS is nearly always Tailwind, for reasons explained lower.

Do you know what I cannot use? None of the CSS-in-JS stuff. No JSX. No HTMX. No CSS Modules. No Web Components. None of this stuff. And yet, I can see the needs. And I see how things are being done on the JS side. I think at this point, I should publish my own Browser Wishlist. I say Browser because I want more than just some CSS.
