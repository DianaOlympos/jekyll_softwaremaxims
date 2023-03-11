---
custom_css: blog_post
title: A SSR dev Browser API wishlist
---
Last time, I shared my view on the current state of the browser APIs for SSR developers. This time, to not be seen as only criticizing, let's see at what is in the pipeline, or could be in the pipeline, from the browsers, to make our life easier.
<!--more--> 
As much as possible, I will try to explain what it will or should do, what stage it is at, and why I think it would be helpful.

## JPEG XL

This one should be pretty simple. I want JPEG XL. Yesterday. Lossless re-compression of JPEG giving us a good 20% instant bandwidth bonus would be a good enough reason. There are a lot of JPEGs out there, images are a significant part of the bandwidth and data we send up, especially in e-commerce. Losslessly reducing that with a one-off batch run is probably worth a percent of the whole internet GDP.

On top of this, the JPEG XL progressive decoding is far easier and nicer to use, with saliency-based progression. This should enable us to not need placeholders and complicated loading as much, which would be a _massive_ DX progress for SSR people. This can be a massive part of our efforts because images are usually the biggest performance components on SSR websites. None of the other "modern" image formats have all of that.

State of it? Well, the standard is done. The patent and licensing situation is great, which is not always a given with image formats. That sounds good, right? Ready for browser implementation! Well. Firefox has it behind a flag, which is good. But on Nightly only, less good. Chrome and all the derivatives had it behind a flag... and ripped it off recently. Safari has not moved at all.

At this point, from an SSR DX perspective, the lack of transparency on what is happening with JPEG XL and why it seems no one wants to bring it to us is... quite disconcerting. To not say, is starting to generate real anger in some corners. Browsers, if you do not want to support it, particularly on mobile where Chromium and Safari are the only players realistically, please come forward and explain your problem with it. Because this is quickly looking like you are hurting the whole Internet progress due to petty internal disputes.

## CSS Scope

I think [the proposal does a better job](https://drafts.csswg.org/css-cascade-6/#scoped-styles) than I can at explaining this one. The basic idea is that you can define a start _and an end_ for a scope in which the CSS classes written in that block will apply. This would allow us to bring in a lot of the learning from BEM but also components and CSS Modules to our CSS world. I want them yesterday pretty please.

The proposal is pretty advanced from a standard point of view, but there is not yet any implementation by a vendor as far as I can tell. There are some performance concerns, but I think they are pretty limited. Please, vendors.

## Declarative Templates

Thanks to the work done for Web Components, we now have templates with slots in HTML. It is great... except I cannot use them in the SSR world, because you can only use them with a Shadow DOM and attach them to an element with JS. Let's see an example of what we can do.

```HTML
<template id="element-details-template">
  <details>
    <summary>
      <span>
        <code class="name">&lt;<slot name="element-name">NEED NAME</slot>&gt;</code>
        <span class="desc"><slot name="description">NEED DESCRIPTION</slot></span>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributes</span></h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr />
</template>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description">A mechanism for holding client-
    side content that is not to be rendered when a page is
    loaded but may subsequently be instantiated during
    runtime using JavaScript.</span>
</element-details>
```

The problem here of course is that I have no way to link that template to this custom element without using JS. Gimme a way to do it declaratively, please. I don't care about the custom behavior of custom elements, but being able to have native support for templates and slots would avoid every framework and templating engine reinventing it, badly.

Let me write HTML somewhere in the document and "slot it" by id inside a template. Right now, SSR frameworks like Rails or Phoenix have to reproduce that capability. Make it native. It exists, for Web Components, but we can only slot things through JS. Let us slot through HTML. No need to make them have special behavior, just let us slot them in. I get that it is a lot of work, but please

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

Need to explore this with how the WHATWG spec changed recently
https://github.com/whatwg/html/commit/6682bdeee6fb08f5972bea92064fe250f1b4ec9c
https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html

## Conclusion

I ask for a lot, and a lot of my demands are... far-ranging. I know. I also did not mention anything about color palette here, because I do not think have good solutions anywhere right now, and it is mostly a problem of tooling. I love the work on bringing different color spaces (display-p3, good job!), it is great, but the main problem from my point of view in there is to design easy-to-use palettes with great A11y in mind. And the CSS `contrast` will help a bit but not that much really. We have a bigger problem in defining color palettes systemically. The only approach I know about is from [Mineral UI a few years ago](https://uxplanet.org/designing-systematic-colors-b5d2605b15c) and [Stripe's great blog post from a few years ago](https://stripe.com/blog/accessible-color-systems). But both would need massive tooling progress on the designer and developer side, and no one has been able to find a commercially viable way to build these. Please Stripe, release your internal tool, the one you show in your blog post, as FOSS. As you can see, this is more a problem of _creating_ the palette and navigating the color spaces than a problem of rendering and expressing them.

I do think that a "theming" API in CSS and HTML would be interesting, but I also think that we are not there yet. There are still a lot of unknowns to explore. That said if Developer Advocates in the corresponding WG and Vendors want to talk, feel free to contact me on Mastodon or by Email, both at the bottom of this site. Otherwise, I hope you enjoyed reading from a different kind of user of your platform.

If you just write web pages, maybe mostly using Rails, Django, Spring Boost, Laravel, or anything else. Maybe you build Shopify shops or WordPress websites. Then consider weighing in. Consider bringing up your wishlist. Look at your workflow, look at what the JS world is doing, and consider what would help you. And ask for it. Talk about it. Make it known. The people working in the different WG need this kind of information and material to support their case. 

For this, the two best stuff i know of are the old [Designing Systematics 