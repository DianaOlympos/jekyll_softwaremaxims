---
title: You Are All On The Hobbyists Maintainer Turf Now
---

For quite some time, I have felt some unease at the public discourse around
OpenSource. In the past few years, we have seen a growing discourse around the
sustainability and security of the large body of OpenSource software.<!--more-->
The Software Supply Chaindiscourse, move from some startup to leave the
OpenSource movement with their code, movement from entities like the Sovereign
Tech Fund to support maintenance of critical infra, etc etc.

But all along this discourse, there was something feeling quite wrong for me. It
felt like my own experience as a maintainer and as a developer using opensource
dependencies was quite different from what everyone was talking about. And not
only me, but also all the network of maintainers and developers I regularly
interact with.

The solutions offered seemed to never meet the problems we had. They were all
deeply impractical if not totally useless. So I was wondering. Am I out of
touch, or are the elders' of the movement wrong?

## It is the Elders Who are Wrong

But I had no solid proof. I mean, I had a bunch of evidences and clues
supporting my hunch, but nothing really directly proving it. Until I stumbled
upon [Synopsys' 2024 Open Source Security and Risk Analysis
Report](https://www.synopsys.com/software-integrity/resources/analyst-reports/open-source-security-risk-analysis.html).
In the middle of this report, there is an amazing statistic.

> 77% of all code in the total codebase originated from open source

Well, that does feel like opensource won and the vast majority of software out
there, everywhere, in every app, is opensource. Commercial software already
lost, it is less than 25% of the total count of software out there. "Closing
back down" some codebases is probably not going to endanger OpenSource any time
soon.

While this provide me with strong support that nearly all of software out there
is made of opensource dependencies, with a thin glue and top layer of commercial
code on top, it was still not fully answering my hunch,

But then, the [2023 Tidelift state of the open source maintainer
report](https://tidelift.com/open-source-maintainer-survey-2023) brought me the
evidence I was lacking.

- 60% of maintainers describe themselves as unpaid hobbyists, while only
- 13% describe themselves as professional maintainers earning most or all of
  their income from maintaining projects.
- 23% of maintainers describe themselves as semi-professionals, earning some of
  their income from maintaining projects.

If we combine these two sets of data [^1] we obtain a fascinating result[^2].

- 46% of all code out there, in every app, is maintained by hobbyists
- 13,8% is maintained by "I sometimes get a bit of pocket money for my code".
- 40% of all code out there is maintained by an industry paid person.

So all in all, nearly 60% of all code being actively shipped in an app or
product in the wild is hobbyist maintained opensource. And that probably
undercount all the build systems and compilers that support this.

## How long is your weekend?

Now here is the thing. We do not know how much time these "weekend maintainers"
spend on their OpenSource codebase. But I can give you an idea. Probably around
1h to 2h a month.

They are also hundreds of thousands of them, spread across ecosystems,
dependency trees that go wider than you think, and more.

It means that anything you offer need to fit in 1h a month. That is it. And if
it does not, if it needs more invovlvement than that, we, as maintenairs, will
not do it. At all. And then what will you do? Throw away the 60% of the code
that the world depend on *in every single software product*?

No. You will simply discover that you made nothing better.

## You are on my turf now

If your plans for opensource sustainability or security does not align first and
foremost with this population *it is not going to achieve anything*. Forget
everything you think you know about security, paying for software, maintenance,
tools, and all that stuff.

This is a community that evolved parallel to you. And that evolved to deal with
its own constrainsts, that you know nothing about.

And no. If you participated in the Free Software movement of the 90s or early
00s, if you are a Libre/Free Software Activist, if you believe in Digital Rights
or anything like that. You do not know anything about it. This is not the same
world that you were part of. The complexity is off the chart, we are hidden
layers and layers under the scaffolding. And we are used everywhere.

So sit down. Learn. Shut up. Stop trying to bring solutions thinking you get it.
You do not. If you did, you would not offer the thing you are. You would
understand what I say here. You would be part of the people that just read what
you post and shake their heads. Before going back trying to keep everyone
machine still run after Apple botched another release of their filesystem. Or of
Autoconf.

You are in my turf now. You all depends on what we do and how we do it. And you
need to internalise that you are not the natives here. So observe. Ask
questions. And more importantly, please listen to us. If we tell you that you
are spewing nonsense, if we do not react to what you offer, if we seem to not
respect you, it is not because we are pricks. Not because we believe in shunning
outsiders.

If we do not respect you, it is because you are showing your ass.

## We Need You Here

You are the one that depend on us. You do not know the rules. You do not know
the systems. You do not understand its sharp edges. You need us. You need the
60%. Everyone's in this world now depends, one way or another, on us.

And we know that. And we are terrified of this. Because we know how broken it
is. How fragile. How I could wake up tomorrow and discover that the whole world
is on fire because of my code. We don't like it, trust us.

We are not shunning responsibilities. If we did *we would not keep the world
running*. Respect our work please. But yes. We need help. We want help. We want
you here to help us.

What we ask you, while we are growing the part that we maintain for all of you,
because yes, that percentage is growing every year, is to start by understanding
us. We want your help, but it needs to be helpful. Otherwise, it is just more
stuff we need to handle in 1h per month, on top of keeping the world running.

And the easiest way to not lose our precious time, the time we have so few, is
to simply ignore you all. Because we have a world to keep running. And we only
have 1h. Please don't waste this time. Who knows what the impact could be?

---------

[^1]: Do not do this at home, they are not the same thing and cannot be combined
    this way if you want to do proper work. But for this kind of thought
    leadership piece, and to get a rough idea of the whole field, it is not too
    bad.
[^2]: Beware, I am really conservative here. There is a huge possibility that
    the Tidelift report sample of responders is biased toward paid opensource
    maintainers, as it is their business. Same for Synopsys, they are probably
    quite conservative in their estimates.
