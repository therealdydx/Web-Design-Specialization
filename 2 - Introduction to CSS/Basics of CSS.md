# Basics of CSS

### Browser Default Styling

- Same HTML file may look different when viewed on different browsers.
- Some tags are supported, some are not.

### Adding Style

- Adding style directly to the tags. (not recommended)
- The correct way is to use CSS (Cascading Style Sheets)



## CSS Rules and Tricks

```css
selector {
	property: value;
}

h1 {
    color: blue;
    background-color: blue;
}

/* This is how comments are done */
```

### Internal Style Sheet

```html
<head>
    <meta charset = "UTF-8">
    <title>Title here</title>
    
    <!-- Creating a rule here -->
    <style> 
        /* insert styles here */
    </style>
    
    <link rel = "stylesheet" href = "css/stylesheet.css">
</head>
```

### Rule Precedence

What is one selector is defined in two external files?

- The rules from the most recent stylesheet will take precedence (the last stylesheet)

What is one selector has more than one rule in the same file?

- Same concept as earlier, the file reads from top to bottom.
- To prevent this, you can use the feature !important

```css
h1 {
    color: blue;
    font-family: Arial !important;
}

h1 {
    font-family: Times;
}
```

### Styling Your Text

- Font (family, style, variant, size)
- Color and Background
- Alignment
- Line-Height

### Font-Family

- Font families are styles of text
- Examples: Helvetica, Courier, Comic Sans
- Not all font-families are supported by all of the operating systems, so you can provide alternatives
- Use sans-serif fonts when necessary

```css
h1 {
    font-family: Arial, Courier, Impact;
}
```

### Font-Style

- Normal
- Italic
- Oblique

### Font-Variant

- Normal
- Small-caps

```css
h1 {
    font-variant: small-caps;
}

<h1>Small caps variation</h1>
```

### Font-Size

- This is only the beginning of our discussion on sizes...
- Options
  - xx-small, x-small, small, smaller
  - medium
  - larger, x-large, xx-large, larger
  - Most people use pixels instead / percentage, this is much better

### Color and Background-Color

- The color attribute is the color of the foreground
- The background-color is the color of the background

```css
h1, span {
    color: #0000FF; /* Blue */
    background-color: #B3B3B3; /* Grey */
}
```

### Aligning Text

- Use text-align (left, right, center, justify - spreads out to use the entire width)

### Line Height

- Affects the space between the lines of the text
- Not the fonts of the texts

### Display Values

- inline: sits next to other elements
  - Takes up just enough width and height
- block: forces a line break between elements
  - default: take up all horizontal width and "just enough" height
  - Rules can set the height and width
- inline-block: same as inline, but also accept height and width

- none: removed from the page

### Complementary Properties

- Float
  - Reposition elements to the right or left
  - Elements are aware of one another and will not overlap
  - Values: Left, right
- Clear
  - Used to keep floating elements away
  - Values: left, right, both

### Element Overflow

- What happens when you set a height/width and the content does not fit any longer?
- Use overflow to determine access
  - Visible: Can cause text to show up "on top" of other text
  - Hidden: Hides anything that goes beyond the bounding box
  - Scroll: Gives horizontal and vertical scrollbars
  - Auto: Adds scrollbars as needed

### Other Display Values

- Table
- Grid
- Flexbox

### Display: Table

- You want to make a table without using the HTML table structure
- Use display: table along with display: table-cell for the elements



## Box Model

Before continuing:

### Height and Width

- The default width of inline elements is the content
- Elements that are not inline can take width and height properties

### Borders

- Any element can have a border around it
- Border property specifies style, width and color
- The border style MUST be specified

```css
div{
    border: solid 1px #CC00AA;
    border-style: dotted;
    width: medium;
    color: #0000FF;
}
```

- There are many forms of border-style, including dotted, dashed, solid, double, groove, ridge, inset, outset, hidden, etc
- For width, there is set in pixels, or thin, medium, or large

### Margin

- Additional space OUTSIDE your border - between you and neighbour
- Positive margin: element moves right / down
- Negative margin: element moves left / upwards

### Padding

- Additional space between the element and its border

- Positive Padding (border moves outward from element)

```css
div{
    width: 100px;
    height: 50px;
    padding: 10px;
    margin: 5px;
    border: 1px solid black;
}
```

### Box-Sizing

- Content-Box: Default Additive
- Border-Box: Width takes content, padding, and border into consideration

### Measurements

- Absolute measurements (px, mm, cm, pt)
- Fluid measurements (%, vw, vh - viewport width, viewport height)
- Fluid measurements (em is for font, 1 em is current size, .75 is 75% of current size)
- Fluid measurements (rem is for font, 1 rem is current size of root element)

## Styling Links and Lists

### Buttons

- Many designers try to make their links look like buttons
- Be semantic, if you want a button use the <button> element instead

### States

- a:link -> a normal, unvisited link
- a:visited -> has been visited
- a:hover -> activated by mouse
- a:focus -> activated with the keyboard
- a:active -> is being clicked

### Precedence

- a:hover -> MUST come after a:link
- a:visited and a:active MUST come after a:hover

### Styling Lists

- Number of properties beyond font, margin, etc
  - list-style-type
    - Ordered Lists (Lower-Roman, Upper-Roman, Decimal, Decimal-Leading Zero)
  - list-style-image
    - Use a custom image instead of traditional marker 
  - list-style-position
  - list-style



## Advanced Selectors

- What if you don't want to style all of the links, just some of the links?
- Descendant selectors (nav a)
  - Style all of the anchor links inside a nav tag
- Child selectors (nav > a)
  - More constraining. The anchor elements must be a child of the nav, no intermediate tags, e.g paragraph
- Adjacent Sibling (hl + ol)
  - Elements must be at same level and follow each other

