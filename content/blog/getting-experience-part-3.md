---
title: "Getting experience – Part 3"
date: 2022-07-08
draft: false
toc: true
images:
tags:
  - untagged
---


# Get experience with an open source project

> ![Open Source](../images/open_source.png)
> 
> GitHub | Linux | GNU | Sourceforge

## Common advice

The idea that you can get a job in technical writing by volunteering to write documentation for an open source project has been around awhile. This advice often appears in blog posts, tech writing forums, and advice columns. The prevailing logic is that you can add to your portfolio by writing documentation for some of the many open source software projects available. This shows off your tech skills as well as your writing ability, and is a kind of real-world experience. It sounds good on paper, but has some real problems. Let’s begin with a story.

### Story 1

There once was a woman who dove into an open source project, writing some of their technical documentation, which eventually led to her getting a job at Facebook. True story. It really happened. You can read more about it, or even watch the video here: [From Open Source Volunteer to Full-Time Tech Writer](https://www.single-sourcing.com/events/open-source-volunteer-full-time-tech-writer/).

This is a really inspiring story, but before you start looking for an open source project to contribute to, consider the following:

- She had been an aerospace engineer for 15 years.
- She said nothing made sense (in the open source project) for quite a while.
- She first got noticed through her own blog, rather than anything she published on the open source site itself.
- She was trusted with maintenance of the main website for the project after a while, so they gave her an unusual amount of access.
- The open source project she worked on had an astronomy module, and her undergraduate degree was in astronomy.
- She mentored students for the Google Summer of Code because of her degree and background. Her mentoring also helped her make the connections she needed to get the job at Facebook.

Now let me tell you another story.

### Story 2

Once upon a time I started learning API documentation, [thanks to Tom Johnson’s excellent course](https://idratherbewriting.com/learnapidoc/). I finished his course, and tried to [contribute to an open source project, as he recommended](https://idratherbewriting.com/learnapidoc/docapis_find_open_source_project.html). I couldn’t do it. I figured I just didn’t know the material well enough, so I went through Tom’s whole course again. Again I tried to find an open source project to contribute to, but again ran into a brick wall. Knowing I was still no expert in API documentation, I went through the whole course a third time. It always takes me three times to learn something well anyway. After the third time, I felt like I really knew this stuff. I jumped on GitHub and tried to find somewhere I could contribute to API documentation. I went through hundreds of projects, but couldn’t find anything I could contribute to meaningfully.

Granted, I’m no expert, and maybe if I had spent months really digging into things, I could have made some progress. With enough time, most things are possible. Still, here are some of the issues I ran into:

- I didn’t initially realize the differences between library APIs and REST APIs. I should have figured this out, since Tom does mention both in his course.
- Many of the projects just weren’t active anymore.
- Developers did not have time for me. Remember, most of them do this in their spare time, after their day job.
- Related to the point above, often their requirements for a technical writer is that they should read the code and figure out what’s going on with little to no help. Then they should contribute. Later, I learned that even seasoned developers usually take [3-6 months before they can understand a complex code base well enough to contribute](https://www.reddit.com/r/cscareerquestions/comments/sntaqb/how_long_does_it_take_to_learn_a_new_code_base/). This means, it would likely take me around 6 months, even if I was a seasoned engineer.
- Many projects were so complex, I could not even figure out what they did, let alone actually contribute to any API docs for it.
- I also couldn’t figure out how to install the software, or all the dependencies I needed to get started.
- Project contributors often assumed I understood a lot of inside knowledge of their technology or related technologies, such as dependencies.

Keep in mind, a developer would need to give you certain things before you could even get started.

## The minimum you need to document an API

- The API base path.
- Endpoints.
- All possible methods and parameters, with descriptions.
- An API Key (If required), or how a user can get an API key.
- Status and error codes with what they mean.
- Open lines of communication with a developer who can quickly answer any questions about the project.

How about if you decide you want to document code samples rather than APIs. Documenting code is a big part of being a technical writer as well. In that case, here’s what you would need from the open source contributors.

## The minimum you need to document code

- Code samples.
- Detailed notes or a description of what each sample does and how to use it.
- Direction on what parts of the code can be altered to fit the developer’s needs.
- Open lines of communication with a developer who can quickly answer any questions about the project.

However, most engineers expect you to read the code and find these things out yourself.

Even if you are documenting code samples, and not APIs, the developer will need to give you a lot for you to get started. Because the truth is that most technical writers do not create their own code samples. They are given the samples by software engineers, along with some sort of explanation. Yes, tech writers ask more questions to fill in the missing pieces. They add the parts developers might assume others know, just because they know the code so intimately. Technical writers also improve the instructions, grammar, organization, and navigation. Sometimes they even find mistakes in the code. But most don’t pull the code out of their own heads, nor do they intuitively know what the code does or how it’s used.

Often, the most difficult thing to get is the last item in each of the two lists above. In fact, it is nearly impossible, for all practical purposes.

## What to look for in an open source project

- The project interests you. You might spend a lot of time here.
- You can figure out what the software or API does.
- The project is active, with an active community.
- They clearly have a need. They either say so in their contributions page, or there is a ticket that says so, or you see a need and offer to work on docs and they say that would be great.
- One of the contributors is willing to walk you through the code, or API, telling you what each piece does. This may be a huge barrier. They may think that if they were to spend that much time helping you, they might as well just write the documentation themselves.
- They already have good comments in the code that you think you can use to get started.
- Someone who is part of the project is very responsive and patient to answer your questions quickly.
- You believe you can write documentation from scratch for the project, not just touch up existing pages.
- You can actually get the software installed (if it requires installation) and get it working in order to try things out and document the software. This may require the installation of certain compilers or interpreters for programming languages, frameworks, other open source projects, and more.

If you already have experience with a technology, or a programming language, you can start there. For instance, if you've been learning about Blockchain lately, you may want to look up Blockchain projects. Or if you have learned some Java, you can look up Java software. There are many great guides for how to contribute to GitHub. But first let's decide if you should even start down this road.

If those you reach out to say they expect you to read the code and figure it out, move on. Unless you can really do that. If you can, ignore my bleak advice. Maybe you can really do this.

To make headway in an open source project, it may take months to even start to get your bearings on a project. And then more time to contribute. Even such writing samples, an interviewer may still ask, So, how many years of full-time technical writing experience do you have? I have had that question asked of me more than once in a job interview. No writing samples can get over that obstacle.

## What employers actually want to see in sample work

1. Step by step, numbered instructions that include:

2a. Code samples in some of the steps, clearly explained.

or

2b. API docs, with endpoints, parameters, etc. with steps for how to use the API.

3. It’s all your work.

You must include 1, 2a or 2b, and 3 in order to be taken seriously by an employer.

One issue with contributing to an open source project is an employer doesn’t know how much of it you did. Ideally, you want to create whole docs yourself. Adding a paragraph to a page will not get you a job. Fixing a readme page will not get you a job. See #3 above.

## Will working on open source get you a job? Two more perspectives

I recently encountered this Reddit post:

> [Does volunteering](https://www.reddit.com/r/technicalwriting/comments/gcfmuh/a_list_of_open_source_projects_with_volunteer/) like this actually lead to a job? Can anyone confirm they got a job by starting here?

After a number of people failed to answer the question, one person replied with,

> The silence is pretty deafening.

That's about what I expected.

I think this is one of the most often quoted pieces of advice out there that seems to have very little data to back it up. I have only heard of one person getting a technical writing job through contributing to open source. Therefore, this should probably be considered a fringe case rather than a normal pathway.

I prefer actual data, rather than[broscience](https://www.dictionary.com/e/slang/broscience/#:~:text=Broscience%20is%20a%20term%20for,claims%20not%20backed%20by%20science.) when giving out advice.

Another blogger says [about this method](https://iqdrac.wordpress.com/2022/03/19/building-a-portfolio/):

> I reiterate, this method (contributing to open source) is not advised for those seeking entry into technical writing or relatively fresh in the field. I say this because there’s usually very little hand-holding and you are expected to hit the ground running.

## My conclusion

I am not going to say it is impossible to get a job by contributing to open source. I can only say that it seems hard. Really hard. I might also add it seems unlikely. However, if you are an ex-developer, or have specialized knowledge, maybe you can ignore this post and make it work. And if you have months or years to burn, you could probably find a way eventually.

For others trying to make the transition into technical writing, I would recommend that you go back and see my [first two blogs](https://aaronkredshaw.com/2022/03/03/getting-experience-part-1/) for ways to get experience that might lead to a job.

If you know other people who have contributed docs to open source projects, which led to them getting a job in technical writing, I'd love to hear about it in the comments.