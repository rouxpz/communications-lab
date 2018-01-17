# I. THE INTERNET: AN OVERVIEW

It's extremely tempting to think of the Internet as always having been there; nowadays, we can't go more than 5 minutes without checking something online, and our eternally powered on phones and devices make it incredibly easy for us to be hyper connected, all the time. The Internet is so woven into our everyday life now that, for many people, not having access to email, social media, and the World Wide Web for an extended period of time seems completely outrageous. But it's important to remember that less than 30 years ago, the idea of being able to connect to a global network of thousands of different computers -- and millions of different people -- seemed not only impossible, but totally incomprehensible.

<iframe width="560" height="315" src="https://www.youtube.com/embed/95-yZ-31j9A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Before we get started building content for the Web, we need to take a step backward and understand where the platform itself came from. Let's start by looking at the rapidly evolving landscape of what the Internet is, starting with its humble beginnings as an emergency communications system.


## HISTORY OF THE INTERNET

### ...But First, A Brief History of Computing

We can’t really talk about the Internet without talking about the history of computing, and computing has a lengthy and complex history full of people responsible for individual parts of technology we rely on today. Here are just 6 of the many people responsible for huge milestones in computation, which had a direct impact on the creation and evolution of the Internet as we know it.

Charles Babbage originated the concept of a “programmable” computer, meaning that you could give a machine instructions that it would follow.

Ada Lovelace, a frequent collaborator with Babbage, contributed to the beginnings and study of computation in her own right. She is primarily remembered for creating the first algorithm executed by a computer. An **algorithm** is an ordered list of instructions that are to be followed to create an outcome.

George Boole created a binary system for math that found its way into computing -- the 0s and 1s that
make up machine language, each of which equates to true and false. He was honored for this development by having a computational data type named after him: the **boolean**, which we'll learn about later on.

Alan Turing - Performed some of the first experiments with artificial intelligence.

Grace Hopper, [BACKGROUND], is responsible for popularizing the idea of high-level programming languages. High-level programming languages are languages that are easily read by human beings -- as opposed to low-level languages, which are closer to the native processes of the computer. Hopper is also credited with coining the term “debugging”, after quite literally removing a moth from a computer, which was causing it to malfunction.

Konrad Zuse - Developed the world’s first functional, electrically operated programmable computer.

This is just scratching the surface; there were many, many more people who had a hand in getting computing technology to the place where it is today. (In particular, the foundations of computing were developed by a huge number of talented women.) The Internet developed in a similar way; many, many hands were responsible for developing the systems that we know and rely on.

### The Beginnings

The first rumblings of the Internet as we know it began in the late 1960s, with the the creation of **ARPANET** by the United States Department of Defense and their Advanced Research Projects Agency (hence, ARPA). ARPANET was created during the Cold War, as a "galactic network" of computers that could talk to each other, which was then seen as a precaution against the possible nuclear destruction of things like telephone lines. This network did not have a central base or core, which meant that even if one or two connected computers were destroyed, the rest of the network remained intact and functional.

[ARPANET photo map]

ARPANET was the first network to utilize something called **packet switching**. Packet switching breaks information or data down into smaller blocks, or "packets", that are then transmitted and reassembled on the other end. It's similar to a process called circuit switching; both protocols involve breaking down data into smaller pieces and sending them over a network, but the differences between them lie in both the path and the order in which those pieces make it to the other end. In circuit switching, the segments are sent via the same dedicated route, in order. While this method does a good job at maintaining the quality of the information, and makes sure that the information reaches its destination quickly, its predictable nature makes it an easy target for interception, and therefore makes it relatively insecure. Packet switching, by contrast, treats the pieces as individual, self-contained chunks, and they are sent to their destination over a number of different routes. While this does slightly deprecate the quality of the final product, and takes a bit longer to do than simple circuit switching because of the re-assembly involved at the end, packet switching has the benefit of being a much more secure protocol for sending and receiving information.

As a result, packet switching (in the forms known as Transmission Control Protocol and Internet Protocol, or TCP/IP) went on to become a foundational technology that still underpins the Internet to this day. Many of the other protocols that developed from ARPANET, like File Transfer Protocol (FTP), also still exist today, in forms that very much resemble their original incarnations. However, most of those original protocols have grown and changed over time, and been rebuilt into systems that are much more sophisticated, powerful, and capable of handling the increasing amounts of data and traffic supported by the Internet every day.

