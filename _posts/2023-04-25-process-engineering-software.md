---
title: We don't have enough Process Engineers in software
---
When you peruse the depth of software engineering as a discipline, you find a
lot of techniques and tools laying around in corners. Pattern matching, tighter
type-checking compilers, property-based testing, snappy IDE, debuggers, dynamic
tracing, Result types, effect handlers, capabilities, model checkers, fuzzers,
etc. And yet, they are not in use in the industry. I posit that this is because
software engineering dedicated nearly all of its energy toward the invention of
product part of engineering, while neglecting the Process Engineering part of
the discipline.
<!--more-->

If you know what Process Engineering is, feel free to skip the first part, as I
will start by trying to explain through personal experience what it is. To try
to give you an idea of where it sits in engineering practice and what it is that
Process Engineers do. You can directly skip to the second part, in which I try
to highlight why Process Engineering matters for software. In particular, I will
try to show how Process Engineering is a lot of work. And I hope I can conclude
on something useful, but mostly please if you see the same things I do after
reading this, talk about it. Blog about it.

## Once Upon A Time

Before moving to software, I was working in electronics engineering (EE), as
part of a factory doing all kinds of coils and electronics power parts. So we
would create new power delivery parts, we would create new coils, we would adapt
old one, all kinds of R&D stuff, right? Except R&D was only half of all the
engineers working in this factory. What the hell was the other half doing?

As it turns out, Process Engineering. They would find out how to make
the product that the R&D devised. How would we set up the factory, which tools
were needed, which procedures would be used, which operation would be handled
concurrently with another. Regularly they would even have to design a new tool
from scratch to allow assembly or make it more efficient. They would then get
this tool done and sometimes go through multiple design pass on it. Sometimes they
would still be modifying a production line and a process years after the start
of the production, as the experience of actually using the process would inform
changes.

In the same way, when I worked in the car manufacturing industry, we would
talk of "starting a factory" or starting the production of a new model, it would
not only be a problem of designing the model itself but also how to produce it.
Even more, we would consider that a new factory would need months if not years
to "ramp up" and adapt its process before it is considered good enough at
producing said model.

What should you learn from this? That Process Engineering, the discipline of
adapting a product or tool to how people and processes will use it in
practice is a skill set on its own. That it takes as much if not more work than
inventing the product. And that it has a tremendous impact on the result.

## Process Engineering in Software

So why do I talk about this at all? I am a Software Engineer these days, right?
Well because some recent examples have helped me put into perspective the impact
process engineering could have on software. But let's start by setting the stage.

Type systems are not new to software. Nor is pattern matching, trait-based
polymorphism, affine type systems, type inferences, Result or Options, Unit
Tests, Package Management, Versioning, Property-Based Testing, Compiler Errors
and checks, Linters, Fuzzers, ... I could keep going all day. And we do all
agree that these are mostly good inventions, that have positive value on our
software. And yet ... most of the tools, programming language ecosystem and
products we release out there simply do not use them. At all. What gives?

Well the way I look at it is that I compare the few, recent, tools that do some
of these things that managed to get adoption. And then I compare to what are the
difference from the one that failed to get adoption. What were the innovations?
What did they do differently? What did Rust do that Ada do not? What did
Typescript do that Flow did not? It happens that they have one thing in common.

They spent an unorderly amount of time on engineering, for a software tool
targeting developers, toward the interface their users have. They spent
a ton of effort, if not most of the efforts, into actually being usable in
practice. Rust prides itself on not having invented most of their underlying
principles. The thing that Rust considers itself bringing to the table is an
environment in which you can actually use it. You have a working build system.
The standard library makes sense. The error messages point to real problems and
offer solutions. And they fit on your screen. Tests and asserts use colors and
formatting. You can actually use the File API on Windows and it works.

Does it all seems like small things compared to the fundamental progress of a
memory safe systems language? Maybe, but we had memory-safe systems
language before. What Rust bring is packaging it with an ecosystem that you, as
a human, can use. And that is rare. A lot of type system research and type
checking tools exist out there that are far more advanced than what we have in
our current languages. They are usually designed to work on our current
languages. And yet they do not see adoption. Because it happens that the hard
problem is not to type-check the program (even if it can be atrociously hard and
need a lot of engineering and research to get to that point). The hard problem
is actually to check something useful, in a setting that corresponds to how the
language is used, to find impactful problems, in a way that
make sense to the developer.

And you know what nearly none of the tools we give to developers or ops people out
there do? Any of this. We do not spend a lot of time doing Process Engineering
on our invention. We invent them, we offer them to other developers. And when
they end up not using them, or telling us how crap they are, we lament that this
industry is stuck in the dark ages.

## Step into the light

As an industry, we regularly lament about the state of security in software.
Nothing is well done, nothing respects good engineering principles. Why does
no one runs Valgrind? Why is not everyone running fuzzers? Why don't we have
capabilities, or a better firewall? Why is everyone leaving S3 buckets open? I
could keep going for hours.

And yet, the reality is that we have, in a lot of cases, the pieces of knowledge
and inventions to fix this. We could have tools that are far smarter and easier
to use for IaC. We know how to type-check a lot of this. Making firewalls that
are easier to configure and not open by default to everything is something we
know how to do it. We can invent ways to add capabilities to our programs. We
can type-check things. There are great property-based testing engines out there.
We know how to package runtime environments better and deploy them faster and
better. You do not have to deal with the pain that is the current Python package
Management or running Kubernetes.

Do you know what none of these tools and techniques have? A developer experience
(DX) that is ... Well, that actually exists. At all. Because as it turns out,
the problem is not into inventing these tools or finding how to tell the
computer how to do it. The problem is in giving a good DX to these. And in
funding that work. Because it turns out it takes a long time to do that, and a
lot of engineering. This is the lesson I take from the success of Typescript and
Rust. The bar to make our tooling better is low because we have this swath of
invention waiting to be deployed. And at the same time, it is high, because
having the means to make the computers run the algorithm is not the hardest
engineering problem to solve there. It is making it legible in a way that works
for the person that uses the tool.

## Good DX for the 99% is how we get better software

Jean Yang has an amazing blog post, [Building for the 99%
Developers](https://future.com/software-development-building-for-99-developers/),
which I wholeheartedly endorse. In particular, I think we underestimate how the
current state of Software is heavily due to the tooling we have access to. We
create unsafe, broken, painful to use, low accessibility, and slow software because
it is the only kind we can build with our current tooling. Doing
differently forces so much pain on the engineers that most developers simply
cannot do it.

I do not think this is a fundamental reality. I think applying Process
Engineering to our amazing inventions of the past few decades in Computer
Science would allow us to heavily change the game. It would allow us to get
better software on all these dimensions. Not because we would force people into
only building things well. But because we would make this process easy,
painless and the obvious road.

It is not an easy solution, and we first need to acknowledge we have a problem.
It means acknowledging that we have been atrocious at doing Process Engineering
for our tools, from Programming Languages and compilers to deployment tools. And
then it means doing thankless, long, and painful work over years to study what
engineers do, what they need and change our tools to adapt to them. Process
Engineering is never done.

But here is my hope. My hope is that the 2020s will be about DX and Process
Engineering for the tools of the craft of Software Engineering. There are
reasons to hope out there. It is at least what I get from the successes of
Typescript, Rust, Elixir, and all the other projects coming out of the woodwork,
from the thankless work of low-level engineers during the 10s. They showed us
"we can have nice things". We can choose to look in the mirror in shame we could
not do it ourselves. Or we can choose a brighter future and thank them for the
lesson. What do you choose?
