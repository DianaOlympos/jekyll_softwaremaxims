---
title: Reviewing AI Code Is Not A Viable Argument
---

I am an LLM Coding Assistants skeptic. It is not because of IP laws problems
(even if they are highly problematic), nor is it for ecological and ressource
comsumptions reasons. It is not even for "they are all crap" reasons. My problem
with LLM Coding Assistants is that I cannot see, in the face of the scientific
evidence, how they can help someone write code better or faster.

And the thing that irritate me is that it seems that none of the proponents of
LLM Coding Assistants seems to ever address this problem and this evidence when
they defend their tooling choices. Worse, it seems that they give fuel to my
arguments everytime they write a rebuke of the skeptics. So let's look at what I
have a problem with, how empirical scientific research support that view, how
proponents of LLM Coding Assistants could show this is not a problem and then
how right now they are doing the actual opposite.

## The Intern Problem

The fundamental problem of LLM Coding Assistants that my criticism center on is
their relatively high risk of getting things wrong. For all kind of reasons,
some structural to how LLM works and other more akin to the interfaces we
provide to interact with them, LLM Coding Assistants get things wrong. It can be
hallucinations, typos, simply doing something that is not linked to the task
demanded, going into a different path, etc etc.

A lot of people I have talked about that experimented with LLM Coding Assistants
explains that they feel "Like an intern". Like an intern, you should not expect
too much from them, you should expect that everything they do will be more or
less wrong, and that they have no idea what they are doing, but are highly
enthusiastic. I see they never got me as an intern. I was definitely not
enthusiastic.

And their answer to that problem, the one you will see all over the internet, is
simple. You just do the same thing that you do with interns and junior
developers in your team. No, they do not mean you put everything they did in the
bin and forget about it. What they mean is that you should review all the code
yourself. I mean, you are the human that know better. And you are the one
responsible for the code anyway. And on top of this, you are doing that for all
the code that get into your codebase anyway, you do not let code get in without
a review, right?

## What We Means When We Say Reviews

First of all, I want to be clear here. There are different practices in the
litterature and in the profession grouped under the term "review". So let's be
explicit here. Seeing the degree of (mis)trust and potential mistakes there, we
should not accept the kind of "lightweight and heavily distributed" reviews that
we see the most in our industry as the standard for LLM Coding Assistants
supervision by a professional developer. They are not a bad thing to do, nor are
they inefficient, but they have been shown in the litterature mostly as good to
distribute knowledge of changes and as a way to enforce all kind of surface
level rules.

For AI Coding Asssistants, we will need a proper "code review". Not something as
formal and complex as reviews of old, by committees, painstakingly checking
every line one by one over a few hours. But still, we want something quite
involved and complete. After all, these are interns writing sometimes highly
complex code. And if there is something we know in software, it is that the
devil can be in the details.

## The Limits Of Reviews

Without going into some philosophical depth of reviewing as a practice, there is
a glaring problem in this idea. From all the research we have (and if I am
motivated, you should see a lot of links to references in the next paragraphs),
we have learned, empirically a few things about code reviews. And the evidence
is relatively solid here, within reasonable limits. You will see that these do
not matter there.

1. A review that last more than 1h is too long.
2. A review that has to be effective cannot be more than 400LOC at a time, in
   that time.

Empirical research has shown that reviews that are longer than 1h quickly reach
diminishing returns _whatever is the size of the code being reviewed_. So this
is not only that people cannot find bugs anymore after 1h because they already
thoroughly reviewed most of the code. No, it is more linked to the fact that
after 1h at that level of attention, people start getting tired, bored and
simply need some time off.

Of note is the total absence of research as far as I could find, on the recovery
time needed between review sessions of 1h. So I canot tell you how frequently
someone could do 1h review sessions. But we could probably accept an extreme maximum
limit of a handful per day. Which is probably far more than most people could
do, I would probably put the average at 2, but eh. That is still in the right
ballpark.

The second limit that has been seen in empirical research is that speed, that is
number of Lines Of Code per Hour (LOC/H) is highly variable, mostly depending on
the context of the code, the kind of code being reviewed, experience, knowledge
and the rest of your expected reasons. But something that is regularly pointed
out is that, even if there is no hard cut off, it seems that a maximum of 400
LOC/H is a good maximum speed acceptable for efficience, as nearly no review
above this speed seems particularly effective in the empirical data at finding
and flagging defects.

## What It Means For LLMs

So, if we combine the claim that the solution to LLM Coding Assistants problems
is to review the code, with the empirical evidence from scientific research on
code reviews, what do we get? For every 400 LOC written by a LLM Coding
Assistants (at best, less for code that are hard to review), we need one
professional senior developer to spend 1h of his time reviewing the code. And he
only has between 10 to 40 of these reviewing slots per week, with a recovery
period in between of unknown lenght, but probably of at least an hour or two.

And that is without taking into account that these slots of intense
concentration are probably in high demand. Meetings, code to think through,
design sessions, incidents, etc. You better hope you can take all of them. This
means that in the best case scenario, a developer using a LLM Coding Assistant
can write, review and commit, at best, a few thousands LOC per day to a
codebase. And that is the best case scenario, a more realistic one is less than
1k LOC per day.

If that sound high, remember that this comprise everything. Boilerplate, tests,
migrations, configuration, etc. And that this is the best case scenario, where
most of the code is boilerplate and easy to review. I have basic unique test
files that are more than 400 LOC. So the productivity of said developer is not
going to be really high. Hell, if anything, this sounds like a real ceiling to
how good these LLM Coding Assistants can help in writing code.

## But Wait, It Gets Worse