As ARPANET and its technological abilities were evolving, an idea called **hypertext** was simultaneously being developed as a separate entity. Coined in 1963 by Ted Nelson, and later developed by Nelson, Andries van Dam, and Douglas Engelbart, hypertext was envisioned as a method for organizing and providing connecting streams of information within a single document -- whether those are references, annotations, or otherwise related information. The development of hypertext was directly inspired by a 1945 essay by Vannevar Bush entitled ["As We May Think"](https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/), which proposed a device called a Memex that would be responsible for storing someone's entire archive of collected knowledge, and could be accessed through connections within a person's memory.

Hypertext uses **hyperlinks** (known simply as "links") to connect different documents together via highlighted words or phrases. A user can get the information contained in connected documents by activating the links, most commonly with a mouse click. (A closely related tool, **hypermedia**, uses links to connect to things like images, audio and video.) In this way, users have direct access to related information within the document they are currently reading; all they have to do is click on a link, and they can get access to more information, which will augment and inform their experience of reading or engaging with the initial text. Hypertext rapidly grew in popularity over the years, and was incorporated into a number of different projects and endeavors; one of the most successful of these, HyperCard, was a popular Apple software application that used the idea of hypertext and hypermedia to connect content within stacks of virtual “cards” that could link to each other.

(Video discussing Hypercard)

In hindsight, Hypercard looked and worked a lot like something we all use on a regular basis today: the web browser. In 2012, during the TKTK Conference, Bill Atkinson reflected on the similarities between Hypercard and a ubiquitous application that we have all come to rely on.

(Video: Bill Atkinson discussing browsers)

### The World Wide Web

The Internet is the actual connections between computers, and their act of relaying information back and forth. But the actual process of typing an address into a browser and getting the information from that space belongs to what is known as the **World Wide Web**.

These two terms are often used to mean the same thing, but it's important to note the distinction between them. While things like email, instant messaging, and file transfers all belong to the Internet, they do *not* belong to the Web. Instead, the Web is simply one space for sharing information, which can be accessed through the communication channels of the Internet. Sometimes these things can overlap; Gmail, for example, is a popular email service, created by Google, that provides an interface for users to access their email via the World Wide Web. But Gmail can also be accessed in other ways that don't necessarily rely on the Web or a web browser -- for example, through a desktop email client, or through a client on your phone -- but that *do* directly rely on the Internet.

Tim Berners-Lee invented the World Wide Web in 1989; it became accessible to the public in 1991. He’s now the director of the World Wide Web Consortium (W3C), which oversees the continuing development of the Web and the standards used to build and maintain it. Berners-Lee is responsible for the idea that the network could do more than just send data back and forth -- instead it could be seen as an entire network of information that users could retrieve via hypertext. He connected the ideas of the network and hypertext. This was the basis for the Web as we know it today.

Berners-Lee is also responsible for how open, freely accessible, and available the content on the Web, and the Internet in general, is today. He is a staunch advocate for freedom of information -- the idea that anyone can get access to the content on the Web if they wish. This is not just limited to the content on the sites you visit; if you go to a website, the code used to build it is available for you to see, because Berners-Lee and others following in his footsteps want to ensure that not only can anyone see what's on the Web; anyone can build for it, too. As a result, today's Internet, and the Web along with it, is an unrestricted pool of information. Any restrictions to that information come externally from entities like corporations or governments, which may have their own incentives to block off a portion of the content accessible to people, but the process by which they restrict that content is akin to damming off a river; that content still exists, but it's just blocked from view (and, indeed, many people have devised methods of getting around those restrictions).

[IMAGE OF MOSAIC]

In 1992, Mosaic was the first program that we can recognize as a “web browser.” Developed at the University of Illinois, the project introduced the image tag, allowing users to see words, pictures, and clickable links in the same document. The web has been evolving in sophistication and power ever since.


## HOW DOES THE INTERNET WORK?

At the end of the day, the Internet is basically just a bunch of computers talking to each other. (This is a pretty simplified description of what is actually happening whenever you navigate to a webpage or click on a link, but it helps to think of it in these terms for ease of understanding.)

