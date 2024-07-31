---
title: "The technical writing interview – Part 2"
date: 2022-01-27
draft: false
toc: true
images:
tags:
  - untagged
---


<table>
   <thead>
      <tr>
         <th>This topic is divided into two posts:</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>**Part 1** covers more of the non-technical aspects of the interview. A lot of this might work for any interview in any field, but the examples will mostly be specific to technical writing. If you take this part seriously, you really sabotage your chances of getting the job.<br/><br/>
         **Part 2** will focus on the technical aspects. This will be from my own experience, for the type of technical writing I do. See <a href="https://aaronkredshaw.com/2022/01/01/what-kind-of-technical-writing-job-should-i-get-into/">What kind of technical writing job should I get into?</a> for more on types of technical writing jobs and where my work lies.</td>
      </tr>
   </tbody>
</table>


In this second post on the technical writing interview, I’ll focus on the technical section of the interview itself. For behavioral interview advice, as well as how to prepare for other general interview questions, see [The technical writing interview – Part 1](https://aaronkredshaw.com/2022/01/16/the-technical-writing-interview-part-1/).

This post will be based on [the kind of technical writing I do](https://aaronkredshaw.com/2022/01/01/what-kind-of-technical-writing-job-should-i-get-into/#Docs_as_code). It’s what I’ve heard some refer to as technical technical writing. Specifically, it uses the [docs as code approach](https://www.writethedocs.org/guide/docs-as-code/) to technical writing.

Most interviews I went through had five different sections, an hour each, with a different person doing each section. Yes, that’s five hours of interviews. One person was dedicated to the technical portion. For Amazon, I did this twice, going through the whole process for two separate teams. In these interviews, sometimes it was a software engineer who gave the technical portion, and sometimes it was a technical writer with a coding background.

## What technical subjects to know for the interview

### Reading code

First and foremost, they require you to be able to read and understand code at a basic level. This is true for virtually all jobs using a docs as code approach, or anything related to APIs or developer documentation. For that reason, knowing some basic programming is the number one skill to develop if you do not already have a programming background.

During an interview, often someone would show me a simple program in my preferred programming language, usually letting me pick from Java, Python, or JavaScript. After I viewed the short program, they would ask questions such as (examples for Java):

- Tell me about the parts of this program. What is this? 
  - Example answer: a class. And here’s a method.
- What is wrong with this program? 
  - Example answer: It’s missing a semicolon at the end of the statement.
- What does this program do? 
  - Example answer: It stores a list of animals in an array and then prints out the third item.

#### **The most in-demand programming language**

When reading job postings for a technical writer, Java, Python, and JavaScrip probably come up the most.

- **Java** - An object oriented language that can be a bit difficult to learn, although much easier than C or C++. It has also been around a long time, and is slowly fading in popularity due to Kotlin, a language created to replace Java. It still has quite a following as a powerful, multipurpose language. A lot of financial institutions still use Java.
- **Python** - An easy to learn language. With Python, you can program in a functional or object oriented paradigm. It is among the most popular languages, and is used especially for data science, AI, and machine learning.
- **JavaScript** - Developed for the web, it has grown to include desktop applications as well. JavaScript can be very complex and has many frameworks, modules, and other parts to learn to be well versed in its use. Above all, it is still used for web applications.

If you are just now deciding to learn a language, **I would recommend Python**. It is very popular and comes up all the time in job descriptions. It is also the easiest to learn at a basic level for an interview.

Just so you see some code here. I have below the same simple program written in Java, Python, and JavaScript.

**Java**

```
<pre class="wp-block-preformatted">public class Program {
   public static void main(String[] args) {
       int a = 2+2;
       System.out.println(a);
   }
}
```

**Python**

```
<pre class="wp-block-preformatted">a = 2+2
print(a)
```

**JavaScript**

```
<pre class="wp-block-preformatted">var a = 2 + 2;
alert(a);
```

Output for all three programs:

```
<pre class="wp-block-preformatted">4
```

#### What do you mean to learn these at a basic level?

If you use Sololearn, which I will recommend in a moment, you should make sure you are especially comfortable with the the material in most sections in the course. The sections I would especially encourage you to learn include:

**Java**

- Basic Concepts
- Conditionals and Loops
- Arrays
- Classes and Objects
- More on Classes
- Exceptions, Lists, Threads & Files

**Python**

- Basic Concepts
- Strings & Variables
- Control Structures
- Functions & Modules
- Exceptions & Files
- More Types
- Functional Programming

**JavaScript**

- Overview
- Basic Concepts
- Conditionals and Loops
- Functions
- Objects
- Core Objects

While I consider these sections to be the most important for an interview, from my limited experience, you may want to finish the whole course just in case. Also, my experience is that to feel comfortable with a programming language, I have to go through the entire course three times. Here’s how it usually goes for me:

<table>
   <colgroup>
      <col width="30%" />
      <col width="70%" />
   </colgroup>
   <tbody>
      <tr>
         <td>1st time through</td>
         <td>I get the main concepts and try out the provided code.</td>
      </tr>
      <tr>
         <td>2nd time through</td>
         <td>I play with the code more, making changes to see what happens.</td>
      </tr>
      <tr>
         <td>3rd time through</td>
         <td>I am starting to create some small programs now from scratch, looking up things when I get stuck or can’t remember exactly how to type something. At this point I feel like I have a good handle on these lessons, and a good foundation for the programming language.</td>
      </tr>
   </tbody>
</table>

As I mentioned before, my favorite resource for learning a programming language is [Sololearn](https://www.sololearn.com/). You can use the website, or my preference is to use the phone app. There is a free version, or you can upgrade to the premium version, which I recommend if you can. Either way, it’s a great place to learn a programming language. The cool thing about it is that as you learn, you can play with live code and even create your own programs from scratch and save them. Sololearn offers courses for all three of these languages, as well as several others.

### Other technical subjects to know

Each of these only came up in one interview, but I’m sure if I had more, they might have come up more often.

**Git**

I was asked about certain Git commands. For example:

- What command do you use to see the state of your work when using Git. Answer: `git status.`
- What does `git branch -a` do? Answer: It gives you a list of branches in your repo.

Here is [a great place to learn Git](https://githowto.com/). If you get about halfway through this, you should know enough, not only for an interview, but for most jobs.

**Command line**

At one job interview I was asked about certain command line tools. For instance:

- How do you list something at the command line? Answer: `ls`
- How do you forcefully remove a directory along with all the files in that directory from the command line? Answer: `rm -rf`

The easiest way to learn the command line is to look for [a good cheat sheet](https://www.shortcutfoo.com/app/dojos/command-line/cheatsheet) and then try it on your computer. Keep in mind, Windows has different kinds of command line tools, and some of the commands are different on some. [For Windows, PowerShell is probably the best](https://developers.google.com/web/shows/ttt/series-2/windows-commandline), since it is the closest to what you would also use on a Mac or Linux. The commands are mostly the same, and it’s already built into Windows.

**HTML**

A basic knowledge of HTML is needed for technical writing, so at one interview I was asked about HTML. For this, I was given some text with notes such as:

- Make this line a large header
- Here is a paragraph
- Add a line space here
- Make this into a table. Tables are the most used HTML for technical writers

Then I had to write out the HTML for doing this.

Sololearn has a course for HTML, but there are thousands of good HTML tutorials online to learn this. Just do a search for “HTML tutorial” and go for it.

### Know the lingo

I have one other piece of advice, and it’s not quite as technical as the rest of this post. Learn technical writing lingo. You should know what an SME (Subject Matter Expert) is. Also, know that your Stakeholders are those who would benefit from the work you do. This is usually a manager or department that requested the work, or it may be your customers.

Read a few articles online to familiarize yourself with the lingo. A good book that helped me with some of this, even though it wasn’t specifically for a docs as code approach was [Technical Writing Process](https://www.amazon.com/Technical-Writing-Process-five-step-procedures/dp/0994169310/), by Kieran Morgan. The book was also helpful for learning to think more like a technical writer, especially in how to organize information, and how to create a procedure for the work itself.

Spend time writing out your answers to [Part 1 of this series](https://aaronkredshaw.com/2022/01/16/the-technical-writing-interview-part-1/), and prepare for the technical knowledge section, and you may just get the job you’re interviewing for. Good luck!