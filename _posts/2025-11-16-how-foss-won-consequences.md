---
title: How FOSS Won and Why It Matters
---

I regularly comment on the Internet on my views on most schemes proposed to fix
FOSS problems. They are mostly negative. I think that most of these schemes
cannot achieve any meaningful impact. It seems that most of these
disagreements come from the fact that I seem to work on different models of how
FOSS work. Over the years, I have tried to share parts of my model. This is part
of this endeavor.<!--more-->

## Enforcing Cost Control

I will not discuss in there that at this point FOSS won. If you want to discuss
it, I have other blog-post more appropriate. Let's agree, for the sake of the
argument, that FOSS won at this point. The vast majority of code shipped,
even in commercial products, and running on computing device is now some flavor
of FOSS. What we talk less these days is how we got there.

Usually, the usual model of FOSS victory I see thrown around is pretty simple.
Corporations don't like to pay for things, there was a free-as-in-beer offering,
so they simply took it and used it. This is a pretty direct anti-capitalist
argument, and it is one that resonate a lot with people. I do not fundamentally
disagree with it... except that I find it too reductive, to the point of
being harmful.

See, it is true that corporations do not like to pay for things. After all, if
you want to make a profit, you can raise your price or you can reduce your
costs. So, not paying is great isn't it? Yes. So I have a question for you. How
does corporations achieve this goal? How do you make your employee stop
buying software? Especially when, for so long, corporations were afraid of FOSS
licenses.

The answer reside in Cost Control. Cost Control is the business term for "making
buying something as hard, painful and time consuming as possible, so our
employees will not do it". It manifest itself particularly through Procurement,
through approval from accounting and from Legal validation of contracts. Let's
look at an example.

## Cost Control in Action

Let's say that I need to get a good Date Picker for our website. I got assigned
a ticket to create a form in which I will need to use a "fancy" Data Picker
experience. My corporation doesn't like FOSS, so I have to use a commercially
licensed software. What would it look like to solve that ticket?

First, I would have to collect my requirements and go to Procurement. Do they
already have an approved provider for this? They will probably not understand my
demand, so this is going to need a few rounds of meetings. After a few
weeks, they will confirm that we do not already have an approved provider for
this. Or my manager got tired of this and decided we would ignore Procurement.
So now, I would have to collect all existing solutions and a rough estimation of
their cost. This could be a bit complex, especially if different products have
different ways to calculate their prize. Once equipped with this knowledge,
I would need to validate with Accounting, my manager and probably their manager
that this line in the budget is approved.

Once that is done, it is now time to move back to Procurement. Indeed, we went
with a supplier that is not yet approved. As such, Procurement need to enter it
in the system with all the details needed so that the payments can be done on
time. That one is tedious, a lot of paperwork and back and forth with the
supplier, but relatively straightforward.

The next step is to sign the contract. This means reviewing it with Legal. Legal
probably got involved early, because they also had to validate all
kind of stuff. After all, if we take a supplier in, liability become a thing. We
have to protect our corporation. You need to check all the different
legislation, all the ways a commercial contract can go wrong, and bake it all
in. This is an important step. We don't want this contract to be badly worded
and end up costing money to the company.

And don't forget that we need this to be ironclad and complex, because software
is under complex Copyright Laws. This is not something you can easily reuse and
buy, like a few screws using expired patents. No, you _need a detailed contract
for every single piece of software_ because of how Copyright laws around
software works.

Ok, so we got Accounting approval, the supplier is in the Procurement system and
Legal signed off on the contract. We can now start integrating the Date Picker.
It took us 3 to 6 months to get there in most cases. Until next year, when we
will have to renegotiate the contract, sit down with their sales person to hear
their potential upsale, and of course amend the contract because the law change
since last year. This is going to now take us a dozen engineering and manager
hours every year.

## FOSS enters the scene

As you can see, this is a tedious, painful and even expensive exercise for the
corporation. And as an engineer or a product manager, this is also really
painful. I am now 6 months in to a ticket to produce a simple form that needs a
Date Picker. Without counting the recurring cost of maintaining the license. Is
there a better solution? One that could allow me to just... ship software
tomorrow so that my feature is live in time for the launch?

