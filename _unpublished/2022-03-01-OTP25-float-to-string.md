---
custom_css: blog_post
---
In OTP 25, you will have access to a new option for `float_to_list/2` and
`float_to_binary/2`. This was the result of work i contributed with the support
of the EEF. Why did we do that and when should you use it ?
<!--more-->

## TL;DR

Starting in OTP 25, you should use the `short` option everytime you want to cast
a float to a string, at least by default. Only use other options if you know you
need them and what you are doing (you probably don't). This would look like this

```erlang
float_to_list(0.3, [short])
float_to_binary(0.3, [short])
```

This will be more precise, shorter, probably faster and more memory-efficient
than any other option available.

## The Long Reason

The BEAM natively handle floating point numbers as a binary IEEE 754 64-bits
number. This is a well known format for floating points numbers, that have a lot
of advantages. I am not going to go over them all today. But sometimes, we need
to cast that number to a string. This is usually needed when exporting the
number to an external system. JSON, CSV are two widely used format to exchange a
high number of numeric data. CSS and SVG regularly need floating points, in a
text form. And we do need regularly to cast floats into logs, stacktraces or
even in the shell.

It happens that casting a float to a string properly, without loss of precision,
quickly and efficiently is still a hard problem and one that eluded computer
science for the past few decades. Luckily, someone found a way to do it a few
years ago.

In OTP 25, thanks to the support of the Erlang Ecosystem Foundation, I
contributed an implementation of that algorithm to OTP, allowing the whole
community to benefit from an average 10x speedup in CPU time and average 100x
reduction in memory use compared to previous best practices.

## The different ways to print a float

- e
- f
- g
- shortest round trip correctly rounded