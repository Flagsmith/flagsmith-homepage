---
title: Why Deploying Software Alone Isn’t Enough...
published: true
description: Accelerating your development velocity 
tags: thoughts
author: Ben Rometsch
avatar: /static/images/blog/ben.png
date: 22-oct-2020
---

Feature flags allow software development teams to choose when features are delivered and which users will have access to those features. This development strategy has allowed teams to decouple the concepts of “deploy” and “release” in the CI/CD process. This decoupling has powerful ramifications that can be harnessed to accelerate your product development. This article will cover how teams are using this in their development processes to drive customer impact.

## Learn faster

Agile has become the defacto standard in software development. The methodology can ensure that you are building features that your users actually want, and allows you to be much more flexible about what you are prioritising. Most teams already subscribe to some form of the following process:

<img width="100%" src="/static/images/blog/post_images/agile-process-diagram.png"/>

While agile has brought many benefits to delivering increased velocity to software teams and more value to their users, the devil is in the details.  In the above graph, you see “Deploy” as a standalone phase which typically includes the actual “Release” of the feature/functionality to customers. In some cases such as security patches, bug fixes, performance improvements, etc. this is probably the best approach.

But consider the introduction of new functionality to core user flows, new on-boarding for customers or even search algorithm changes for search results. Here are some situations that benefit from the separation of “Deploy” and “Release” concepts:

- New Features.
  - Rolling out features behind feature flags provides a number of benefits.
  - Your code gets into production immediately, removing the pain of large merge requests and source code conflicts.
  - If you release your feature and it causes an issue, for example a performance hit on your back end, you can revert it with a single action. This is especially useful for mobile app development, where there is always a lag between deploying an app update, and getting that update rolled out to users.
- A/B Testing
  - If your feature is already behind a flag, you can A/B test the impact of that feature very easily. Roll it out to a subset of your user base, and track the change in behaviour of those two groups.
  - A/B tests that are driven by feature flags allow you to test deep changes within your product, rather than just testing trivial changes like button colours or copy changes. You can test something structural, like moving a pay wall from the start of your user journey to the end.
- User Segmentation
  - You can segment your user population, and deliver features based on those segments. This gives you total flexibility for things like managing the features of paid accounts or anonymous users who have not yet logged in.
  - Imagine having a different feature set for BETA users to make sure adoption is just right before getting it out to all of your users.

## A Kill Switch Case Study

Another example of a smart use of feature flags in software development is what is often referred to as a “Kill Switch”. To better understand where these can be leveraged in your software development processes, here is a quote from our customer Jonny O’Mahony of Evervault:

> There are scenarios where we have a feature enabled by default, but due to some misbehaving customers, we need to turn it off for them, or to turn off a section of the application quickly to avoid causing downtime. For example if one customer ends up triggering far more web hook events than any other customer but then times them all out, you might need to disable sending webhooks to them. We have used feature flags in scenarios like this so we don’t have to build in custom killswitch logic.
Implementation.

## What's Next?

Okay. If you’d made it this far, you’re probably asking how to get this up and running on your own infrastructure and the details of what makes a good implementation.
