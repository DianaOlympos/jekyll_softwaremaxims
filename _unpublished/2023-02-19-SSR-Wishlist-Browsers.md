


---
custom_css: blog_post
title: A Browser API Wishlist from SSR
---

A few things in the world of Web front-end developers have caught my attention lately. Two things mainly. The first is around how defining the front-end as centered around JS is uh... problematic, at least if we want people to use our stuff. The other is around Interop 2023 and in particular Declarative Shadow DOM. And I feel that both are more linked than we think. They reflect a reality of the evolution of WHATWG and W3C and by reflection the browser vendors in the past decade.
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

And i want to acknowledge the tremendous work done by Developer Advocates, WG members at W3C and WHATWG before it got merged back, developers at the vendors and all the other people that keep going to work everyday to help make the web easier to use and nicer for everyone. This is hard work, this has been hard work, and we rarely know about the constant efforts they have to do to bring things forward.

And thanks to their work, the browsers caught up with JQuery, making the DX for the web far better. But now we need to do the same with the path React and co have traced.

## SSR wishlist

This brings us to the wishlist. I am not a front-end person by choice. This is not my specialty. But it happens that I regularly have to write them, because tools need to interact with humans, and front-ends are kind of needed for that. And the web is the easiest platform to build this on when you need remote tooling. But it also means that I am _ruthless_ with my tools.

I need tools for the frontend that are featureful, easy to use, and adapted to developers with limited front-end experience doing it all. I need things that give me instant feedback because I will not have a designer. The only way I can make things pretty is through constant incremental change based on how it looks to me. Also, it means I cannot bring in a full design system, nor a JS framework, because just keeping this stuff properly plumbed in and up to date is more time than I can allocate to it.

So I am an SSR person. Fully static sites are done with Jekyll, Soupault, or an equivalent. Semi-dynamic one, that needs to adapt the data they show, with Phoenix. And if I need a dynamic page, it is going to be Liveview. My CSS is nearly always Tailwind, for reasons explained lower.

Do you know what I cannot use? None of the CSS-in-JS stuff. No JSX. No HTMX. No CSS Modules. No Web Components. None of this stuff. And yet, I can see the needs. And I see how things are being done on the JS side. So, based on all this, here is my CSS Wishlist, to allow us to catch up.

## Jpeg XL

## CSS Scope

## Declarative Templates

Let me write HTML somewhere in the document and "slot it" by id inside a template. Right now, SSR frameworks like Rails or Phoenix have to reproduce that capability. Make it native. It exists, for Web Components, but we can only slot things through JS. Let us slot through HTML. No need to make them have special behavior, just let us slot them in.

I get that it is a lot of work, but please

Insert Phoenix example

## DOM Parts

## Fonts subsetting with named properties or set

And better font tooling to subset with named sets and properties for the developers, at the CLI. And easier to explore Unicode properties

## Mixins

This is why we use Tailwind. Make it work the same way the class rule work in HTML. That is enough for us. At least as a first implementation

## Cascade Layers expansion (link support)

https://github.com/whatwg/html/issues/7540

Make it efficient by supporting it in the `link` elements, so that it can be loaded fast, instead of depending on `@import`

## Get the maths functions out of WD

## Fetch maps

This is not even a draft, there is as far as I can tell no movement. But JS got an import map and [there used to be discussions](https://discourse.wicg.io/t/proposal-fetch-maps/4259). Bring it back. Today. Please.

TODO: add an example, with things like URLs in CSS, CSS modules, or images in HTML

## H and hgroup

Need to explore this with how the whatwg spec changed recently
https://github.com/whatwg/html/commit/6682bdeee6fb08f5972bea92064fe250f1b4ec9c
https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html

## Conclusion

I ask for a lot, and a lot of my demands are... far ranging. I know. I also did not mention anything about color palette here, because I do not think we have good solutions anywhere right now, and that it is mostly a problem of tooling. I love the work on bringing different color spaces, it is great, but the main problem from my point of view in there is to design easy to use palettes with great A11y in mind.

For this, the two best stuff i know of are the old [Designing Systematics Colors post](https://uxplanet.org/designing-systematic-colors-b5d2605b15c) and [Stripe's great one from a few years ago](https://stripe.com/blog/accessible-color-systems) (Please Stripe, release that tool as FOSS). As you can see, this is more a problem of _creating_ the palette and navigating the color spaces than a problem of rendering them and expressing them.

I do think that a "theming" API in CSS and HTML would be interesting, but i also think that we are not there yet. There is still a lot of unknown to explore. That said, if Developer Advocates in the corresponding WG and Vendors want to talk, feel free to contact me on Mastodon or by Email, both at the bottom of this site. Otherwise, I hope you enjoyed reading from a different kind of user of your platform.

If you are just someone that write web pages, maybe mostly using Rails, Django, Spring Boost, Laravel or anything else. Maybe you build Shopify shops or Wordpress websites. Then consider weighting in. Consider bringing up your whishlist. Look at your workflow, look at what the JS world is doing, and consider what would help you. And ask for it. Talk about it. Make it known. The people working in the different WG needs this kind of information and material to support their case.