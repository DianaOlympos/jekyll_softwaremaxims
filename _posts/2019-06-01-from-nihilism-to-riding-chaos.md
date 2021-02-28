---
custom_css: blog_post
---
This post is part of an ongoing "thinking aloud" series. It is meant to
"put into words" some of the ideas and models I use at the instant it was
writing to think about Resiliency Engineering and Software.
<!--more-->

## SINTEF report

I have been reading a report on [Organisational Accidents and Resilient Organisation published by
SINTEF](https://www.sintef.no/globalassets/upload/teknologi_og_samfunn/sikkerhet-og-palitelighet/rapporter/sintef-a17034-organisational-accidents-and-resilience-organisations-six-perspectives.-revision-2.pdf)
lately.

It provides multiple models that are used to look at accidents. It also looks at how they articulate with each other,
and how they could be implemented in accidents analysis and in organisations. And as interestingly to me, it also looks
at how they influence or created each other, in a kind of historical look at the field of Safety.

I have been thinking for a few years now on how we, as a field, can study how people move from the "old way" to look at
safety to "new ways" to look at safety through resilience. It has been shown again in the past few weeks during my
interactions with multiple newcomers in the community that this shift of perspective is not easy. Yes, once integrated
it can not be "unseen". But it is also a journey. And it seems we do not have yet a lot of attempts at creating a
journey to it.[^1]

I am not going to offer here the build of one. I will point out some of what I see as stages I remarked and some of
their characteristics.

## The "best practice" stage

This is, I think, the default stage in most of the people we will talk to. This is the stage most of the software
engineers I talk to are in. This is a stage that looks a lot like "Safety-I" or a "barrier" model of safety.
Practitioners in that stage think that the complexity of their system is accidental. If only we could follow a perfect
set of "best practices" and follow the process, then we would not have problems. Practitioners in that stage will
concentrate on "actions" to take that will bring their system closer to "perfection" and relentlessly try to standardize
their process to avoid "mistakes".

At that stage, political and financial pressure to "go fast" or to "do it this way" tend to be seen antagonistically.
Management are the system to protect you from that pressure and the one applying it. If a leader that drives decisions
in a team in that mode move away, the team result will probably plummet. Solution to complex problem is seen through a
reductionism model. Build boundaries and define the interactions well.

This mode works relatively well and build the background in which most organisations are.

## The danger of Safety Nihilism

When put into contact with Resiliency Engineering materials or Safety-II material, this is the stage most practitioners
move in if they do not strongly reject the material. In that stage, the practitioner is able to gaze into the abyss of
complexity and may even accept that complexity is inherent to most successful software systems. They begin to understand
the "do not do" sayings of the RE advocates. Blaming individuals begin to go away. There is still usually some blaming
on organisations or on the blunt end.

This is a highly dangerous stage for the practitioner. While he understands the he may not be able to escape complexity,
there is still the same underlying expectations and knowledge that the "best practices" have been really effective
before. Or if they have not been, they could have! As the mind is still centered on the possibility to create a perfect
system, there is still a heavy research of "actions to take" to "better" the systems by implementing them. It is normal.
After all, if the "best practices" have worked so well, just adding a couple new one that come from "Resiliency
Engineering" can not hurt. It will not solve all problems, but it can solve some.

In the worst case, the practitioner can end up in what I call a Nihilistic state. After all, if there is inescapable
complexity to anything we do, then accidents will happen, and we can not stop them. This is close to the "Normal
Accident" perspective. The only way to avoid catastrophic incidents is to build systems that do not need that kind of
complexity in both control and operations. As software seems to regularly need that, better to stop doing it. Why would
we care anyway? Let's just all go take a holiday.

This is particularly dangerous. It can of course lead to abandoning all learning of Resiliency Engineering ("All you can
do is tell us to stop doing things that works!") and go back to the "best practices" stage. It can also, sadly, lead to
burnout or a bad spiral of negative thinking.[^2] These bad outcomes make me want to hope we had more
knowledge into how to accompany people to the next stage.

## Through the Looking Glass

At that stage, the practitioner went through the rapids of insanity.[^3] That does not mean they reached
some quite of Buddha status. There is still a lot to learn and discover. However, they did achieve a state in which they
see how the complexity is itself a solution to complexity. Yes, the environment is always changing, and the models we
have of it are always wrong. But this ability to change, evolve and redefine itself is also why the system can handle
accidents, because it can shift around the areas that are the most wrong. It can deplete some capacity that are not as
need in the short term to reinforce another capacity that is needed immediately.

This is analogous to discovery by the "Theory of High Reliability Organisations". Despite being in environments that
should be generating "normal accidents", these organisations seems to be able to avoid them by reconfiguring locally
through information exchange. This offer a way through the rapids. We can not rule out incident through a particularly
carefully designed system. But we can slightly change, evolve and direct a system to grow a better ability to navigate
that sea of complexity.

This feeling could be called different names. I like to use "riding chaos" as an analogy. Most of the practitioners of
Resiliency Engineering will probably be acquainted with the ["Dancing with Systems" analogy by Donella
Meadows](http://donellameadows.org/archives/dancing-with-systems/). This is the stage we would like to accompany people
into. There is still lot to learn and explore once you reached that state. At least people in that state grasps that
there is a solution and that it is not through "best practices" without too much mental dissonance.

Now... how do we help people get there? This is of course an open question and there will probably be multiple paths.
Can you help us discover some of them?

[^1]: Ok I could point at multiple attempts. The Lund university Master program is one of it. The Systems
    Thinking community have produced multiple. There are some attempts through theory of minds and meanings. But at that
    point it is obvious none of them is mainstream in our field.

[^2]: We probably all knows this kind of bitter software veteran that think everything is wrong in this
    industry.

[^3]: The Bursar was not technically insane. He had passed through the rapids of insanity sometime
    previously, and was now sculling around in some peaceful pool on the other side. He was quite often coherent, although
    not by normal human standards.” Terry Pratchett, _Interesting Times_
