---
title: What Diana have done, H1-2022 Edition
---

So we are now past the first half of the year and i have not published a lot. I feel like i should at least update a bit on what i have been doing in the first half of 2022.

## New Company, New Job Title
First of all, i am now a SRE at Indeed. I started looking for a new job at the start of 2022. Community was great, but the pace and risk of a startup in this kind of economy was not worth the salary i was getting. The offers i found as an Elixir engineer at the time were... underwhelming. Far too many red flags, far too many company that seems to not understand remote work.

I then got approached by Indeed. They were launching a new SRE team, centered around Incident Management. This fit right in the kind of stuff i have been learning about and exploring in the Learning for Incident and Resilience Engineering communities, so it felt like an offer i could not refuse.

The Interview process was the usual load of bullshit. But i am happy to say that since April 2022, i am now a Senior SRE in the Incident Management team at Indeed.

## Shipping Ryu in OTP 25
OTP 25 ship with the `:short` option for `float_to_binary/2`  and `float_to_list/2`. It gives significant boost in performance and significantly reduce the memory impact of these operations. It may sound niche, but it is quite impressive on JSON encoding, as Michal Muskala showed on the Jason project. Please use it if you are doing erlang. And for Elixir, you can use it already but your library will slowly upgrade to it as we keep dropping support for older versions of OTP.

I have spent a significant amount of time in 2021 to get that in. I had financial support from the EEF for part of it, which i am thankful for. To know more about what is entailed by this change and how it works, you can go watch the talk i gave at elixirconf.

That said it bring us to the elephant in the room that i think deserve its own point.

## The BEAM Situation
I am no longer being paid to work in the BEAM community. I am still bullish on Elixir, Erlang and the BEAM, and use it for all my personal projects. As you can see, i am still in there on my free time. I would have preferred to stay in the BEAM engineering community as someone paid to do the work.

But i am getting really scared of the direction of the community right now. Don't misunderstand me, José, Chris and all the maintainer are doing amazing work. The OTP team does great thing. But the organizations that use the BEAM seems totally disjointed from the ecosystem.

As of today, there are still only one or two person paid to work on the BEAM itself outside of the OTP team at Ericsson. No-one is paid to work on rebar3. Hex does not make enough money to pay the maintainers. The EEF does great job, but is nowhere near the amount of donations that would allow for engineers to see it as a force to bet on to put food on the table. Contributing to OTP is still a massive pain in the ass, with tooling that simply do not work and take hours to setup. Cowboy and its dependencies are not actively being worked on because Loic need to put food on the table. Fred Hébert, maintainer of tons of resources essential to the community, had to move out to SRE to find a job that fit his needs.

And the orgs keep saying they have trouble recruiting, while the foundation are crumbling due to chronic underinvestment. Let's be clear. I am not saying that other stacks have a far better prospect. This is a reality that you could find, at one level or another, in every language and runtime. But the BEAM community is supposed to be about robustness and anticipating the future failures. And in this domain, what i see is willful blindness.

And i understand why WASM or ML are areas to go for in order to attract new domains and new people to come in. But consider that to build on top of foundations, you need them to be solid. And the BEAM one may not be as solid as you think. If you want to know more, feel free to contact me, i have receipts and ideas.

Ok, Rant Over.

## HyperLogLog
I spend a good part of my free time the past 6 months working on my fork of the `hyper` reference library in erlang.

One of my personal project needed a good distributed way to do count distinct queries over massive sharded datasets. So i went looking at the erlang reference implementation. It is used in Riak, it should be good right ?

* It use rebar2 to compile, which is definitely not supported anymore
* When porting it to rebar3, it fails to run its tests due to a dependency on `:random` which was deprecated in favor of `:rand` a few years ago in erlang.
* After porting the test suite to `:rand` it became obvious that the library was... wrong. The test suite would not pass, purely based on it having a different set of random input, despite the invariant being tested not depending of the input in theory.
* It was not even on Hex.

At this point, the library was simply unmaintained for years. And bugged. So time to fork! And publish on Hex. In order, i ported it to rebar3. Ported the tests. Added `ex_doc` for documentation. Published it on Hex. And then started the work of making the test suite make sense (no, Proper is not a test runner for unit test), fixing the bugs and trying to make the codebase a bit more maintainable.

In the process, i managed to find a new, more precise, way to estimate from a paper from Omar Ertl. I added a few things i needed for safety like versionning, in order to not merge two HLL that are not compatible, which kinda matter in distributed systems. I have bigger plans for this, and it is definitely not at version 1.0 yet. At the very least i need better documentations.

But i think at this point we are quickly coming to the point where it would be the most advanced and complete hyperloglog implementation in all languages i have been able to find. Not yet mind you, but eh.

## And not a lot more.
And that is mostly the extend to my FOSS work on the past 6 months. It may not sound a lot, but the reality is that i probably can only find 2 to 4 hours a months to work on "personal" projects that do not pay me. And that limits what i can do. That is also why i have published so few things. A post take easily 2h to write, check for language errors and publish. It competes with all the rest for this limited time.

This is also why i am quite scared for the BEAM ecosystem. This situation is not specific to me. If we want things to evolve in the lower levels of the runtime, we are going to need the community to step up to support it. We cannot depend on Ericsson for everything. They have been great steward, but at a point, they have their own priorities.

To the next time, i hope you are all having fun in your own projects in the meantime.