---
title: We don't have enough Process Engineers in software
---
When you peruse the depth of software engineering as a discipline, you find a
lot of techniques and tools laying around in corners. Pattern matching, tighter
type checking compilers, property based testing, snappy IDE, debuggers, dynamic
tracing, Result types, effect handlers, capabilities, model checkers, fuzzers,
etc. And yet, they are not in use in the industry. I posit that this is because
software engineering dedicated nearly all of its energy toward the invention of
product part of engineering, while neglecting the Process Engineering part of
the discipline.
<!--more-->

If you know what Process Engingeering is, feel free to skip the first part, as I
will start by trying to explain through personal experience what it is. To try
to give you an idea of where it sits in engineering practice and what it is that
Process Engineers do. You can directly skip to the second part, in which i try
to highlight why Process Engineering matters for software. In particular I will
try to show how Process Engineering is a lot of work. And I hope i can conclude
on something useful, but mostly please if you see the same things I do after
reading this, talk about it. Blog about it.

## Once Upon A Time

Before moving to software, I was working in electronics engineering (EE), as
part of a factory doing all kind of coils and electronics power parts. So we
would create new power delivery parts, we would create new coils, we would adapt
old one, all kind of R&D stuff, right? Except R&D was only half of all the
engineers working in this factory. What the hell were the other half doing?

As it turn out, Process Engineering. They would find out how to actually make
the product that the R&D devised. How would we setup the factory, which tools
were needed, which procedures would be used, which operation would be handled
concurrently with another. Regularly they would even have to design a new tool
from scratch to allow an assembly or make it more efficient. They would then get
this tool done, and sometimes do multiple design pass on it. Sometimes they
would still be modifying a production line and a process years after the start
of the production, as the experience of actually using the process would inform
changes.

In the same way, when i worked in the car manufacturing industry, when we would
talk of "starting a factory" or starting the production of a new model, it would
not only be a problem of designing the model itself, but also how to produce it.
Even more, we would consider that a new factory would need months if not years
to "ramp up" and adapt its process before it is consider good enough at
producing said model.

What should you learn from this? That Process Engineering, the discipline of
adapting a product or tool to how people and processes will actually use it in
practice, is a skillset on its own. That it takes as much if not more work than
inventing the product. And that it has tremendous impact on the end result.

## Process Engineering in Software

So why do i talk about this at all? I am a Software Engineer these days right?
Well because some recent example have helped me put into perspective the impact
process engineering could have on software. But let start by setting the stage.

Type systems are not new to software. Nor is pattern matching, trait based
polymorphism, affine type systems, type inferences, Result or Options, Unit
Tests, Package Management, Versionning, Property Based Testing, Compiler Errors
and checks, Linters, Fuzzers, ... I could keep going all day. And we do all
agree that these are mostly good invention, that have positive value on our
software. And yet ... most of the tools, programming language ecosystem and
products we release out there simply do not use them. At all. What gives?

Well the way I look at it is that I compare the few, recent, tool that do some
of these things that managed to get adoption. And then i compare to what are the
difference with the one that fails. What were the innovations? What did they do
differently? What did Rust do that Ada do not? What did Typescript do that Flow
do not? It happens that they have one thing in common.

They spent an inorderly amount of time on engineering, for a software tool
targeting developers, toward the interface their users have. They actually spent
a ton of effort, if not most of the efforts, into actually being useable in
practice. Rust pride themselves on not having invented most of their underlying
principles. The thing that Rust consider itself bringing to the table is an
environment in which you can actually use it. You have a working build system.
The standard library make sense. The error messages point at real problems and
offer solutions. And they fit in your screen. Tests and asserts use colors and
formatting. You can actually use the File API on Windows and it works.

Does it all seems like small things compared to the fundamental progress of a
memory safe systems language? Maybe, but actually we had memory safe systems
language before. What Rust bring is packaging it with an ecosystem that you, as
a human, can use. And that is rare. A lot of type system research and type
checking tools exist out there that are far more advanced than what we have in
our current languages. They are usually designed to work on our current
languages. And yet they do not see adoption. Because it happens that the hard
problem is not to type check the program (even if it can be atrociously hard and
need a lot of engineering and research to get to that point). The hard problem
is actually to check something useful, in a setting that correspond to how the
language is used, to find problems that are actually impactful, in a way that
make sense to the developer.

And you know what nearly none of the tools we give to devs or ops people out
there do? Any of this. We do not spend a lot of time doing Process Engineering
on our invention. We invent them, we offer them to other developers. And when
they end up not using them, or telling us how crap they are, we lament that this
industry is stuck in the dark ages.

## Step into the light

As an industry, we regularly lament on the state of security in software.
Nothing is well done, nothing respect good engineering principles. Why does
noone run valgrind? Why is not everyone running fuzzers? Why don't we have
capabilities, or better firewall? Why is everyone leaving S3 buckets open? I
could keep going for hours.

And yet, the reality is that we have, in a lot of cases, the knowledges and
inventions to fix this. We could have tools that are far smarter and easier to
use for IaC. We know how to type check a lot of this. Making firewall that are
easier to configure and not open by default to everything is something we know
how to do. We can totally invent ways to add capabilities to our programs. We
can type check things. There are great property based testing engines out there.
We knows how to package runtime environment better and deploy them faster and
better. You do not have to deal with the pain that is current Python package
Management or running Kubernetes.

You know what none of these tools and techniques have? A developer experience
(DX) that is actually. Well that actually exists. Because as it turns out, the
problem is not into inventing these tools or finding how to tell a computer how
to do it. The problem is in giving a good DX to these. And in funding that work.
Because it turns out it takes a long time to do that, and a lot of engineering.
This is the lesson I take from the success of Typescript and Rust. The bar to
make our tooling better is low, because we have this swath of invention waiting
to be deployed. And at the same time it is really high, because having the mean
to make the computers do it is not the hardest engineering problem to solve.

## Good DX for the 99% is how we get better software

Jean Yang has an amazing blogpost, [Building for the 99%
Developers](https://future.com/software-development-building-for-99-developers/),
which i wholeheartedly endorse. In particular, I think we underestimate how the
current state of Software is heavily due to the tooling we have access to. We
create unsafe, broken, painful to use, low accessibility, slow software because
it is actually the only kind we can build with our current tooling. Doing
differently forces so much pain of the engineers that most developers simply
cannot do it.

I do not think this is a fundamental reality. I think applying Process
Engineering to our amazing inventions of the past few decades in Computer
Science would allow us to heavily change the game. It would allow us to get
better software on all these dimensions. Not because we would force people into
only building things well. But because we would actually make this process easy,
painless and the obvious road.

It is not an easy solution, and we first need to acknowldge we have a problem.
It means acknowledging that we have been atrocious at the Process Engineering
for our tools, from Programming Languages and compilers to deployment tools. And
then it means doing thankless, long and painful work over years to study what
engineers do, what they need and change our tools to adapt to them. Process
Engineering is never done.

But here is my hope. My hope that the 2020s will be about DX and Process
Engineering for the tools of the craft of Software Engineering. There are
reasons to hope out there. It is at least what I get from the successes of
Typescript, Rust, Elixir and all the other projects coming out of the woodwork
from the thankless work of low level engineers during the 10s. They showed us
"we can have nice things". We can choose to look in the mirror in shame we could
not do it ourselves. Or we can choose a brighter future and thank them for the
lesson. What do you choose?
