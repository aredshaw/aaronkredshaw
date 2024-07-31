---
title: "What are APIs anyway?"
date: 2022-07-30
draft: false
toc: true
images:
tags:
  - untagged
---


## Introduction to APIs

When people use the term APIs, they are not all talking about the same thing. This used to confuse me early on, so I'm going to give you a very quick tour of APIs. If you want more in-depth knowledge, there is a ton of information online.

To start, API stands for Application Programming Interface. It’s a way that software can exchange information with other software. Since knowing how to document APIs is in very high demand for software technical writers, I’m going to also provide resources for learning more about each type.

There are two main categories of APIs. Library APIs and web APIs.

## Library APIs

Library APIs are software components. You don’t want to have every possible software library already included in your program or else it will take up a lot of space and it could really slow down your program. Instead, you include the software components you want when you need them in your program. For instance, if you’re not including images in your program, you don’t need to import an image API. How do you learn about these APIs? When learning a programming language, you usually learn about some of the common library APIs for that language. If you were learning to program for Windows, you might start learning about the available Windows APIs.

### Examples of library APIs

- [Android API](https://developer.android.com/reference)
- [Windows API](https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list)
- [Java APIs](https://docs.oracle.com/javase/7/docs/api/)
- [Evernote APIs](https://dev.evernote.com/doc/reference/)

## Web APIs

Web APIs are also software components that can communicate with existing software, but these can be accessed through the web. Web APIs have been increasingly popular in the last few years, because anyone with an internet connection can access them, often for a fee. Web APIs come in several different types. Here are the most popular ones.

### REST APIs

Representational State Transfer. This is an architecture for the web. You can request, add, update, or delete resources. It is also the most common type of web APIs available, and one that shows up in a lot of technical writer job descriptions. If you want an excellent free course to learn how to document REST APIs, go through [Tom Johnson’s API documentation course](https://idratherbewriting.com/learnapidoc/).

#### Advantages

It uses HTTP, which the internet is built on. It also utilizes the newest innovations of the internet, such as HTTP2. There are a lot of free tools for use with REST, and much of what is out there is open source, so companies can take the source code, modify it, and make it their own. When [OpenAPI](https://www.openapis.org/) specs are used, these APIs can be easily navigated for the average user.

#### Examples of REST APIs

- [Stripe](https://stripe.com/docs/api)
- [eBay](https://developer.ebay.com/api-docs/static/ebay-rest-landing.html)
- [Spotify](https://developer.spotify.com/documentation/web-api/)
- [Discord](https://discord.com/developers/docs/reference)

### gRPC APIs

Google Remote Procedure Call. This is Google’s version of RPC, and it calls methods (a programming term for actions) on the other machine directly. You can call methods across the internet as if they were already on your machine. While there are fewer gRPC APIs in use, the number of transactions worldwide are the highest. For instance, YouTube uses gRPC. Imagine how many transactions per second happen on YouTube! These APIs are much more often closed to the outside, so others cannot use them. You can [learn much more about gRPC here](https://grpc.io/).

#### Advantages

It’s fast. Really fast. In general, it’s about 7 times faster than REST APIs. It’s also great for programmers, because they can use a programming language they already know, and it’s like calling a method on another computer as if it was the same computer.

#### Examples of gRPC APIs

- [Cisco](https://github.com/CiscoDevNet/grpc-getting-started)
- [Netflix](https://github.com/Netflix/ribbon)
- [IBM](https://www.ibm.com/docs/en/scdli/1.2.1?topic=preview-gprc)
- [Dropbox](https://dropbox.tech/infrastructure/courier-dropbox-migration-to-grpc)

### GraphQL

Data query and manipulation language, which includes the runtime to make these queries. Whereas REST was an architecture, and gRPC was a way to call methods, GraphQL is a query language. With it, you can request data, add to the data, change the data, or delete it. It was created by Facebook to solve some of the problems with REST APIs, such as overfetching or underfetching, or having easy ways to deal with different versions of the API. I won’t explain all of that here, but you can learn a lot more about it on the [GraphQL Foundation page](https://graphql.org/learn/). That site also has a good tutorial for all the basics.

#### Advantages

GraphQL solves several issues that come up often with REST APIs. With REST, you request resources, and often several things are given in one request. For example, if you request book information, you may get the title, author, ISBN, and date of publication. But what if you only want the title. Then you are overfetching. You don’t need all the other information given. Let’s say you are doing this thousands of times for different books. It might be costly and take up most of your internet bandwidth, because you are getting a lot more information than you need. But GraphQL only gives you exactly what you ask for. Therefore, it is much more efficient. There are other advantages too. See the [GraphQL Foundation page](https://graphql.org/learn/) for more.

#### Examples of GraphQL APIs

- [GitHub](https://www.contentful.com/developers/docs/tutorials/general/graphql/)
- [Facebook](https://developers.facebook.com/docs/graph-api/)
- [Atlassian](https://developer.atlassian.com/platform/atlassian-graphql-api/graphql/)
- [Braintree](https://graphql.braintreepayments.com/), a Paypal service

## Final thoughts

I learned recently that some companies are now using gRPC or GraphQL for the underlying API, but then use REST as the customer facing API. Evidently this offers some advantages, and is becoming more common now.

There are other kinds of APIs out there too, but these are the most common currently in circulation. I know I didn't go into much detail here, but it's a start, and you can use the resources I've provided to learn more.