### id Selectors

- "#id selector"
- Used to identify a single element in the DOM
- Was used extensively for <div id = "header"> , <div id = "footer">, etc.
- ids are now being increasingly less used in CSS

```css
<html>
	<img src = "logo.jpg" id = "mainLogo" alt = "logo" />
</html>

#mainLogo{
    border: 5px solid #0006CC;
    margin: 0 auto;
}
```

### Class Selectors

- Used to identify an element in the DOM that is part of a special class of items
- Can apply to a range of element, not just a particular element in the DOM
- Think of thumbnail images, all of the links that are in the navigation, your social media images, etc

```css
<html>
	<img src = "cat.jpg" class = "thumb" alt = "Joe"/>
	<img src = "dog.jpg" class = "thumb" alt = "Bacon"/>
	<img src = "bird.jpg" class = "thumb" alt = "Tweety"/>
</html>

.thumb{
    border: 1px solid #0006CC;
    width: 20%;
}
```

### Narrowing Scope

- You can use different ways to narrow the scope of action of CSS
- i.e. p.main -> paragraphs using main class
- header img.special -> images inside header that use 'special' class

### Expand Scope

- p, h1, #main, .special {rules to apply to all of them}
- What happens when there are multiple rules for the same selector? Use the one processed most recently, unless a rule has !important

- Universal selector (*) -> applies styling to every single element
- Pseudo-Classes
- Pseudo-Elements

### Attribute Selectors

- a [href^='http://']   -> match the beginning exactly ^
- img[src$ = '.png']   -> match the end exactly $
- a[href*='umich']   -> wildcard *

### Browser Prefixes

- -webkit-: Android, Chrome, iOS, Safari
- -moz-: Firefox
- -ms-: Internet Explorer
- -o-: Opera

### Pseudo Classes

- Elements that are dynamically populated or dependent on tree structure

```css
a:hover{ }
```

- Types of Pseudo-Classes include:
- Link -> :link, :visited
- User Action -> :hover, :active, :focus
- Forms (interfaces) -> :enabled, :checked, :disabled

### Pseudo Elements

- Textual -> :first-letter, :first-line
- Positional -> :before, :after
- Fragments -> ::selection

## Transitions

### Transition-Property

- What is it that you want to change? (size, color, position, etc)

### Transition-Duration

- How long should each transition last?

### Transition Timing

- Should it be a smooth transition? Or different?

### Transition Delay

- How long should the wait be before the transition begins?

### Setting Up

1. Define your element
2. Choose the elements for transition
3. Define the new values - combine this step with a pseudo-class

Step 1:

```css
div{
    color: #000000;
    background: #2db34a;
    line-height: 200px;
    text-align: center;
    width: 250px;
    height: 200px;
    border-radius: 6px;
}
```

Step 2:

```css
div{
    color: #000000;
    background: #2db34a;
    line-height: 200px;
    text-align: center;
    width: 250px;
    height: 200px;
    border-radius: 6px;
    transition-property: color, width, background, border-radius;
    transition-duration: 0.5s;
    transition-timing-function: linear;
    transition-delay: 0.5s;
}
```

Step 3:

```css
div{
    color: #000000;
    background: #2db34a;
    line-height: 200px;
    text-align: center;
    width: 250px;
    height: 200px;
    border-radius: 6px;
    transition-property: color, width, background, border-radius;
    transition-duration: 0.5s;
    transition-timing-function: linear;
    transition-delay: 0.5s;
}

div:hover{
    color: #ffffff;
    width: 350px;
    background: #2D31B3;
    border-radius: 50%;
}

div:active{
    color: #000000;
    width: 150px;
    background: #00DDB3;
}
```

Using Shorthand Form:

```css
transition: background .2s linear, border-radius 1s ease-in 1s;
```

### Normal Transitions

```css
div{
    transition: 2s ease;
}

div:focus{
    background-color: #FFFF00;
}

.animate{
    /* use transition properties */
}

.animate:hover{
    /* more transition properties */
}
```

## Transform

### 2D Transform Options

- Translate
- Rotate
- Scale 
- Skew

```css
transform:translate(x,y){
    /* move x pixels to the left/right and y pixel up/down */
}

transform:rotate(deg){
    /* rotate the element a certain number of degrees */
}

transform:scale(width, height){
    /* change the width and height of the element */
}

transform:skew(){
    /* rotate the element a certain amount of degrees along x and y */
}
```

### 3D Transform Options

- You can rotate along the x, y, or z dimension along a given degree

- transform: rotateY(deg)
- transform: rotateX(deg)
- transform: rotateZ(deg)
- transform: rotate3d(x, y, z)

## Positioning Elements

### Ways to Position Elements

The four position properties are:

- Static
- Relative
- Absolute
- Fixed

- Position are modified by the properties: top, right, bottom, left

### Static

- Default value for elements
- Place in the next available position
- Not affected by the top, bottom, left and right properties

### Relative

- Position "relative to itself"
- Take the static position, but add offsets
- The new positioning does NOT affect any other element. It is possible to move an element and leave a big hole where it would have been
- Relatively positioned elements are often used as container blocks for other elements

### Absolute

- Element is removed from the document flow and positioned relative to its nearest ancestor
- Other elements behave as if element does not exist
- Can end up on top of another element

### Fixed

- Relative to the browser window
- Will not move, even if the window is scrolled
- Think of popup boxes that won't go away, or a navbar that is always visible at the top

### Z-index

- Multiple elements may be placed in the same place
- Use Z-index to dictate stacking order

## Navigation Menus

- Navigation is a critical aspect of accessibility
- Sighted users have tried and true visual cues to orient them on a page
  - Banner
  - Search Box
  - Main Navigation Box
  - Content Well

