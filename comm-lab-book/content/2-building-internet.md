# II. BUILDING FOR THE INTERNET

Now that we know a little bit more about where the Internet came from, and how its functionality has developed over the past 20-plus years, it's time to start getting our hands dirty with actually building something that can go online.

There are three different languages needed to build for the web: HTML for **content**, CSS for **style**, and JavaScript for **interactivity**. It's important to note that all of these languages are responsible for different aspects of the way that a webpage works, which we'll get into more as we discuss the details of each one.

## File Management and Organization

TKTKTK

## HTML

HyperText Markup Language, otherwise known as **HTML**, is defined as "a markup language used to describe text documents" (footnote). HTML was formalized in 1991, and the fifth iteration, known as HTML5, was adopted as the standard for the World Wide Web in 2014.

As its name implies, HTML "marks up" plain text with tags that describe its purpose and its formatting. The purpose of a web browser is to read HTML documents, and use the tags to figure out how the text should be displayed.

There are a number of different web browsers out there (Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge are among the most popular), and while they are all meant to do the exact same thing -- take HTML content and translate it into what someone sees on their computer -- each browser is built using a slightly different protocol, and thus will do this same task in slightly different ways. In the beginning, this won't change the way that you build your webpage; HTML, after all, is the standard for rendering content, and its tags are, for the most part, universally readable across different browsers. But when you inevitably try to build on top of very basic HTML by adding CSS for style and JavaScript for interactivity, you may find that the page you spent hours painstakingly crafting in Chrome looks completely different when you launch it in Firefox. You may also find that some things work great in one browser, but may not work at all in another. This goes for different computer operating systems as well; what looks great on a Mac may not render so well on a PC, and you may even find some discrepancies between different computer models within the same OS.

The process of making sure that your page renders correctly across a number of different environments is known as *browser compatibility*. We will cover some basic browser compatibility best practices as we progress through the material in this book, but in general, it is always a very good idea to launch your webpage in a couple of different browsers (and on a couple of different computers) as you are building it, to make sure that things look the way that you intend them to look.

*A word about HTML5:* when it was introduced in the early 2010s, HTML5 was regarded as a radical departure from what most people knew as HTML, mainly because it introduced a lot of strong media features that made things like audio, video and animation much simpler to work with. Not all browsers supported these new features from the outset, and as a result, it took a few years until the landscape caught up enough to accept HTML5 as the standard. Because of this, you will sometimes see HTML and HTML5 described as two separate things.

We’ll get to these media features later on, when we discuss audio, video and animation in detail. Right now though, for our purposes, HTML = HTML5.

In order to format our documents as HTML, we need to first understand 3 key components and what they do. These components are **elements**, **attributes**, and **content**.

### Elements

Elements provide the structure of the HTML page. They tell the browser how to read and interpret certain content based on what type it is.

Elements take the form of `<tags>`, which are enclosed within pointy brackets. Most elements require an open tag (`<tag>`) and a closing tag (`<\tag>`), but not all of them do.

#### Attributes

Attributes are additional information that you give to an element. Attributes are always listed within the opening tag with a key and value pair.

So for example, `id="greeting"` gives your element a key of `id` with the value of `"greeting"` that you can later use to target that specific element.

`<a> ` tags always need an attribute `href` to determine where to link, and `<img>` tags always need an attribute `src` to determine the source of the image to display. We'll talk more about this momentarily.

#### Content

Content is what you’re trying to say on the website. It’s the information you are marking up with the tags.

Think of the content as the thing you are creating for the viewer to read -- the rest of the HTML is the thing you are creating for the computer to read.

#### Basic Tags

There are a number of tags that you will find yourself using frequently, regardless of the type of webpage you're building. Some of the most commonly used tags are as follows:


`<h1>` - `<h6>`: Heading tags. These will format the enclosed text as a heading in your document.

<div class='example'>
```html
<h1>I am H1! I am the largest heading.</h1>
<h3>I am H3. I am a medium sized heading.</h3>
<h6>I am H6 -- the smallest of the headings.</h6>
```
<iframe src="examples/html1.html"></iframe>
</div>

`<p>`: Paragraph tag.

```html
```

`<a>`: Link tag (known colloquially as the "a" tag). A link tag must *always* be paired with an attribute of `href`. The value of the `href` attribute is the address of the webpage that you are linking to.

