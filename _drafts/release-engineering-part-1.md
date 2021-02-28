# Release Engineering: What am i talking about ?

This is a serie. This serie was spawned from pain. The pain of having to do the work described here multiple time, with the same constraints. And finding no easy way to do it. And not a lot of guidance and resources out there to learn it. This is one first step into trying to solve part of that pain. This will be a serie in multiple part. This part is about defining what i talk about.

    1. [Release Engineering: What am i talking about ?](/blog/release-engineering-part-1)


## Reality, code base. Code base, reality.

I learned of the term Release Engineering in the [chapter of the same name in the SRE book](https://landing.google.com/sre/sre-book/chapters/release-engineering/). I felt seen. This was basically what i ended up doing in every company i joined. Not only that of course, but a sizeable portion of my time. 

I define Release Engineering as the whole work between your code being merged into the repo and the code running in production. CI, compiling, deploying, handling the networking to the rest of the infrastructure (database, monitoring tools, load balancers, DNS), feature flags tooling, etc. I sometimes call it "meeting reality". This is the tooling you use for the rubber to hit the road. It is a field that demand a wide breadth and the ability to dive into rabbit holes.

This is probably the part of your tooling your devs and ops invest the less in, simply by lack of knowledge. It is also probably the one that would give you the best Return on Investment (RoI) if you invested in them. Cutting time to production has incredible impact on products. You can totally get a whole pipeline done under 10 minutes, even 5 minutes. And this enable game changing practices.

## My usual use case

