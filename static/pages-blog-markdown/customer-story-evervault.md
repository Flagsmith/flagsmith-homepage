---
title: Customer Story: Evervault
published: true
description: Evervault speeds up their release cadence and delivers better product uptime with Flagsmith.
tags: bullet-train, customer-story
author: Ben Rometsch
avatar: /static/images/blog/ben.png
date: 20-oct-2020
---

<img width="100%" src="/static/images/blog/post_images/evervault-logo.svg"/>

At Flagsmith, we love to share how our customers are using feature flagging in their day-to-day. We caught up with Jonny over at Evervault to learn more about his company and the ins-and-outs of how they use feature flags.

## Please tell us a little bit about yourself and your company:

Jonny O’Mahony, engineer at Evervault. Evervault provides secure infrastructure to help companies protect their most sensitive data. You can check them out here:

- Web: https://www.evervault.com
- Linkedin: https://www.linkedin.com/in/jonathanomahony/
- Github: https://github.com/jonnyom

## What technologies are you using at Evervault?

We are primarily a Node JS house, built on top of a number of separate serverless systems coupled with traditional server backends. 

## How does your team build software?

We run in two week cycles, where we plan each cycle at the beginning of the two weeks and work towards assigned goals throughout those two weeks. We ship to production daily with the use of feature flagging to protect ourselves from shipping unfinished products to customers before they’re ready. We try to scope each project to be finished within the two week cycle, and release it at the end of the two weeks.

## How did you discover feature flags?

I used to work at Intercom (https://www.intercom.com/) where we had an in-house feature flagging system. When I joined Evervault I pushed to get ourselves into a similar position where we could safely ship to production. I spent a few weeks exploring different options of feature flagging products and landed on Flagsmith after comparing a few based on price and ease of integration.

## What was the first flag you implemented and why?

The first flag we implemented at Evervault was protecting a (now retired) feature that changed a fundamental piece of the product that we pivoted away from.

## Has feature flagging increased your deployment cadence?

Absolutely, we went from a development —> merge to staging —> merge to production cadence to a development —> production cadence whereby we now ship to production daily. This pipeline also ships to staging and runs some health checks there before moving to production, reducing engineer overhead.

## Has it brought any unexpected benefits?

We’ve been able to use it in a number of ways that we didn’t originally plan, such as kill-switches. These are scenarios where we have a feature enabled by default, but due to some misbehaving customers, we need to turn it off for them, or to turn off a section of the application quickly without causing downtime. For example if one customer ends up triggering far more web hook events than any other customer but then times them all out, you might need to disable sending webhooks to them. We have used feature flags in scenarios like this so we don’t have to build in custom killswitch logic.

## What are the downsides? Or gotchas that others should be aware of?
Shipping straight to production with feature flags absolutely speeds up your cadence of shipping, but it removes the safety net of staging. Fundamental changes to your app can’t easily be protected by feature flags. It’s easy to feel you’re completely protected by feature flags, when that isn’t necessarily the case. They can also add a lot of unnecessary overhead when you add more and more flags. You need to be very disciplined and ensure you remove stale flags from your application often.

Thanks for taking time to share with us, Jonny!