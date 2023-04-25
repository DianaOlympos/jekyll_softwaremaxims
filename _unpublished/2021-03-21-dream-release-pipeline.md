---
title: The Release Pipeline you can't have
---
Let me tell you about the Release Pipeline we nearly built at one of my ex-job.
It partially cannot be done today because the technologies does not exist or are
not composable enought to be used this way for now. But we are really close and I
really really want this to become a thing. Because the benefits for everyone would
be too big.

## No One Like You

Let think about what we want from a high level standpoint. The first thing is that
I want the team that own the service to own the whole pipeline. If there is infra
done for them, it is at best a set of VM and some networking. That way, the pains
are theirs and they can follow what happens. And adapt as needed.

The second thing we want is for the Build system to know nothing about the deployment
side. All it does is produce an artefact, Content Adressed by the hash of its content,
and push it to the Content Adressed Store used. At best it is allowed to set a flag
on the content to tell if it is allowed to be deployed yet. In the Store.

That store need to be hostable in a variety of ways. Artefactory, S3, a filesystem,...
This generate a third constraint. On top of that, the store need to be able to
communicate in a way with the service, to tell them a new version is available.
Or the service need to query it regularly.

On fourth constraint, the service needs to be able to self orchestrate a deploy
of the new version, between all the machines that make its deployment set. It needs
to also be able to coordinate with external services that needs it. At the very least,
to not disturb in flight work too much.

## Too Drunk To Drive Drunk

If the Solarwind hack told us anything, it is that CI/CD are RCE-as-a-service.
So to mitigate this kind of supply chain attack, we want our Build system to follow
a few rules. It always start with a blank env. The inputs and dependencies need to
come from a CAS. And verified on their hash. The output will be a CAS artifact too.
Everything is rebuilt from source, the only exception being that you can use the
CAS as a cache. Every build end with the machine being scrubbed clean.

The recipe itself is then CAS stored and is the package you note as deployable.
You are not allowed to know more. The Build system live outside of the rest and never
talk to anything, except strictly controlled by its contents hash.

The typical examples here are Bazel, Nix, Guix, Habitat, ...

That means that the team is responsible for updating their dependencies. To mitigate
the cost, it may make sense to use a central team to update "low level" dependencies.
In particular, things like libc, compilers, classic GNU utilities, ...

This is the part you _can_ have these days. Nix and Guix are well advanced and have
a nice set of packages as a base to build on top. Habitat have a nice set of packages.

## Takin' Up Space

On the service side, this get a bit harder.

On one hand, swapping the service atomically on the machine is doable. NixOS, Guix,
Habitat even, they all can do it. A pretty good start.

Publishing the recipe and using that as a base ? Same thing, we can do it.

Getting the information an update is needed, that gets harder. There are mechanisms,
but outside of Habitat, everyone is stuck in Docker and its Kubernetes friend.
