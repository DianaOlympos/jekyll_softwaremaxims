---
custom_css: blog_post
title: Support Maintainers without SBOM
---

I got a lot of engagement and discussions over the last month around ["I am not
a supplier"](/blog/not-a-supplier). I am happy to see the conversation
happening. One of the particular topics made me a little angry though. I heard
multiple times the argument that some organizations want to support maintainers
financially, to ensure the sustainability of their Digital Infrastructure. But
they cannot until they have a working Software Bill of Materials (SBOM), because
otherwise, they cannot know who to direct the money to.<!--more-->

I want to talk about this a bit more today. I do not think this is a valid
argument. I will explain what a SBOM is, why you probably do not need it to
support your Digital Infrastructure, and then even explain to you _how to find
where to send the money to support it_. So if you legitimately have a budget to
spend on the FOSS maintainers that make your business successful, you can follow
this recipe to help them.

And you know what? I will even make it easier. If you have a budget but do not
know how to spend it, I will help you. The button under this paragraph will
allow you to pay me 4,000EUR, for up to 5h of consultation with your teams. And
at the end, I will send you a report of the different organizations you can
support that will ensure the sustainability of the Digital Infrastructure of
your business. And I will even recommend a reasonable amount to send to each.
You will just have to sign the checks. Easy, simple, exactly what you keep
asking for.

<a markdown="0" class="cta-blog" href="https://calendly.com/thomas-depierre/foss-sponsorship-consultation">
Book a FOSS Support Consultation
</a>

## SBOM 101

The idea behind a SBOM is that when a vulnerability is discovered for a piece of
software that is part of our Digital Infrastructure, we need to update it with a
fix to reduce that potential breach. To do that, you first need to know that you
depend on this piece of software. Then you need to find all the places that use
it in your systems. And finally, you need to upgrade them all to the fixed
version. Every single one of these steps is hard.

Modern systems may use thousands and thousands of these packages, each of them
with its dependencies on another piece of software that they bring with them.
And every one of your services that depends on one of these packages may be
using a different version. On top of that, it is highly possible that no one
remembers how the service uses it, that it uses it, or even that the service
using that particular vulnerable package exists. It is a mess.

What SBOM enable, is to have for every single part that composes your systems, a
file that lists all the packages it depends on, their versions, and all this
information for all the dependencies of these packages too. They allow you to be
able to answer the questions "Do we use the affected package", "Where do we use
it" and "Are we still using it". This is a very valuable thing to have. For
multiple reasons, a lot of them political, there has been a great push toward
making it easier to generate these SBOMs and push for their use.

This is a great use case for SBOM of course. Knowing that you need to update is
not easy, nor is it to keep up to date with the firehose of vulnerabilities
announcement to decide if you are impacted. Tools to make this easier are more
than welcome.

Of course, we have not seen a push to support the package managers of the
ecosystems, mostly maintained by volunteer work, which is the natural place for
the tools to generate and keep up-to-date SBOM.

## Raising awareness with SBOM

What a SBOM is also being sold as a solution to, is support for FOSS. After all,
the argument goes that organizations do not support FOSS maintainers because
they do not realize they depend on them. Our dependency trees are really large
and deep, and a lot of these packages are obscure and hidden from view. They are
infrastructure after all. If it was obvious all our systems depend on them,
everyone would rush to support them.

And so SBOMs get sold as a solution for the FOSS sustainability problem. All we
need is to get SBOMs for everything and make all the tooling support it. Make
all the different standards for SBOMs interoperable. Deploy it to every
organization out there. And then use them to show and convince the executive
layers to finance maintainers. Should be ready in a weekend.

Snark aside, while SBOMs are not ready for prime time, and I doubt they are
going to be in wide use anytime soon, I think there are other reasons why this
argument does not pass a critical examination.

## You do not need SBOMs to support FOSS

Most of the Digital Infrastructure is shared. It is not specific to one obscure,
hidden package that only a specific organization use. Most of our Digital
Infrastructure is the same across all the industry. Nearly all our servers run
Linux. A lot of containers are running on Alpine or Ubuntu. Nearly everyone uses
OpenSSL. Nearly every ssh utility is from OpenSSH. If you use HTTPS, there is a
huge chance your certificate comes from Let's Encrypt. Your teams probably
develop the vast majority of your services in a specific language and the
ecosystem that come with it. Your developers use curl, and some of your
dependencies use libcurl, I can promise you. You depend on Autoconf. I could
keep going.

These are just examples, but they are deeply true. And they probably cover the
vast majority of our problems to support our Digital Infrastructure. You do not
need deep introspection into your services to find which part of the shared
Digital Infrastructure you depend on. If organizations had tons of budget
earmarked for the sustainability of their infrastructure, but the limit was that
they could not find where to spend it, we would have an easy solution.

But in case this is the problem we are facing. That there is a budget but our
industry simply cannot provide guidelines on how to spend it, well I will spell
out the guidelines.

And remember, if you want them in a nice report tailored for you with your logo
on it, to give it to your executive to convince them, I offer that service.

<div markdown="0">
<a class="cta-blog" href="https://calendly.com/thomas-depierre/foss-sponsorship-consultation">
Book your FOSS Consultation today
</a>
</div>

## Where do I send my money then?

* Does your production server use Linux? Yes, so [go sponsor the Linux
  Foundation](https://www.linuxfoundation.org/about/join). By doing so, you will
  also support a lot of the rest of the ecosystem, so even if it is all the
  budget you can spend, you already are impacting the whole ecosystem.
* What is the main programming language your organization uses? It supports the
  majority of your business. If you don't know it, ask any of your software
  engineers, they will know. Go find the "Ecosystem Foundation" for it. PHP,
  Haskell, Python, Erlang, Rust, there are a lot of these. They are happy to get
  membership, and support projects over the whole ecosystem of their language. A
  good way to have an impact right now on a large amount of your dependency
  tree.
* Do your software engineers use OpenSSH? Yes, they do, so you can sponsor the
  [OpenBSD Foundation that supports
  it](https://www.openbsdfoundation.org/donations.html)
* Does any of your services use Let's Encrypt under the hood? Yes, it does, so
  consider donating to [the Internet Security Research Group that maintains
  it](https://www.abetterinternet.org/sponsor/). They also invest in securing
  the Digital Infrastructure for the future, so you are doing a two-in-one here.
* Are you using curl in your infrastructure? You do, just go ask one of your
  operational engineers to be sure. You can donate to support its security and
  development [on their opencollective](https://opencollective.com/curl)

I could keep going but I am going to stop here. You probably get how this work
at this point. It has probably not escaped your eye while going through these
sponsorship websites, that the entry price to sponsor your Digital
Infrastructure is low. This is by design, after all, that is what sharing the
costs helps with.

If you still have some budget left, why not ask your software engineers and your
operational engineers to list some of the tools they use all the time? You can
then use [opencollective](https://opencollective.com/become-a-sponsor) or a good
googling to quickly find where to sponsor them.

## A final word

I want to make it clear. I like SBOM and I am working on making them easier to
generate and work within the ecosystems I participate in. But I do think that
using SBOMs as the "we can only support maintainers once we have it" tool is a
misunderstanding of the size of the problem. Hell, I even think it is an excuse
to simply not pay anyone. As I have shown, it is not hard to find out whole part
of our Digital Infrastructure that you 100% depend on. And they need your
support today. Not in the potential future.

I understand that it is far easier to think that organizations care about the
sustainability of our shared Infrastructure. It is far easier and less scary to
think that the only reason we cannot support maintainers is that no one knows
they depend on them. But you know now. You can get official receipts from these
official organizations, all ready to get corporate sponsorship. And the budget
for entry is low. And this whole post should be readable by your executives or
directors, so feel free to send it to them. You have no excuse now.

P.S.: Of course, I do not expect anyone to follow my guide here. Even less take
my offer up for the consulting sessions. I will post a follow-up regularly with
metrics for these if anyone buys one. But I expect no one. This is me taking the
piss and making a point, not me opening a new revenue stream. [This said, I will
remind you that you can book a consulting session with me about this, which will
provide you with a full report of where to send the cheque and how much to put
on it.](https://calendly.com/thomas-depierre/foss-sponsorship-consultation)
