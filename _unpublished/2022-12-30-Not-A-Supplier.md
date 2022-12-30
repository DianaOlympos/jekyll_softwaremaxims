---
custom_css: blog_post
title: I am not a supplier
---

For the past few years, we have seen a lot of discussions around the concept of the Software Supply Chain. These discussions started around the time of LeftPad and escalated with multiple incidents in the past few years. The problem of all the work in this domain is that it forgets a fundamental point. Let's talk about this.
<!--more-->

## The concept

In the past couple of decade, we have seen the rise of Free and Open Source Software (FOSS). In particular, this has enabled a massive growth of the reuse of pieces of codes, packaged as libraries. This has been possible due to a massive ecosystem of infrastructure that bloomed around the idea. Package Managers exist for every programming language environment under the sun nowadays, central repository holding the metadata needed to find the libraries and handle their distributions, etc

This has been possible due to the FOSS Licences being pretty lenient, enabling a reuse and remix of these libraries without the massive legal and financial headache that would come otherwise. A modern software project will probably have hundreds if not thousands of these dependencies, from OpenSSL to a test framework or a datepicker, across a wide spectrum covering things like a JSON encoder/decoder library or even the libc of the OS it is deployed on.

This ecosystem of dependencies, a lot of them transitive (dependencies of a dependency), is what the Software Supply Chain model call the Supply Chain of the project. Inside this model we will find tools that help manage it, like a Software Bill Of Materials (SBOM) that is supposed to hold the information of what libraries are used for this project, where they were found, which version, some hash of the content, etc.

## What is a Supply Chain

The idea of a Supply Chain does not come out of nowhere of course. In the manufacturing industry, the supply chain is the long chains of suppliers needed to produce what a particular factory output. As an example, if you assemble cars, you need seats, a lot of screws, cables, electronics, all kind of stamped metal sheets, etc. Your cable supplier need copper, plastic, energy and probably all kind of machine tools. Machine tools that probably need other machine tools to be built, screws, bolts, nuts, some electronic too... And we can keep going this long game of "what do you need to produce this car" until your diagram look like a massive spaghetti ball.

And then someone in an unknown small factory in Germany get sick and it happen that 5 level high in the chains everyone depend on their particular bold, and we are all screwed. A version of this problem happened early in the work to deliver the vaccine for the Covid19, when supply chain specialist realized they would need a lot more glass vials than could be produced in a year worldwide.

In order to avoid this kind of snag 5 level deeper the chain that would end up stopping their, valuable, production, manufacturing company have spent a lot of effort over the years to build relationship with their suppliers, at every level of the process. It is both really deep relationship and usually never enough, but isn't that the case of every complex system.

## Why do we talk of Software Supply Chain today ?

Well because company keep discovering that they have big problems in their products, and that it does not come from the code their software engineers wrote. The problem can come from the owner of a library deciding to stop providing access to it (Leftpad typically) and breaking half the Internet. 

Or it could come from a massive library used for mundane digital infrastructure (Like OpenSSL or Log4J) discovering they have a massive security problems that make half the Internet easy to pwn. 

Or someone could talk to the people owning these libraries, convince them they are here to help, get access and add a crypto mining code to it for their own profit (so many cases that i do not know where to start). 

Or the owner of the code could decide that he does not like people supporting a warmongering regime, so he will add code that destroy the computer of the engineers using his code, if they live in this part of the world (yes there have been a few instances of this too).

And then, everyone in these company discover that their product is open to spooky "action at a distance" from code they did not knew about. So the concept of "Software Supply Chain" come in, to define all the things that need to be done by the people in the supply chain, the owners of these libraries, in order to be good citizens that do not break company using the code downstream.

These rules govern things like how we test the code, how we protect who has access to it, how we release versions, how we validate its safety, how we organize ourself to work on the code, how we protect our personal accounts that control the code, etc

## I am not a supplier

There is a small problem here. We are not suppliers. All the people writing and maintaining these projects, we are not suppliers. We do not have a business relationship with all these organizations. We are volunteers, writing code and putting it online under these Licenses. And yes, we put it online for people to use them. But we do not get anything from it.

Hell even worse, a lot of the libraries that underpin the fabric of what we all call the digital economy _have problem getting enough money to pay for food_. On this topic, i strongly advise everyone to take the time to read [Nadia Eghbal Road and Bridges report](https://www.fordfoundation.org/work/learning/research-reports/roads-and-bridges-the-unseen-labor-behind-our-digital-infrastructure/) to realize the depth of the problem. It is a bit old, as it was written in the aftermath of HeartBleed, but it is as relevant today as it was at the time.

Or for a funnier, more visual explanation, [XKCD 2347](https://xkcd.com/2347/)

![XKCD 2347, image of a stack of blocks, labeled "All modern digital infrastructure", with one small block holding the whole stack stable labeled "A project some random person in Nebraska has been thanklessly maintaining since 2003](https://imgs.xkcd.com/comics/dependency.png)

And we know it. This is why in every single one of these licenses, that govern the rules to reuse the work we put online in these libraries, you will find this paragraph, copied verbatim.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

It may feel a bit legalese, and yes, it shouts at you, but i can summarize it pretty easily. If you use this, i owe you nothing. At all. We have no relationship. I put this up online at the condition that if you use it, all the risks are on you.

What it means is that there is no supply chain here. Because there is no supplier. I am not providing you something that you bought for me. There is no relationship. I put something online because i wanted to. The fact you made your product depend on it is _your responsibility_. Not mine. Not the one of the providers. We provide libraries. We do not supply them. You cannot apply rules on me

And quite honestly, i am not going to accept them. I barely have time to spend on doing the work on the FOSS libraries i maintain and doing so regularly burn out the people doing it.

Now, i am more than happy to become a supplier. You want me to work a certain way, i am more than happy to do it. But to do that, i am going to have to become a supplier. Which means you are going to have to start to pay me. A fair price, that we can negotiate. Under a different license.

Until them, I am not your suppliers. So all your Software Supply Chain ideas? You are not buying from a supplier, you are a raccoon digging through dumpsters for free code. So i would advise your to put these rules in the same dumpster.

And remember. I am not a supplier. Because
  
> THIS SOFTWARE IS PROVIDED "AS IS"
