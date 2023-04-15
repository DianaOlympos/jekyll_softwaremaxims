---
custom_css: blog_post
title: We don't have enough Process Engineers in software
---
When you peruse the depth of software engineering as a discipline, you find a lot of techniques and tools laying around in corners. Pattern matching, tighter type checking compilers, property based testing, snappy IDE, debuggers, dynamic tracing, Result types, effect handlers, capabilities, model checkers, fuzzers, etc. And yet, they are not in use in the industry. I posit that this is because software engineering dedicated nearly all of its energy toward the invention of product part of engineering, while neglecting the Process Engineering part of the discipline.
<!--more--> 

This is going to be didactic, starting with putting Process Engineering in context to try to give you an idea of where it sits in engineering practice. Then I will try to give some ideas of what it is that Process Engineers do and why. I will then try to present success story of Process Engineering in software, namely some aspects of Rust, Typescript, but also some aspects of Bundler. In particular I will try to show how Process Engineering is a lot of work. And I will end on a reflection on the lack of funding and recognition for Process Engineering in software, how it explains why our field fail to adopt new tools in general.

## Once Upon A Time