Every time you input a URL into an address bar, you may see that the URL begins with a variation of "http://". HTTP stands for **HyperText Transfer Protocol**: an exchange of data utilizing links (the hyperlinks that people like Bill Atkinson and Tim Berners-Lee were working with) that connect nodes containing information. The "http://"" that you see before the web address you're sending your browser to means that the link that you click or enter is making an HTTP request to another computer to retrieve its data, or to save something. The second computer receives the request, and acts accordingly; delivering the information (most often in an HTML page), or accepting the information to save.

The mechanisms of the Internet are based around what has become known as the client-server relationship. The computer you're typing the address into is known as the client, and the second computer you're communicating with is known as the server. The servers, or the computers storing the information, tend to be huge, capable of tons of storage and fast processing speeds; but essentially, today's Internet still works the same way as the communication network of ARPANET -- it's just much, much bigger, with thousands of computers communicating with each other all over the world.

[Photo of client-server]

*A quick note:* the material in this book is focused on building client-side applications -- which are applications developed for the web browser, not for the server. This means that all of the examples and projects covered will be focused on the experience that a user has on their own computer, and not concerned with building applications capable of storing information on a server and accessing it later.


## DESIGNING FOR THE INTERNET

It's time to shift gears a little bit, and talk about how to design those client-side applications. As we move further into creating our own content for the Web, we will become increasingly invested in designing that content as well. In fact, Web design is a huge field encompassing a number of different aspects of what a website looks and feels like.

**Graphic Design.** Graphic design, as with its counterpart in print and broadcast media, is the process of determining what visual elements communicate the message of your website in the most effective manner. Generally, this area is focused on things like layout, typography, and illustration.

**Multimedia Design.** Multimedia design involves the incorporation of elements such as video, audio, and animation into a website. These designers may be focused on creating content that is featured on the site, as well as figuring out the best way in which to incorporate it in the overall project.

**User Interface and User Experience Design.** UI and UX designers, as they are known, are focused on optimizing the interactions that human users have with the website. Their jobs are to create interfaces that are easy to use and intuitive, and to promote the desired interaction by researching the experiences that users have with the site at many stages of its development.

This section will mainly focus on some fundamental principles of graphic design that you should know as you start building your first projects, but later on, we will investigate the processes of designing media content and designing interaction as they relate to the different sections of this text.

### Color

The process of seeing color is extremely subjective. Anyone familiar with the idea of color blindness knows that many people don't see colors in the exact same way. What's more, much of the way we see one color has to do with the way we perceive the things that are around it, and where the images are coming from.

For example, in the below image, can you guess which of the center squares is the darker shade of orange?

[IMAGE]

If you guessed that they're the same, you're correct. But on first glance, the square surrounded by a lighter color *seems* like it's a darker shade than the other. Our mental process of viewing colors is greatly influenced by the palettes they are part of, and as a result, we will sometimes perceive the same colors as being very different in different contexts.

Also, how you see color in print and on screen are two very different things, and represent two contrasting ways of interpreting light.

[IMAGE]

Color on screens is additive, meaning that light is added to create color. In this instance, all the shades seen together create white; the more colors you add, the brighter the resulting shade becomes. Conversely, when we add all of the colors together on a sheet or paper, or on a canvas, the resulting shade becomes darker and darker, until we end up with black.

The differing standards between these two processes cause a lot of variance in how certain colors are seen across different mediums. This is less relevant to us, as we are primarily designing for a screen-based medium, but it is still beneficial to keep it in mind; for example, if you are trying to replicate a printed image on screen, it will be important to understand that you may not be able to *exactly* replicate colors from the printed material on screen.

#### Color Palettes

There are millions of colors out there, and millions of possible combinations of those colors. It's important to understand that some colors look great when placed together, and some do not.

**Color theory** is the study of color, and with it, the body of thought surrounding which colors work in synchronicity with each other. In other words, it's a guide to figuring out whether or not a set of colors "go together". At its core, color theory utilizes the color wheel as its basis, and extracts patterns along that wheel for various color palettes and schema.^[All material for the below color schema, as well as a multitude of great information about color theory, can be found at [TigerColor](http://www.tigercolor.com/color-lab/color-theory/color-theory-intro.htm).]