```html
```

`<ol>`, `<ul>`: Lists.

```html
```

`<img>`: Images. In order to display images on your webpage, you'll need to use the `<img>` tag. Like the `<a>` tag, `<img>` must always be paired with an attribute, called `src`, that tells the browser where to find the image you want to display.

There are two ways to incorporate an image into your page. The first is to store the image *locally*, within the same folder that you're storing the HTML page itself. If you're going this route, it's always a good idea to create a separate folder within your master project folder that is specifically designed to store images. The more organized you are, the easier it will be for you to find all of the assets you need as your pages grow larger and more complex.

```html
```

The second way to include an image is to link to it, in the same way you would provide a link for an `<a>` tag. In order to do this, you need to make sure that your link ends in a commonly accepted file extension: `.jpg`, `.png`, `.gif`, etc.

```html
```

### Structure

Each HTML page that you build must follow the following structure:

```html
<!DOCTYPE html>
<head>
  <title>Title of your webpage</title>
</head>

<body>
  <!---This is where the content of your webpage goes.--->
</body>
```

You'll notice that there are three main sections to your page:

The `<!DOCTYPE>` must be declared right at the beginning of your HTML document. This is basically a tag that lets your web browser know what version of HTML the document is written in. (This was more important back before HTML5 was adopted as the standard, but it's still good practice to make sure your doctype is declared every time you create a new HTML file.)  
`<head>` contains all of the **metadata** about your page: for example, the title of the page (which will show up in the browser tab), links to external CSS stylesheets and JavaScript files, and anything else that deals with how the page itself runs in the browser. This section should NOT contain any content.  
`<body>` is where you will put all of the content of your page -- the things you actually want to show up within the browser window (text, links, images, etc.). As a general rule, if you want your user to be able to see it, place it in the body of your page.

#### Classes and IDs

`class` and `id` are attributes that you can add to almost any tag in order to categorize them. Classes can be applied to multiple tags, while IDs can only ever be used once.

```html
<p class="highlighted">This paragraph belongs to a class called "highlighted".</p>
<p class="highlighted" id="special">This paragraph also belongs to "highlighted", but in addition, it has an ID called "special".</p>
```

Classes and IDs will become very important when we start to style our HTML using CSS. They enable us to target some tags, while ignoring others.

#### Div and Span tags

`<div>` and `<span>` don’t explicitly show up on your page when you use them. They are HTML container elements that are used for organizational purposes, not for visual ones.

`<div>` is used to group a bunch of HTML elements together into blocks, that can then be manipulated as groups. It starts on a new line and takes up the entire width of the page.

`<span>` is used for inline elements and can be used to separate certain content in a line from the rest of the content in that line.

```html
<body>
  <div id="content-one">
    <p>Divs are used to organize content into blocks.</p>
    <p>This way, you can place multiple HTML elements within a single category.</p>
  </div>
  <div id="content-two">
    <p>Spans, by contrast, deal with <span class="emphasized">inline elements</span>.</p>
    <p>They are used to distinguish content <span class="emphasized">within a line</span> from the rest of the content in that same line.</p>
  </div>
</body>
```

### A Final Note
HTML is for *content only*. As you investigate further, you may see that you can use a variety of different HTML tags to position your content in certain parts of the page, or apply some basic colors and typefaces. In general, however, all styling (meaning what the page looks like) should be done through CSS, not through HTML.

In the next section, we’ll learn how to apply the web design principles discussed earlier to the websites we have built in order to give our page some basic style.

### Exercise

Build a website ONLY using HTML. [DETAILS]


## CSS

CSS stands for **Cascading Style Sheets**. It’s the standard for styling pages on the World Wide Web. First proposed in 1994, CSS was officially recommended by the World Wide Web Consortium in 1996 and is now the standard language used to control the style and presentation of content on the web.

Its design enables easy separation of document content and document presentation. What this means is that you can keep the style of your page separate from the content of your page, so each document is only responsible for one thing at a time.

### How to Use CSS

There are three ways to implement CSS in your website.

**"Inline" CSS** means that CSS is applied directly within the HTML tags of the document, using an attribute within the tags called `style`.

```html
<p style="font-family: Times New Roman;">This is an example of a paragraph that uses the style attribute.</p>
```

<p style="font-family: Times New Roman;">This is an example of a paragraph that uses the style attribute.</p>

This is okay to do if the styling is minimal or if you need a temporary quick fix, but it is not recommended for a larger project. [WHY?]

Another way to use CSS is to put it all in the `<head>` tags of your page, using `<style>` tags.

```html
<head>
  <title>Example CSS</title>
  <style>
    body {
      font-family:Helvetica;
      background-color:green;
    }
  </style>
</head>
```

This is better than inline CSS, and okay if applied to a single page with a unique design, but still not great as a lot of styling will eventually make your document messy and cumbersome, and you’ll have to redo it for every single page you create.

The most preferred way of using CSS is by putting it in an entirely new document (referred to as an "external stylesheet"), and linking to it in your `<head>` tag.

**In your main HTML file:**
```html
<head>
  <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>

<body>
  <p>Here is some example text.</p>
</body>
```

**In a *separate* CSS file:**
```css
body {
  font-family:Helvetica;
  background-color:pink;
}
```

This keeps style and content separate, and is much easier to navigate. You are also able to re-use the same CSS stylesheet across multiple HTML pages, making your project consistent and cohesive. Plus, you don't have to rewrite the CSS from scratch every time you create a new page; simply link your new HTML to your existing CSS file, and all of the style will automatically be applied.

### CSS Syntax

CSS uses "selectors" to target and apply style properties to an HTML page. A selector can be as simple as a tag name, or it can be a few other things, all of which serve to "select" some tags, and ignore others.

```css
selector {  
    property: value;  
}

body {  
    font-family: Helvetica;  
}
```

An important note: CSS is read from top to bottom... which means any changes you make at the bottom of the document to the same selectors override the ones at the top. (The *cascade* in the name "Cascading Style Sheets" refers to the order in which CSS elements are applied to various selectors across the document. For more information about this cascade, you can [read about it at the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance).) This is important to note when you are building your CSS files; make sure that you are aware of what properties you are associating with specific selectors across your file, and that you are not accidentally overriding properties by resetting them elsewhere.

#### Colors in CSS

CSS recognizes a large variety of colors by their names alone.

[photo of color names in CSS]

However, for a much more nuanced selection of colors, enabling you to create a wide range of custom palettes and color choices, you can use what are known as **hexadecimal codes**, or, more simply, hex codes.

A hex code is formatted like this:

[PHOTO OF HEX CODE]

The code is composed of six letters or numbers, prefaced by the pound character (also known as the hashtag). The letters and numbers are grouped into pairs of two; each pair represents a value for red, green, or blue. By combining these three pairs together, we can see a huge assortment of accessible colors, which we can incorporate into our web design.

```css
body {
  color: #7f007f;
  background-color: #fff8dc;
}
```

In general, there are two ways you can apply colors to garden-variety HTML elements. The first is by using the `color` property, which specifies the coloring of any foreground components in the element. (Generally, this means text.) The second is `background-color`, which sets the coloring of the background of the element. In the example above, we can see that the CSS applied to the body sets the background color of the page to off-white, while the text on the page is violet.

#### Type in CSS

This is the basic syntax for typography in CSS:

```css
body {  
font-family: Helvetica, "Trebuchet MS", Arial;  
font-size: 18px;  
font-weight: normal;  
font-style: normal;  
}
```
The typeface to use is specified through the `font-family` property. You will notice that in the above example, rather than just assigning one typeface to the body, there are three listed, separated by commas.  This is known as a **font stack**. When you assign a font stack to `font-family`, the web browser will try the fonts in the order that they are listed. In the event that the first font is missing, it will go on to the second, and so forth. Fonts named with two or more words go in quotation marks.

You can also customize the sizes, weights, and styles of the typefaces you use within your site. A full list of typeface properties can be found at [RESOURCE].

There are a number of typefaces that are designated as **web safe**.

[Photo of web safe fonts]

What this means is that the vast majority of computers and web browsers will have these fonts installed, and will be able to render the typefaces properly in any site that uses them. It has traditionally been best practice to design based around these web safe fonts, or to at least include a web safe font in your font stack as a fallback option, to make sure that your page renders appropriately on anyone's computer, regardless of the operating system or browser they are using.

Rather than relying on fonts that have been installed locally on a user's computer, however, web developers have recently begun using a new tool called `@font-face` in order to make sure their pages render with the exact fonts they want.

```css
@font-face {  
font-family: "customFont";  
src: url(fonts/sampleFont.woff);  
}
```

The best part about `@font-face` is that now, designers are not restricted to web-safe fonts. Instead, it gives the page the option to load the font locally, and use it just on that site -- in the same way that you can store and use images locally on your HTML page.

The "src" property is where the font file is being stored (ideally in a WOFF file, but `@font-face` also accepts TTF); you just point either to where it’s being stored locally, in your folder structure, or remotely, on another website.

You can also use tools like Google Fonts to load font files stored remotely; this way, you don't even need to

BE WARNED: if you use a lot of font files in your document, your page will take correspondingly longer to load. In general, it's best to keep to the standard design rule of using no more than two different typefaces in your page. You can then experiment with things like weights, sizes, bolding, and italics to differentiate uses of a single typeface.

#### Classes, IDs and CSS

We have seen in the previous section that we can use the `class` and `id` attributes to categorize our HTML. We can now use these categorizations extensively in CSS to target specific tags, and ignore others.

To identify classes and IDs in your CSS document, we use special characters that precede the name. Classes use the period, and IDs the pound sign (hashtag).

```css
.class {  
    attribute: value;  
}  

#id {  
    attribute: value;  
}
```

So, for HTML that looks like this:

```html
<p class="selected">This is some text that has been selected.</p>
<p class="selected" id="special">This is some text that has also been selected, but is extra special.</p>
```
we can use the following CSS to manipulate the content:

```css
.selected {
  background-color: green;
  font-family: Arial;
}

#special {
  font-size: 40px;
}
```

[Photo of previous example]

Remember that classes can be used multiple times in the same document; IDs only once. If you try to use the same ID multiple times in an HTML document, the associated CSS will not be applied properly.

### Layout and the CSS Box Model

So far, we have seen that our HTML basically looks like text, images, and other elements laid out one after the other, vertically on a page.

[Photo of example]

But in actuality, we can manipulate the size, positioning and appearance of these elements by using CSS and something called the **box model**.

**The Box Model.** Although it looks like the content on your webpage is floating by itself, in actuality, every element in your HTML page has an invisible box surrounding it.

[Photo of the box model]

In the center of the box is the content itself. The box surrounds it, delineated by a **border**. The space in between the content and the border is known as the **padding**, and the space between the border and all of the other boxes on the page is called the **margin**.

The box model applies to every single HTML element visible on a webpage, including tags like `<body>`. Although these boxes are invisible at the outset, through CSS, we can control the design and layout of the boxes by manipulating their margins, borders, and padding.

[Display]

[Positioning]

#### Div, Span and CSS

As we saw before, `<div>` is useful for grouping together a bunch of different HTML elements into blocks, while `<span>` is an inline element used to target specific content in another element. So far, we haven't used these much, simply because in their default state, they don't show up on our page.

But now, we can start using `<div>` and `<span>` to group parts of our HTML together, so we can apply various CSS properties to them in one go.

[Examples]

`div`, in particular, will become extremely useful to us as we start to explore putting our webpages into different layouts. By placing individual HTML elements into groups by using `<div>` tags (which themselves are contained in their own boxes), we can start seeing how the box model can be applied to page layouts. Think of layout as the process of putting smaller boxes into larger boxes, and organizing those larger boxes into a form that makes sense on the page.

[Example]

### Transitions and CSS Animation

CSS3 has also provided support for basic transitions and animations, which can be activated directly from the stylesheet.

Some elements have CSS properties that can be activated when the user interacts with them in certain ways. For example, with the `<a>` tag, you can specify things that should happen when a user hovers his/her mouse over the link.

```css
a {  
color: #000000;  
}

a:hover {  
color: #ff4040;  
}
```

Beyond these basic features, we can also use **CSS Animation** in order to

```css
a:hover {  
	color: #ff4040;  
transition: color 1s ease-in-out;  
}
```

[More info about transition and animation]

### Exercise

Take the page you built with just HTML... and add some style to it. [DETAILS]

## JAVASCRIPT

**JavaScript** is a high-level programming language, designed specifically for the World Wide Web. It was born from a desire to see the web browser become a more dynamic environment for users; the creators of Netscape, one of the first popular web browsers in the 1990s, believed that this was best accomplished through the creation of a programming language that could be directly integrated into the HTML of a webpage, and which had the capacity to control things like the images and content seen in the browser.

Initially, JavaScript was known as **LiveScript**; however, just months after LiveScript's initial release in 1995, the name was abruptly changed to JavaScript. Some believe that this was an attempt to capitalize on Sun Microsystem's popular Java programming language, which had already started to become integrated into the Web through the use of third party plugins; however, aside from the name and some similarities in syntax, JavaScript and Java actually have very little in common.

JavaScript's main purpose is to bring interactivity and scripting into the browser, in order to bring a diversity of behaviors in to the client-side of a webpage -- which, in turn, enables your site to respond to more sophisticated user input than just clicking on links to other webpages. Instead, the interactivity can be contained within a single webpage, and can control the HTML and CSS content of that page depending on how the user interacts with it.

It's important to differentiate between markup languages, which we have been exploring with HTML and CSS, and programming languages, which is what JavaScript is. A markup language "marks up" content. It’s writing notes to the computer or browser to tell it how to render the content. Think of it as

In contrast, a programming language writes a program: an actual list of instructions (also known as an **algorithm**) for the computer to follow. The results aren’t always seen by the user, but every step in that list contributes to the way the page functions. The computer runs these steps literally; it can't see between the lines and decipher things

### The DOM and BOM

The HTML **Document Object Model** (also known as the **DOM**) provides a means for a JavaScript program to access and change all of the elements of an HTML document.

Think of it as allowing a user to make changes to the HTML and CSS you’ve written, without having to go back and rewrite the document, and not in a permanent way. You can use JavaScript to change both the HTML of your page, as well as the CSS and styling, depending on how the user interacts with it.

```html
<p id='myId'>Here is some initial text for the paragraph.</p>
```

```js
document.getElementById('myId').innerHTML = "Here's some new content!";
document.getElementById('myId').style.fontFamily = 'Helvetica';
```

In the above example, when the button is clicked, the element with the ID "myId" -- in this case, the paragraph tag -- both has its HTML content switched out (by assigning its `innerHTML` property to a new string),
The Browser Object Model (BOM) -- not to be confused with the DOM! -- allows your JavaScript program to communicate with the web browser that’s displaying your webpage.

Think of this as your JavaScript talking to the web browser itself, *NOT* the content or styling of the page.

### How to Use JavaScript

Multiple ways to integrate JavaScript into your page.

Inline JavaScript works the same way as inline CSS -- it applies JavaScript directly within the HTML tag in which it’s written.

[INLINE JS EXAMPLE]

In the same way that the `<style>` tag tells your document that CSS is following, the `<script>` tag allows you to write chunks of JavaScript within your HTML document.

[SCRIPT TAG EXAMPLE]

In the same way that we saw that we can use external CSS stylesheets, you can also create *external JavaScript files* and then reference them in your HTML document. A lot of web developers prefer to do this, because it makes the files a lot cleaner and easier to understand if all of the different languages and functionality are separated.

It’s very important where you place your JS file in the context of your website.

The HTML calling the script *after* the ID has been defined will work, whereas the one calling before will not. Why? Because in this case, the script only runs once -- and if it doesn’t see anything with an ID called "toClick" when it runs, it assumes it will never have anything to execute.

In general, the best practice to write complete functions in your external JS files, and then invoke them within your HTML. Place your external JS file in the head of your document so it is universally accessible throughout the page.

[EXTERNAL JS EXAMPLE]

### JavaScript Syntax

```js
var x = contents;  
function(argument);
```

[Object, expression, function, argument, delimiter explanation]

[Comments]

Let’s take a look at a simple line of JavaScript, which makes an alert box pop up when an element is clicked.

```js
document.getElementById("toClick").onclick = function () {  
	alert("Hello world!");  
}
```

Calling the document object in your JavaScript tells your code that you are about to access something within the HTML of the document. The things you are searching for will follow as functions that are called next.

#### Wait, what’s an object?

An object is the basis for everything you do in JavaScript. Everything that you work with in your code will be an object.

We’ll learn much more about objects later on, but right now think of them as the **nouns** of your JavaScript. They are things that have their own identifying properties.

#### Wait, what’s a function?

A function is a block of code written to do a specific thing or fill a specific purpose. In other words, it’s code that is grouped together and runs at the same time.

A function only runs when it is explicitly called or invoked. If you don’t tell the program to execute the function, the function will never run.

Think of functions as the **verbs** of your JavaScript. They are the things that your objects do.

You can define your own functions like this:

```js
function myFunction () {  
		// put the code you want in your function here  
}
```
...and then call them within HTML!

```html
<button onclick="myFunction()">Click me!</button>
```

Alerts, confirm boxes, and pop up windows are built in JavaScript functions that make something happen in the browser when a user interacts with the page in a certain way.

#### Events

JavaScript events (onclick, on mousemove, onkeyup, onkeydown etc.)

Basic example with clicking a button to load an alert and confirm box

Use confirm box to lead in to variables.

### Variables in JavaScript

The previous example with the confirm box taught us that by using JavaScript, we can easily incorporate elements into our websites that allow for our users to make choices, which can often return differing results. A problem, though, is that right now we don't have any way to remember what the result was. The user can click on that confirm box all they want, but at the end of the day, the page stays the same, no matter if they select "accept" or "cancel." It would be awesome if we could take that information and use it later on -- but right now we have no way to save it anywhere.

This leads us to a larger question: *how do we store information in JavaScript?*

The answer is a **variable**. A variable is a container for storing data. This could be any type of data you want -- and we’ll go into those different types momentarily -- but think of the variable itself as something that is able to hold on to any information you need it to. Then, you can access that information later on, in order to re-use and manipulate it.

```js
var c = confirm("Press this button to display the result on the page");
```

#### How To Use Variables

There are three steps to using variables.

##### Step One: Declaring a Variable

This is where you announce your intent to use a variable in the script, and where you give it a name.

```js
var c;
```

Variables can be named whatever you want! Just make sure the naming is consistent, both in spelling and case (ie, `myVariable` is different from `myvariable`). In general, new coders tend to find it easier to name their variables things that give them a good idea about the kind of information they are storing, ie "textInput" or "userValue".

##### Step Two: Initializing a Variable

This is where you populate or assign your variable with an initial value. This can be done in a separate step from declaring the variable, or it can be done all in one go.

```js
c = "Hello world!"  
var c = "Hello world!"
```

It's important to note here that the equals sign is the thing responsible for assigning the value of "Hello world!" to the variable `c`. The equals sign is known as an **assignment operator** in an expression. It’s *assigning* a value to the variable, NOT evaluating whether two things are equal. We’ll get to the second part of that in the next section.

##### Step Three: Using and Changing a Variable

This is where you actually use and change the value of your variable.

```js
document.getElementById("myId").innerHTML = c;   
c = c + " This is my variable!";
```

**Data types.** Variables can be sorted into data types based on what type of information is being stored. Notice how they are all declared and initialized in the *exact* same way. This is a difference from a language like Java or C++, where the variable needs to know right away what kind of data is being stored. JavaScript is what’s called a *dynamically-typed language*, meaning that variables can be assigned data types on the fly; there's no need to tell the computer ahead of time what you're planning to store in them.

```js
var a = 30;  
var b = 15.723;  
var c = "Hello world!";  
var d = true;
```

In the examples above, variables `a` and `b` store numerical data types: **integers** and **floats**. Integers are round numbers, whereas floats are "floating point numbers" -- numbers with a decimal. 10 is an integer; 10.0 is a floating point number.

Variable `c` stores a string. Strings store text, or a "string" of characters. They are delineated with quotation marks. You can either use single or double quotes for this purpose (both will work), but it's best to keep it consistent throughout your script.

Strings can be added together just like numbers, in a process known as **concatenation**. Let's take a closer look at one of the examples from earlier in this chapter:

```js
var c = "Hello world!";
c = c + " This is my variable!";
```

Just like with adding numbers, the plus sign simply takes the values on both sides of it, and combines them together. Note that the second part of that expression, " This is my variable!", contains an extra space at the beginning. As mentioned before, the computer will only do *exactly* what you tell it to do; this means including all of the things you need in your string, like whitespace and punctuation, in the appropriate places. JavaScript cannot make judgments for you about where to include things like spaces and periods.

Variable `d` stores what is called a boolean variable. Boolean variables store true and false values. This will become more important, and we will learn more about how to use boolean variables, in the next section.

**Variable scope.** So far, we have only been looking at variables in a vacuum, and haven't applied them to a larger script. When we use variables as part of our JavaScript code, it's extremely important to keep track of where we are doing the declaring and initializing.

Variables can either be used *globally*, meaning they can be used across the entire script, or *locally*, meaning they are constrained to one function or area. Variables declared *OUTSIDE* of a function are global variables, and they will be accepted and readable throughout your script starting at the point where they are declared.

```js
var c = "Hello world!";

function addString() {
  c = c + " This is my variable!";
}
```

Variables declared *INSIDE* a function or other block of code are local variables, and are only readable within the block in which they are declared. If you try to use these variables elsewhere in the program, you will get an error.

```js
function addString() {
  var c = "Hello world!";
  c = c + " This is my variable!"
}
```

[Examples]

**The JavaScript console.** The console, as stated previously, is where you’ll see all your error messages if something doesn’t work properly. In addition, you can also use it to write messages to yourself to make sure your code is working the way that it should.

```js
console.log("this is the incorrect response");
console.log("The value of x is: " + x);
```

In Chrome you can find it under view > developer > JS console.
[Instructions for other browsers?]

### Conditionals in JavaScript

Now we know how to take information and store it so it can be used elsewhere. But how do we make the program do different things based on different information?

Going back to our example with the confirm box, now we know how to store the user's response in a variable, and we can now take that response and print the value out on screen.

```html
<p id='response'>This is where the user's choice will go.</p>
<button onclick='makeChoice()'>Click here</button>

<script>
function makeChoice() {
  var c = confirm("Choose an answer!");
  document.getElementById('response').innerHTML = "The user chose " + c;
}
</script>
```

But at the end of the day, our page isn't really doing anything with this value; all we're doing here is replacing the innerHTML of our paragraph tag with whatever the user pressed. Essentially, the display of the page is the same, regardless of whether the user chooses true or false.

But what if we want different things to happen based on which choice the user selects? How can we use our user's input to make decisions in our program about what to do when?

The answer is the **conditional**. Conditionals are the primary agents responsible for the logic of programming. They enable the code to make decisions about whether to do certain things based on whether certain conditions are met.

In other words, conditionals allow for much more complex interactivity in your scripts, and outcomes based on user action and choices, rather than the same thing happening every single time.

#### Conditional Statements and Logical Operators

Conditional statements use **logical operators** to look at values in the code and determine whether statements are true or false.

You can use the following logical operators to write conditional statements:  

`===` (checks for equality)  
`>` or `>=` (checks whether something is greater than another value)  
`<` or `<=` (checks whether something is less than another value)  
`&&` (evaluates whether multiple conditions are true simultaneously)  
`||` (evaluates whether one of multiple conditions are true)  
`!` (means "not" -- indicates that something is not true)

```js
if (c === 10)  
if (c !== 10)  
if (c <= 10)  
if (c > 500)  
if (c >= 10 && c < 65)  
if (c >= 100 || c <= 25)  
```

**A word about === and ==.** Sometimes you will see `==` instead of `===` in JavaScript.

The way `===` works is that it first checks to see if the two values being compared are of the same data type. If not, it evaluates the condition as not being met, even if the values could potentially be the same (i.e., integer 5 and string "5").

`==` will first try to convert the values so they are the same data type on both sides, and then see if they are equal (ie, "5" will end up being equal to 5).

For the purposes of this book, both will probably work, but when in doubt, use `===`.

#### If Statements

The **if statement** hands your code a conditional statement to evaluate. If that condition is met, the code executes some action or function. If not, the action or function is not executed.

```js
if (conditional statement) {  
	action;  
}

if (x === 0) {  
console.log("x is 0");  
}
```

[Example]

**If/Else If/Else.** You are also able to give your code more than one option in the if statement. You can give your code a second action to perform if the initial condition is not met, or you can give it a list of additional conditions to check for.

```js
if (conditional statement) {  
	action;  
} else {  
	second action;  
}  
```

```js
if (conditional statement) {  
	action;  
} else if (second conditional statement) {  
	second action;  
} else {  
	third action;  
}
```

[Example]

#### Boolean Variables

Boolean variables are variables that evaluate to either true or false. Think of using one like turning on a switch. You can turn it on (true) or off (false), and execute certain actions depending on what state it’s currently in.

```js
var myVariable = true;
```

[Example]

### Arrays and Loops in JavaScript

Now we know how to use variables and how to make decisions based on their values. But so far we’ve only been storing one variable at a time.

```js
var string1 = "Hello";  
var string2 = "Ni hao";  
var string3 = "Namaste";  
var string4 = "Hola";  
var string5 = "Bonjour";  
var string6 = "Hej";  
var string7 = "Ahoj";  
var string8 = "Xin chao";  
var string9 = "Jambo";  
var string10 = "Zdravstvuyte";
```

Lots of variables, especially ones that are similar -- this gets messy fast. How can we store similar information in an easier way?

**Arrays.** Arrays are lists of things in JavaScript. You can use an array to store a whole bunch of information under the same variable name, rather than defining individual variables for each one.

Elements in an array are accessed by index, or by the position in which they fall in the list (ie, first, second, third, etc.)

```js
var helloStrings = ["Hello", "Ni hao", "Namaste", "Hola", "Bonjour", "Hej", "Ahoj", "Xin chao", "Jambo", "Zdravstvuyte"];


helloStrings[0] = "Hello"
helloStrings[3] = "Hola"
helloStrings[7] = "Xin chao"
```

[Example]

You can use arrays to store all kings of different information, not just text or numbers.

[Rotating through cat photos example]

**`push()` and `splice()`.** Not only can you use arrays to store things, you can also add and subtract from them as well by using the functions `push()` and `splice()`.

`push()` adds whatever is in the parentheses to the end of the array.

`splice()` requires 2 arguments: the index to start at in the existing array, and the number of things to remove.

You can also use `splice()` to add things to a certain position in the array by making the second argument 0, and adding additional arguments of what to add.

[Example]

**Loops.** Loops give you a way to iterate through a number of objects in JavaScript. You can iterate through hundreds or thousands of things in one go. They are especially helpful when dealing with arrays.

There are two kinds of loops:

**While Loop.** A while loop executes an action for as long as a specified condition evaluates to being true. Once the condition evaluates to false, the loop is broken and the code moves on to the next action.

*IMPORTANT:* Give your code an exit condition (a surefire way to evaluate to false). If the condition always remains true, you get stuck in an infinite loop, and your browser could possibly crash.

```js
if (conditional statement) {
	action;
}

while (conditional statement) {
	action;
}
```

[Example]

**For Loop.** A for loop is basically the exact same thing as a while loop, just syntactically different. The loop is still checking for conditions and evaluating whether or not they are true, but it’s doing it with localized variables to the loop rather than variables readable across the entire script, and an exit condition is always built in.

```js
for (conditional statement) {
	action;
}

for (var i = 0; i < maximum; i++) {
	action;
}
```

[Example]

**Accessing Elements By Class and Tag.** Now that we know about arrays and loops, we can grab HTML elements from our document by more than just ID!

`document.getElementsByClassName("class")` -- grabs ALL HTML elements with the specified class name and returns them in an array.

`document.getElementsByTagName("tag")` -- grabs ALL HTML elements with the specified tag name and returns them in an array.

You can then iterate through these lists to change properties for multiple HTML elements at once!

[Example]

### More About Functions in JavaScript

We talked about functions briefly earlier in this chapter. Now, let’s look at what exactly they are in more detail.

```js
function myFunction () {
		// put the code you want here
}
```

A Review: A function is a block of code written to do a specific thing or fill a specific purpose. In other words, it’s code that is grouped together and runs at the same time.

A function only runs when it is explicitly called or invoked. If you don’t tell the program to execute the function, the function will never run.

Think of functions as the verbs of your JavaScript. They are the things that your objects do.

Functions can either run without arguments:

Or with them:

They can also run without return types:

Or with them:

**Callbacks.** Callbacks are functions that execute AFTER a certain other event or function has been executed.

We have already used callbacks without knowing it -- things like `"onclick"`, `"onmousemove"`, `"onkeyup"` etc. We can also easily write callbacks into many different functions to have things execute in a specific order.

[setInterval and setTimeout examples]

### Exercises

1. Events in JavaScript. Take the page you built with HTML and CSS and add three things that activate when the user interacts with the site. Include one of each:

2. Variables and conditionals mini exercise.

3. Arrays and Loops mini exercise.

## GETTING YOUR WORK ONLINE

So far, we have been running everything locally in the browser. But in order to get your pages on the Web, and to send the link to others so they can take a look, you'll need to use what is known as **File Transfer Protocol** in order to upload your website to a server, and associate it with an address, or **domain**, that people can use to access your work.