Yes, of course there is. It is called Free and Open Source Software. You see,
FOSS is an amazing hack for Cost Control and Copyright Licensing law problems.
It allows us to decentralize and eliminate the whole process. Legal pre-approved
a handful of well known licenses. If the code use this license, we do not need
to go through the whole copyright contract, because approval is baked into the
code itself.

It also cost nothing and no one restrict our access, so we do not have to talk to
Procurement. And Accounting does not have to be involved either. In term of
liabilities, no need to decide who is responsible for what and write it down in
a contract, the license says clearly that we are the only one responsible for
everything. Not the best in term of Risk Management, but it makes Legal work
easier.

At the cost of nothing, we got back 6 months of velocity on this
ticket. This is what FOSS provide to corporations. The cost of the software
itself would usually not be a huge budget line. But the cost of procuring that
software are pretty high. Multiply this by the thousands if not hundreds of
thousands of different dependencies in the code stack you use, and the
organizational cost of managing the licenses spiral out of control.

FOSS solve that problem far more than it solves "we don't want to pay". Most
corporations would be surprised by how cheap it would cost them to pay
for the FOSS software they use. But due to copyright, liabilities law and
procurement rules of an actual Supply Chain, they cannot survive building a
Software Supply Chain. The tools are not adapted. FOSS was the hack to bypass
having to create these tools.

## It Works Both Ways

Of note, this works both ways. See, if you are a FOSS maintainer, by the miracle
of your software bypassing copyright laws, liabilities laws and the procurement
process, anyone can be a FOSS maintainer with very little overhead. You don't
need a legal entity, you do not need lawyers, you do not need liability
insurance, you do not need sales people, you do not need to make a profit.

All you need is to want to write some code and be a pretty good expert in a
domain. The result is that we get high quality software libraries from FOSS,
because experts now can produce the code, instead of being blocked by the
massive framework of the corporate supply chain. Once free of the trapping of
the Supply Chain, you allow anyone with the expertise to produce.

And this is what made FOSS win. This hack around the whole Supply Chain
trappings allowed the users to go faster and massively reduce their cost in the
management of dependencies. And for creators, it allowed them to write the
code that they could not write or make exist in the limits of the Supply Chain
framework.

## You Cannot Go Back

Here is the problem though. You cannot go back. If the solution you offer
recreate any of the Supply Chain framework problem, then your solution is Dead
On Arrival. Even if you manage to impose it for a small part of the market or
for some time, the system will revert to the mean. FOSS qualities will not
disappear and you will be back to where we are today.

Making licenses suddenly commercial for big entities? You are forcing people to
go back through the Procurement process. They will shift over time back
to a FOSS solution, even if it is less good. The pain of the Procurement process
is too high. And it slows down velocity too much.

Want to make the corporations introduce a big process for managing their FOSS,
like SBOM or mandatory upgrades or management of liability? Good job, you
made it even harder to actually use a commercial license. So the response will
be to hide the dependencies to everyone. Engineers don't like to
lie, I promise you. But between that or not shipping, they will pick shipping.

But don't forget the other side of the coin either. The hack that is FOSS not
only free the user side of all these complex and expensive process. It also
means the creator side doesn't have to deal with these complex process either.

It significantly lowered the bar to production. It is how we got the whole
society to run on software. If you make it harder for hobbyists maintainers, you
are going to crash society. I don't think that is the goal either. Another day,
we will talk of other parts of the models and how they can help us actually fix
the problem. Instead of just saying to people tha their solution will not work.

## If you are only here for the ranting, ignore this section

Want me to make this part of a talk that I could give to policy-makers? I want
to do it, because I think it is important if we want to make FOSS work for
society. FOSDEM host a room with people from the different EU entities for the
past few years. And I know they would love to host that talk.

The problem? I cannot afford to go to Brussels and spend a night or two there
for FOSDEM. The problem of hobbyists developers. We have to pay our lobbying
from our hobby budget. So I will probably not do it. But if you are an
organisation that think this kind of lobbying (it is lobbying) is necessary and
want to foot the bill, feel free to contact me. I will disclose your
involvement, I have a legal entity to invoice you if you want, I can help make
this work. But to be honest, I don't think you exist. Would love to be proven
wrong.