**Complementary colors** are colors that are directly opposite from each other on the color wheel. These colors contrast greatly with each other and are effective at drawing a user's attention, but must be used with care so as not to overwhelm the viewer.

A variation on the complementary color scheme is the **split-complementary color scheme**, which, instead of the color directly across from the starting shade, uses the adjacent colors to the opposite. This softens the contrast a little bit, while still providing enough of it to draw the viewer's attention.

**Analogous colors** are colors that lie next to each other on the color wheel. These colors will fit with each other well, since they tend to be variations on the same basic shade, but they run the risk of being *too* indistinguishable if there isn't enough contrast present between the various colors used in the palette.

**Triadic colors** are three colors that lie at an equal distance from each other on the color wheel. Connecting the three will form an equilateral triangle (hence the name of the scheme).  

**Rectangular colors** are composed of two different colors, and their complementary shades.

Your color palettes will be most effective if they fall under an established color scheme, rather than picking out random individual colors that you like. Choose one color as the dominant color of the design scheme, using the rest as support shades.

#### Color and Connotation

Finally, as you are choosing a color scheme, it's important to remember that colors themselves carry specific feelings and associations for viewers. This can be as simple as the distinction between warm and cool colors, which have an effect on the way other imagery is interpreted, as well as cultural, social or natural associations that colors carry with the real world.

### Typography

Instead of reading about the history of printing and typography, you may want to watch this great animated video by Ben Barrett-Forrest, made in 2013, which covers the evolution of type all the way from the invention of writing:

<iframe width="560" height="315" src="https://www.youtube.com/embed/wOgIkxAfJsk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

There is no doubt that with the advent of the computer, particularly the word processor and the graphical user interface, the art of typography suddenly became infinitely more accessible to everyone. Apple was one of the first pioneers in this regard, and introduced a lot of new typefaces to the personal computing industry.

This is a photo of all the fonts available on the first Apple computer:

[PHOTO]

As you can see, initially there were only limited typefaces that designers could use on the computer, but as personal computing has evolved, the number of typefaces that were able to be used grew exponentially, and today we have the option to choose from thousands of different possibilities.

*A note:* In digital typography, a **typeface** is a family of related characters that represent a consistent design, while a **font** is the actual file on the computer that stores the data required to render the characters. The two terms stem all the way from the days of metal typesetting, where fonts were the actual blocks used to print different sizes and weights of the same typeface. You may see the terms used interchangeably, and for the most part, nowadays people use them to mean the same thing.

Typefaces are broadly characterized into three major groups:

**Serif.** Serif fonts are fonts that have serifs -- the embellishments on ends of the characters. They are frequently used in professional, academic, and scholarly settings, and often carry an "old-world", classical feeling with their use. Examples: Times New Roman, Georgia, Courier, Palatino.

**Sans serif.** As the name implies, sans serif typefaces remove the serifs. They are strongly associated with the advent of modern advertising, and are often used to represent a cleaner, more modern design. Examples: Helvetica, Futura, Calibri, Impact.

**Display.** Display typefaces are used just for that purpose -- for displays. They are generally meant to be used for bold statements like headings or single words or phrases, and not designed for use in a more close-reading context. Examples: Stencil, Curlz, Brush Script, Cooper Black.

When working with type, while it's tempting to use many different fonts and styles in your work, it's usually best to keep your choices restricted to one, MAYBE two typefaces. Too many competing typefaces looks extremely messy, and is hard to read. You can play around with weights and italics to shake things up within the same typeface.

### Exercise

Choose two websites and look closely at how they are using the color and typography design principles outlined in this section. What do their color and type choices say about the type of experience or service that a user can expect?

## Next Steps

We have learned about where the Internet came from, how it works, and some design principles to keep in mind as we look at websites and explore what works and what does not. The next step in our process is actually learning how to use the tools to make our own content.

In order to build for the browser, we need to look at three separate mechanisms that each control a different aspect of how people experience the Web. The first, the content we see read, and hear, is constructed via HTML; the second, responsible for style and design, utilizes CSS; and, finally, the interactivity we experience is controlled by JavaScript. In the next chapter, we will learn more about each of these languages, and the specifics of how they are used in connection with each other.

{{ footnotes }}
