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