This makes the "It is ok, you just have to review everything like usual"
argument complex to believe in. After all, even if they were right, it would not
really provide a speed up or that much more productivity, due to the limits of
code reviews. On top of this, remember that this is empirical evidence coming from
research on how human reviewers find human coders defects in code. We have no
evidence that humans reviewing LLM Coding Assistants code are as efficient as
code review by humans of humans code. If anything, we have some tentative
evidence that humans that review code generated by LLM Coding Assistants are
_more confident_ that they found all the defects, while finding less defects.

The output of Human Reviewer teamed with a LLM Coding Assistants is of lesser
quality than the one of Human Reviewer teamed with a Human Coder. But the
reviewer in the first case believe that they did a better job. So not only is
the "just review everything" practice leading to high limits on productivity
benefit of using the LLM Coding Assistants, we do not even have solid proof that
it even _works at all_ to fix the problem of LLM Coding Assistants being wrong,
a lot.

Note that I never talk of the cost of _fixing the defects_ here. I am only
talking of the ability of professional developers, in a professional
environment, of reviewing code in order to flag problems. This is not even about
how costly the defects introduced by LLM Coding Assistants are. This is about
how costly reviewing the code generated is. Whatever the defects are or how many
of them there are. Even if the LLM Coding Assistants were extremely good, these
costs would stay the same and the productivity hit the same limits.

## I Mean, It Could Be Worse

Well. Bad News. It does get worse. There is a benefit of using LLM Coding Assistants
regularly touted by developers that are proponents of them and are going all in
in using them as part of their professional tools. It is that they can type and
produce the code that is the most painful to author and deal with in your
professional life. Here is a quote from a proeminent and visible "bash the
skeptic" blogpost contemporary to me writing this, talking of what LLM Coding
Assistants can produce.

> Also: 100% of all the Bash code you should author ever again

I want to stop you there for a minute, so you can think through what the author
mean here. He means that you do not have to write your shellscripts yourself.
You can now let the computer, the LLM Coding Assistant, do that torturous
painful part. No need to lose you sanity anymore, you can let the code that is
the easiest to get wrong, the harder to review, the harder to understand you
made a fatal mistake that will blow up everything be written and handled by the
machine. The code that is so loose on parsing but also so semantically
overloaded that a simple typo in a ponctuation could be utterly harmless or
literally make you delete a whole computer. That code.

Well you can just let the thing that get everything wrong randomly all the time
write it. And then you can just review it and never have to write it ever again.
I mean what could go wrong. This is not like it is the hardest code to review
for mistakes right? Right? RIGHT !? I mean, maybe they have not at all addressed
the question of if we _actually can review LLM Coding Assistant output_ in a way
that works out.

But for sure, they are not touting as the main use of this the code that is also
the hardest to review effectively. RIGHT ?! Yeah they are. And this is where
they lost me. They do not stop at not engaging with the argument of "are you
sure that reviewing the code solve the problems?" or the "but if we do all that
reviewing,is it really more productive and better?". No they go deeper. They
offer the code that we know, as a professional field, is the hardest to review
and get right, as the best application for LLM Coding Assistants.

## What To Do To Make Me Calm Down

Ok, I will calm down. Sure, noone engaged with my argument, sure I keep pointing
at problems, sure I yell wolf at people using these tools to make their life
easier. All nice, keep yelling at cloud, but how could someone convince me?
After all, I could be wrong, can't I? I mean, if I use science all the time to
support my point, I should also have some ideas of what could prove me wrong,
no?

Yes. First of all, I would like to see empirical research on the ability of
humans reviewers to find defect in LLM generated code. And how fast. And how
much we can do it per day. We already have empirical study for this in reviewing
code generated by humans, so if you want to convince me my argument is wrong, we
will need a set of data that is human reviewing LLMs. We have some experimental
data and some empirical data already, but the dataset is limited in size and in
context. More reproduction would help. Note however that so far, the scientific
data point that human are _bad_ at reviewing LLM (or that LLM are good at
avoiding detection). This is consistent with expectations, LLM are trained to
evade detection. But maybe this was a fluke.

Secondly, you could try to show us how the review of LLM generated content is
different from reviewing human generated content. Maybe all this data and
empirical evidence we have is not applicable here. Maybe LLMs are sufficiently
different that this is a qualitatively different problem. In which case, my
arguments against LLM Coding Assistant fall apart. Note, once again, that so far
there is tentative burgeoning evidence that reviewing LLM generated content is,
indeed, different. But it is point at reviewing it being harder than human
generated content, which would make the argument I present here even more
powerful. So beware of what knowledge you search.

## And Yet I Am Mad

The argument above is not the only reason I am an AI Skeptic, but it is probably
the biggest one I have against LLMs Coding Assistants. Mostly, I cannot see,
knowing all of this information about code reviews, how we can get benefit, as
professional developers, out of LLM tools using this interface and process. It
flies against everything we know about producing quality code.

But the thing that really drives me crazy is not that we keep getting these
tools and process offered again and again by vendors, despite said scientific
evidence. No what drive me crazy and angry is being called "nuts" by someone
that never even engage with the problem or the question I asked. I have yet to
see a single one of the AI proponent even engage with the problem or try to do
empirical evidence research on this.

I am used to this behaviour. I have seen the same thing play again and again in
our field around things like TDD, types systems, separating test and coding
teams, CI/CD, devops, etc. Anecdotal data always win in our field, even if it
flies against everything the empirical evidence shows. But still. I would like
if our field stopped at bloodletting. Let's try to have an actual discussion
about ergonomics and empirical evidence. If you want to convince me, please stop
calling me nuts or bringing anecdotal information about "hey this time it worked
for me". Start looking at how we got all this empirical evidence around code
review in the first place and go do some studies. Please. Let's use that moment
to start taking our professional tools seriously.
