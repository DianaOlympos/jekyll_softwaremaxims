---
custom_css: blog_post
---
You have at least one passionate friend. Many even. Maybe are you passionate yourself. It does not matter what the focus of that passion is. <!--more-->

It is easy to figure out which of your friend is passionate about a topic. All you need to do is to talk about that topic. State an opinion on it. If your opinion is about one of their passion, they will turn into *that* person. You know what i am talking about. They will transform what was an evening out into an evening dedicated to that topic. Which bring us to this post. As my friends says, I tend to have strong opinions. Which come in part from the passion i hold about some of the topics i have strong opinions about. Long story short, I care about some topics around software and society. I think they matter. Two particularly sensitive one are *testing* software and *systems safety*.[[1]](#fn1){:#ref1}

[Feel free to open this playlist in the background while reading this post](https://open.spotify.com/user/diana_olympos/playlist/4Av7q8mhBAqlOSWVesq8VM?si=VxdVsgclRuqvDvu5ro5byQ)

So a few days ago, i was going through my twitter timeline and i saw this tweet.

<blockquote class="twitter-tweet" data-lang="en" data-dnt="true"><p lang="en" dir="ltr">&quot;It&#39;s just business software.&quot;<br><br>&quot;Nobody dies if we get it wrong.&quot;<br><br>These are things people in tech really say to justify insufficient testing. <a href="https://t.co/0cDGhPm4xy">https://t.co/0cDGhPm4xy</a></p>&mdash; Continuous Devilry (@noahsussman) <a href="https://twitter.com/noahsussman/status/1055230475600621570?ref_src=twsrc%5Etfw">October 24, 2018</a></blockquote>

And as expected from a passionate person when it touch to the topic you care about, i turned into *that person*. 

<blockquote class="twitter-tweet" data-lang="en" data-dnt="true"><p lang="en" dir="ltr">Not insufficient testing. Insufficient expertise. &quot;Yeah we know that could go wrong, but it would be painful to fix and we are *just* business software&quot; is something i hear far more than &quot;oh we could have caught that with test&quot;</p>&mdash; Diana (@Di4naO) <a href="https://twitter.com/Di4naO/status/1055580004359258119?ref_src=twsrc%5Etfw">October 25, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I am not going to spend lot of time on the topic of testing today. I consider the set of practices and tooling that we cover with the label "testing" in software as neither particularly useful or efficient. Software practitioners can use their time better than in testing in the current state.[[2]](#fn2){:#ref2}

## Lie To Me

Today i am far more interested in the second topic : safety. Particularly, how much of the systems we operate and build as software practitioners can be considered *safety critical*. I have the opinion that nearly *all software out there is safety critical*. And that a mindset oriented from safety principles should be applied to it. I have found over the years that this opinion is not mainstream in software circle. Developers, operators and managers tend to get very defensive when i offer the idea. The reactions are typically a variation of these.

* You are exaggerating.
* This is a logging framework, there is nothing related to safety there.
* I am building it for fun, no one will use it in production.
* We are just a to-do list application, with nearly no customers. We do not have that much risks. We are not a nuclear facility.
* It is not urgent, we will fix it next month.
* No one will target us, we are too small fish.
* I see your point, but if I do not do it, someone else will build it anyway.

OK, that is a lot of sentences. By that point i hope you have an idea of what i mean. You may have used them before yourself. I believe they are excuses we use to escape thinking in a safety oriented way. They are not arguments explaining why safety is not important in our field. They are way to avoid thinking about that problem. 

But first, I want to define *safety*. Disclosure, I am not a safety professional. I try to be well informed and i research the topic a lot. But i may end up getting corrected by professionals after publication. I am going to chose a definition of safety that works well for my argument, but it is a definition that does work.

> Safety can be defined as all the actions we take to avoid the system we are part of to encounter a loss event. We call these loss events "incidents".

We can evaluate the criticality of the safety of our systems with two metrics related to loss events. The odds of a loss event happening, compounded by the impact of the loss in that event. The loss encountered in these incidents could concern anything we find valuable. Money, assets, human life, well-being of humans or animals, reputation, structural integrity of a system, etc.

## Ain't Gonna Cry

In this light, safety is essential for all software that see production. Software control, organise, optimise and underpin most of our organisations. Our society. We store in there personal information and use it to take decisions about our life everyday. After all, [Software is eating the World](https://a16z.com/2016/08/20/why-software-is-eating-the-world/). It gets even more obvious if the software accept any kind of personal data. A password and a username is enough. We know our users reuse these in multiple systems. It means that the impact of a single database of passwords leaking is enormous. It become an event with a potential infinite impact.  And these breaches do happen, to both small and big targets.

The criticality of safety in software grows even more if you consider the professional environment we live in. Even if your code today is part of a non critical system, who knows about tomorrow ? A defining characteristic of software is that it is reused and re-purposed all the time. Bigger impact, if you release your software as Open Source. In that case, all bets are off. You can not know who will use it as inspiration or in what type of systems it will be used. Maybe your little toy logging framework will ends up breaking the routing service for 911 calls.[[3]](#fn3){:#ref3} Are you scared yet ?

OK, now I hope that you see the point of view i am coming from. You can totally disagree with it, but it gives you the background to follow my point on expertise. I think that part of our incapacity to understand the need for safety of our system lies in a lack of *expertise*. In expertise lies a necessary path to get out of that state of affair. Software is not an expert domain in term of practice yet, but that it is one in term of impact and complexity. Software build inherently complex systems. These systems are becoming safety critical and are dependent of supervision and corrective actions based on *in-context application of models*. These are usually characteristics of fields that need experts to thrive. Especially from a safety point of view.

## Come on in My Kitchen

We can asses that someone is an expert if they posses ten psychological characteristics.[[4]](#fn4){:#ref4} They do not describe how to become an expert, but they have proven to be a necessary and sufficient set of discriminant criteria. These ten psychological characteristics are the following.

1. Experts have an extensive and up-to-date content knowledge. They know a lot and pride themselves in staying up with the latest developments in their field.
2. Experts have highly developed perceptual/attention abilities. They can extract information that non-experts either overlook or are unable to extract.
3. Experts have a sense of what is irrelevant when making decisions.
4. Experts have an ability to simplify complex problems. "an expert is someone who can make sense out of chaos.". This allows experts to deal more effectively with the cognitive limitations experienced by all humans.
5. Experts can communicate their expertise to others. An expert's credibility depends on the ability to convince others of that expertise. "An expert is anyone who can persuade someone else that he (she) is an expert."
6. Experts handle adversity better than non-experts. Even when things are not going well, experts continue to make effective decisions. "If you are going to make a mistake, make a good one and get on with it." That is, there is no point in worrying about past errors; you have to keep functioning.
7. Experts, are better than novice at identifying and adapting to exceptions. When exceptions are encountered, experts could generate meaningful special situation strategies. In contrast, novices often persist in following well established rules, even when inappropriate.
8. Almost all experts show strong self-confidence in their decision making. Although this might be viewed as arrogance, it comes across more as a highly-developed faith in one's own abilities. Experts really do believe in themselves and their capacity to make good decisions.
9. Experts know how and when to adapt their decision strategies to changing task conditions. Of course, changing strategies prematurely can be just as bad as being resistant to change. The key is to know when to adapt and when not to.
10. Experts have a strong sense of responsibility and a willingness to stand behind their recommendations.

Before we move on, I want to point out is that this list is talking about a lack of *expertise*. This is not about developers *discipline*, nor am I trying to single out a class of *bad developers*. You can be a good and valid developer without being an expert. And being an expert is not about applying a set of practice and following a strong discipline. If anything, it is the contrary. These rules tell us that experts adapts to situations and their clients. They are not stuck on a certain set of rules.

## Y'all Motherfuckers Need Jesus

Picture yourself at work. Your product person, your management or your client decided they needed a new feature. You think this could be bad. Not catastrophic, you are not a bank and do not write code that runs planes. But still, it could be bad. Can you convince the decision maker that you should not build it ? Does it work ? Nearly all the time ?

Are you confident that you know better and that your decision on that feature is the good one ? Are you capable of going around the rules and best practice that you were applying when they do not apply anymore ? Do you know even why and when they apply ? Can you convince your decision maker to take the good decision ? Do you care ?

If i look at the history of our field, you will follow the rules. You will follow the thought leaders and their manual for "Clean Code". You will build the feature, using one of the excuses i quoted before. We are not a bank. It is not that important. We do not write code for planes. It is a small feature anyway. Someone else will do it if not me. Now reread these rules about expertise. And take a moment to think. Where is your sense of responsibility? Will you stand behind your code?

We got to that point because software practitioners are not expert. The mainstream developer is a cog in a machine of course. They have really few voice. They are not an expert. They are a skilled worker. Yes, they have a special set of skills, that is hard to find and is in demand. But they are not experts. They are here to be an actor in the bigger organisation with limited responsibilities.

## Thank God for Jack Daniels

We can blame the system we are in, all the agile coach, the management, the economical pressure, Venture Capitalists, etc. But what i see here is a lack of *expertise*. We have yet to understand that our code does impact people. As a field, we will need to accept that software systems are complex socio-technical systems. That we have a responsibility. That we need to provide arguments to back our decisions, not excuses. This is when we will become a field of expertise. When we decide as a field that we are responsible for the safety of our society, of our systems. That we are the one that act and make the decisions that create these situations. That we need to learn from these situations.

We tell ourselves that we are not in a safety critical business because it is a far easier way out. Because we do not have the knowledge and the experience to become experts. Because we are not recognized as such. Because we do not want to accept the responsibility. Most of us came to this field because they like building things. No-one told most of us that what we build would have such consequences. No-one told use we would have to live with the consequences. But if we want to get better, we need the whole field to grow and look at what we are doing. We need to stand up and find ways to grow experts.

These incidents do not happen because of insufficient training. They do not happen because the developers where bad. They happen because we are dealing with a complex safety critical socio-technical system. These fields develop and need expertise to operate safely at scale. These incidents happen so much because we have not worked systemically to make our field a field of *expertise* . Because we do not concentrate on safety. Because more testing is not going to stop these problems to happen. More rules and more discipline is not going to stop that either. And we can not put random barriers to entry in the current high demand market.

## Spirits in The Sky

I can not give a perfect plan to get there. But i have hopes. Hopes in people engaging with the existing Resilience community in other fields. Hopes that i can learn about them. Hopes because the Resilience community is full of experts. Hopes that they understand that helping us to get there is also part of their responsibilities. Because this is how you make complex systems work well. By building expertise alongside your systems. I will end on a quote from one of my heroes.

> We had risen to probably one of the greatest challenges in history, put a man on the moon in the decade. We'd created incredible technologies. But what was most important, we'd created the teams, what I call the human factor. People who were energized by a mission. And these teams were capable of moving right on and doing anything America asked them to do in space.[[5]](#fn5){:#ref5}

---

1. <span id="fn1">For completely different reasons that said.</span> [Back](#ref1)
2. <span id="fn2">There is probably matters for its own blog post, but not today.</span> [Back](#ref2)
3. <span id="fn3">This is based on a true story with some adaptation see [this FCC report.](https://www.fcc.gov/document/april-2014-multistate-911-outage-report).</span> [Back](#ref3) 
4. <span id="fn4">James Shanteau, [The Psychology of Experts: An Alternative View (1992).](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.318.6027&rep=rep1&type=pdf)</span> [Back](#ref4)
5. <span id="fn5">Gene Kranz, [Space Lifeguard: An Interview with Gene Kranz.](http://web.archive.org/web/20000818064509/http://www.space.com/peopleinterviews/apollo13_kranz_iview_000411.html)</span> [Back](#ref5)
