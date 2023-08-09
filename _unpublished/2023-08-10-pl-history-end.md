---
title: Where did the Rust go?
---
There is a term that is on a lot of lips lately. "Memory Safety". The theme of
the early 10s for software security is "Move to memory-safe languages". You hear
and see it everywhere <!--more-->in C++ events; CyberSecurity professionals
employed by some governments put it in every document; Foundations and academic
researchers put it in tons of papers; the Android team boasts of how focusing on
Memory Safety drastically enhances the security of everyone.

## Victory Lap

And you know what? About. Damn. Fucking. Time. It only took what? Three decades?
For the mainstream to realize what the people that have kept mopping the bodies
our field leave around were saying all along. Memory Safety, the thing everyone
told us could not be the silver bullet for safety we were claiming it was,
actually work. It is indeed a pretty good silver bullet.

And no, it does not solve everything, but it happens to solve many things. And
as someone that has been fighting that fight for the last decade[^1]; I could
not be more happy about it. And smug. I need to get a proper RESF pin to wear,
nicely enameled. Except... There is a small problem. One that keeps nagging in
the back of my head. What happened? How did we go from decades of pointing out
that the Emperor Has No Clothes, but no one was listening, to suddenly the "mode
du jour" is to move to memory-safe language ASAP? And what does this tell us
about ways to make significant changes in CyberSecurity?

## The Giant Corroded Crab In The Room

Oh yes. Rust. That is the change. Suddenly, everyone loves to talk about moving
to Memory Safe languages because something changed in 2018. We got a useable
memory-safe language. And not only was it Memory Safe. It is better than every.
Single. Other. Language. At the system level. It is more expressive. The
compiler has better UX. It has a build and packaging tool that works. It can use
3rd party packages. It can compose code. Its code is performant. It has a
helpful type system. It can handle union types. It can _pattern match_. It can
do polymorphism without all the pain of OOP based on classes. It comes with the
ability to write tests. It has a community writing state-of-the-art
implementation of parsers, command line interface frameworks, etc.

Someone finally decided to fund the engineering resources needed to take a
research language from the late 80s and _industrialize it_. You know, to make it
into something the industry can use. That has a good User Experience. An
actually helpful tool. It took the team working on it ten years, at a cost that
I over-estimated conservatively at 10 Million USD over that period. And, of
course, I am talking of Rust.

Rust's whole idea was to take all the research ideas around these domains from
the 70s, 80s, and 90s. And try to give them a fair chance to compete against the
mainstream. It was an experiment. One informed by a deep interest in the work
done in Programming Language and Computer Science since then. And damn, it is
paying back well, isn't it? It. Worked.

Except for one tiny thing. Everyone seems to forget that if this team and
community had not done the work, none of these new converts to Memory Safety
would be able to talk about it. They would not even know it was possible.

## Where Is The D In R&D?

The reason we are suddenly moving to Memory Safety is not because we did not
know how to do it before. As mentioned above, nearly all the tools we needed
were deeply researched and developed in the 80s. Rust really does not bring a
whole lot of new research (initially) in the PL domain. But until this team, no
one had been funded to move these ideas from the research domain to the
production one. What was needed was not research. It was engineering. And we do
not invest in that.

As a field, at least for what concern our tools of the trade, we stopped
investing in engineering a few decades ago. For a field mainly paid by budget
labeled as R&D, we put really little of it into our tools. Oh, don't get me
wrong. There was plenty of Research. Even today, you can find plenty of
programs, faculties, endowments, and other grants, for _research_ and prototypes
in PL. There is an active academic and prototype scene that is relatively
well-funded.

But are they turning these prototypes and concepts into production tools? That
would be the domain of Development. You know, the second part in R&D. Except we
stopped doing it. And when a few teams and individuals manage to get some of it
done, through the sheer sacrifice of their personal time or rare financing, we
get massive impacts on the industry.

## Game Changers

Bundler and lock files. eBPF. Typescript. VScode and the Language Server
Protocol. Rust. Swift. The LLVM (which enables a lot of the developments we are
seeing today). All of these come from small teams, which manage to keep trucking
at the Development to bring these ideas to production for a decade. And when
they finally released their tool, it changed the whole discourse.

And yet. Do you know what happened a few months after Rust was finally released
in a stable form and starting to get real traction? The whole Rust team was laid
off. Whoopsie. Well, yes, you see. We do not fund this work. Of course, people
use a memory-safe language now. What else would they do, really? Use some kind
of unsafe language? We are better than that!

I mean, except for the fact that for three decades, if not more, all the same
people kept telling us it was not possible. That we were barking at the wrong
tree. Refused to fund this work. Laughed at these ideas. Dismissed them as
"impractical". But of course, now that a few of the renegades did the job, now
Oceania was at war with Eurasia: therefore, Oceania had always been at war with
Eurasia. Memory Safety was always there. Nothing to see about how we all were
enabled to ask everyone to rewrite everything in a memory-safe language.

## Retrospective Anyone?

And no talking of the fact we could have had it three decades ago. No
retrospective on how a whole industry slept on well-researched, well- prototyped
ideas that are more productive and safer. And allows to write more code, faster,
with better quality. We will ham fist pattern matching into every language now.
There is no need to think about the fact that this has been a well-known tool
since the 80s. No need to look at what in our industry made us ignore all of
these tools for decades.

Let's not question the experts that never knew about all these possibilities
before we made it so big they could not ignore it anymore. Let's not change the
policymakers that kept us in this state. Let's not question the Infosec
industry. And more importantly. Let's never ask what else we missed. What other
massive systemic problems could we solve by investing small sums for a decade
into Development teams for these tools? It is all Research and Startups. This is
known. The End of Programming Language Engineering was proclaimed in the 90s.

Or. Maybe. We could sit down. Stop advocating to "move to Memory Safe Language
Yesterday Already". Stop publishing tons of policy papers and ways to enhance
the "Safety of the Software Supply Chain". Stop inventing new impractical models
to send a few peanuts to FOSS Maintainers through subscriptions.

## I Am Not Bitter, I Promise

And maybe we could do a proper retrospective of how we got into this rut. As a
field and an industry, we lost our capability to take a prototype from academia
and turn it into a product. And maybe, after we are better informed about our
current system and why it is a problem. And only after that. Perhaps we could
then consider systemic changes, maybe at a government level, maybe at the
industry level, that would allow us not to spend another 30 years ignoring the
_other_ problems that need new paradigm-changing tools to fix.

Like, I don't know. Why do engineers keep using "curl | sh" despite everyone
knowing it is highly dangerous? Or why we are still fighting worms using a
file-sharing protocol that was deprecated a couple of decades ago? You know.
Small things. No real impact on the world. It is not like this kind of stuff
infected hundreds of highly safety-critical systems all over our society.
Definitely not.

So if anyone of you with power wants to fund this kind of work? If you really
want to have an impact and not just make the headlines? Then feel free to
contact me. I can probably fill a whole workshop for a week in a hotel to do
that retrospective and offer some paths forward. And you would be surprised by
the result. It would probably be also quite cheap all around.

But we need someone with actual financing and power to do it. Because we are
drowning and desperate down there. And we are not bitter. Definitely not. I
promise. The punching-ball next to my desk is definitely not because we are fed
up with this. Definitely.

[^1]: Oh yes, I am part of the _young_ generation of people doing this. The
    oldest has already left the field. That is how long it took us to get
    something through finally.
