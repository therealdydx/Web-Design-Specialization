# Basics of HTML

## Page Requests

Page requests are built out of the client-server relationship.

Servers: Machines that hold resources

Clients: Machines for personal use, i.e. laptops, phones, etc

We usually use networks as something called a LAN or a WAN:

- LAN: Local Area Network
- WAN: Wide Area Network

## URLs

Every URL has 3 parts:

- The Protocol - How you want to connect
- The Domain - The Server
- The Document

URLs are basically IP addresses that have been mapped to a name.

Protocols include HTTPS, HTTP and FTP:

- HTTP: Hypertext Transfer Protocol > Giving back and forth HTML Code
- HTTPS: Secure Hypertext Transfer Protocol > A secure HTTP
- FTP: File Transfer Protocol > Transferring Documents around



## Domain Names / IP Addresses

- Identify the entity you want to connect to.

- IPv6 is the communication protocol that identifies computers on networks.
- Every computer has a unique IP address, where x can have 16 different values.



## Document Object Model

DOM is a way to stick by a standard when coding. 

New features should be based on HTML, CSS, the DOM and JavaScript.

The tree structure of the DOM comprises of the:

- Head
- Body

### Doctype:

- Version of HTML that you're going to be using

### Head:

Additional information used by the browser.

- Meta Data - Language, Title

- Supporting Files - JavaScript, Styling, Add-Ons

- Meta Data is not displayed other than the title


### Body:

This is what people see, the bulk of the page.

- Most of the content is displayed by the browser



## HTML Tags and Syntax

### Display

- Block (take width and height)

It is like newline, it takes up the entire width.

- Inline (cannot take width and height)

Only uses as much as the element needs.

### Common Tags:

Headings:

- h1, h2, h3, etc.

Paragraphs:

```HTML5
<p>
    Should only contain inline elements
</p>

```

Divisions:

```HTML
<div>
    Generic section that is larger than a paragraph
</div>
```

Lists:

```HTML
Ordered Lists:
<ol>
    <li>Item One</li>
    <li>Item Two</li>
</ol>


Unordered Lists:
<ul>
    <li>Item One</li>
    <li>Item Two</li>
</ul>
```

### Attributes

- Provide additional information about an element
- Always specified in the start tag
- i.e. img src

### Special Entities

- &nbsp
- &cent
- &amp, etc etc...

### Semantic Tags

1. Header Tag

- A group of introductory or navigational aids: title, navigation links, etc. 

```html
<header>
	<h1>This is the Title</h1>
    <h2>The author is Colleen</h2>
</header>
```

- Not to be confused with the head tag.

2. Nav Tag

- A section of the page that links to other pages or to parts within the page.
- Often found in the header tag

```html
<nav>
	<ul>
        <li><a href = "#overview">Overview</a></li>
        <li><a href = "#history">History</a></li>
    </ul>
</nav>
```

3. Figure Tag

- More semantics than img tag. It can include:
- Captions
- Multiple multi-media resources

```html
<figure>
	<img src = "sunset.gif" alt = "Ashtabula sunset">
    <figcaption>A sunset over Lake Erie. Taken in Ashtabula Ohio</figcaption>
</figure>
```

4. Structural Elements
5. Form Elements
6. Input Types
7. Graphics Elements
8. Media Elements

### Template Page

- Creating an index.html page

```html
<!DOCTYPE html>
<head>
    <meta charset = "UTF-8">
    <title>My Template Page</title>
</head>

<body>
    <main>
        <p>This is my main code</p>
    </main>
    
    <footer>
		<p>Think of a more interesting footer</p>  
    </footer>
    
</body>
    
</html>
```

### Images

- Put style into img tab, it is an exception

```html
<figure>
	<img src = "imgs/Ashtabula.jpg"
         width = "500px" height = "100px" alt = "My house">
    <figcaption>Set image size</figcaption>
</figure>
```

- Using percentages is also fine

```html
<figure>
	<img src = "imgs/Ashtabula.jpg"
         width = "50%" alt = "My house">
    <figcaption>Relative image size</figcaption>
</figure>
```

- Don't try to hardcode images into the website. 
- Also, for images as logo in the tab, this must go in the head section. (Favicon)
- Must include alt tabs for screen readers, or when the website is unable to load the images, or for blind people. 

### Font Awesome Icons

```html
<link rel = 'stylesheet' href = 'https://use.fontawesome.com' etc>
```

- Connecting CDN (Content Delivery Network) to the website.
- You can refer to classes in the CDN. 

You can use these for social media icons.

```html
<a href = "www.twitter.com" aria-label = "Twitter"><i class = "fab fa-twitter fa-5x"></i></a>
<a href = "www.linkedin.com" aria-label = "Pinterest"><i class = "fab fa-linkedin fa-5x"></i></a>
```

### Anchor Links

- The  <a> tag stands for anchor link
- Needs a hyper-reference and content
- href: reference to location of new content

### Types of Links

1. Absolute

```html
<a href = "http://www.intro-webdesign.com/">Web Design</a>"
```

2. Relative

```html
<a href = "page2.html">Second Page</a>"
```

3. Internal

```html
<a href = "#history">History Section</a>
```

4. Graphical

```html
<a href = "http://www.redcross.org"><img src = "imgs/redcross-logo.png" alt = "Red Cross logo"></a>
```

- Link to another page separately, use Absolute.
- Link to your own page, another one of your own page, use Relative.
- Don't link to folders that are specific to your computer.

### Targets

- Anchors can take a target attribute.
- _self -> Default Action
- _blank -> Open in new tab or window
- _top and _parent

### Tables

```html
<table>
    This is the container tag
</table>

<tr> These are the rows </tr>

<td> These are the columns </td>
```

- Think of these as cells instead. 

- This is a simple table:

```html
<table>
    <tr> <td>One</td> <td>Two</td> <td>Three</td> </tr>
</table>
```

### Block Tags

- Container Tags

```html
Container Tag
<article></article>
<aside></aside>
<section></section>
<main></main>

Horizontal Tag
<hr>

Address
<address></address>

Not Recommended
<blockquote>
    Has cite attribute
</blockquote>

Used to summarize details into a drop down
<details>
	included with <summary></summary>
</details>
```

- Inline Tags

```html
<span></span>

<cite>Easier to search code</cite>

<abbr>Defining your abbreviation</abbr>

<time>Specifying your time</time>

<code>Identifying code fragments</code>

<sub>Identifying subscripts and superscripts</sub>
```

- Other useful tags

```html
Button Button
<button></button>

Meter Bar
<meter></meter>

Progress Bar
<progress></progress>
```



## Multimedia Elements

- Video tag uses a src attribute or embedded source tag
- Common attributes include:
  	- Height, width
  	- Autoplay
  	- Loop
  	- Controls

- Audio tags also use a src attribute to link to audio file, typically a .mp3 or .wav file
- Common attributes include:
  	- Autoplay, Controls, Loop -> Determine when people want to play or not
  	- Buffered
  	- Muted
  	- Volume

Setting Clips

- Set both the video and audio elements to play clips by adding to the src attribute
  - .ext#t = 5, 25
  - .ext#t = ,39