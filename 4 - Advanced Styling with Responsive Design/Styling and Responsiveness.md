# Advanced Styling with Responsive Design

### Responsive Web Design

- Designing your sites with multiple screen sizes / resolutions in mind
- Sites should work under any platform, any browser size, or orientation
- A small screen should NOT mean less content
- Never assume the user won't need access to functionality

### Responsive Options

- Responsive Web Design (RWD) - Fluid measurements, flexible grids, and varying CSS rules
- Adaptive Design (dynamic serving) - Returns one of multiple versions of a page based on that type of design
- Separate Mobile Site (.m) - A separate page URL for the mobile site

### Fluid Measurements

- Your content should fit the size constraints of the viewport

Absolute Measurements:

- px - One device pixel dot of the screen and is 1/96 of an inch
- mm, cm, in - obvious

- pt - one point is 1/72 of an inch

Relative Measurements:

- % - percentage values
- em - font size of the element
- rem - font size of the root element
- vw - 1/100 of the width of the browser
- vh - 1/100 of the height of the browser

## Media Queries

- CSS3 increased the capabilities. Style can depend on many features
  - Width, height, orientation, resolution...
- Boolean operators can also be applied to increase power

### Query Components

1. A media type

- Screen, print, all, ...

2. The actual query of a media feature and "trigger" size

- Width, height, orientation, resolution, ...

```css
screen and (max-device-width: 480px) and (resolution: 163dpi){...}
```

Implementing Media Queries:

```html
@import url(smallstyle.css) screen and (min-width:600px)

<!-- Or -->
<style>
    @media screen and (min-width:500px){
    	p.desc{
            display: block;
        	font-size: 150%;
        }
    }
    
    @media screen and (min-width:900px){
        p.desc{
            display: block;
            font-size: 150%;
        }
    }
    
</style>

<link rel = "stylesheet" media = "screen and (min-width: 400px)"> <!-- etc -->
```

Sample Media Query:

```css
body{
   background-color: red;
}

@media screen and (min-width:600px){   
   body{      
      background-color: blue;   
   }
}

@media screen and (min-width:900px){
   body{
      background-color: green;
   }
}
```

### Media Query Steps:

1. Grab Information
2. Fluid Layouts (Use fluid numbers instead of absolute numbers)
3. Media Queries

- Fluid layout is triggered by certain sizes
- Design for small screen and work bigger

## Wireframing

- Providing a visual representation of your website (check out wireframeshowcase.com)

- What is the best layout for this material?
- What is the best layout for different platforms?
- The mobile view is the most important step of web design first

## Breakpoints

- Sizes that define a change in the layout of your website (i.e. 500, 1000, 1500px)
- Provide best possible experience for users
- Breakpoints should correspond to:
  - Devices (But caveat that devices always change)
  - Based on content (figure out when content should change)
  - Remember that Mobile First design is great

## Frameworks

- The term 'web framework' can mean many things, it depends upon who you ask
- Agreement, a framework should make your job easier by providing code and structure

Frontend Developers:

- CSS, JavaScript, jQuery

Backend Developers:

- Routing, Resources, Security

### Bootstrap

- Framework for creating web sites
- Focuses on responsive, mobile-first approach
- Consists of
  - CSS and HTML templates
  - JavaScript extensions

- Emphasis on interfaces

### Benefits of Bootstrap

- Spaces in between, have a 12 grid system
- Built-in responsive design
- It has common jQuery functionalities, like Accordion, Drop-down Menus, and Carousel
- Makes your site feel legitimate with Bootstrap

### Why you should use it?

- Fast Development
- Platform Independent
- Customizable

### Bootstrap Breakpoints

- Bootstrap hardcodes the breakpoints for different viewpoints

- The intention is to use the mobile-first paradigm
- Sizes -> xs -> Minimum width of 480px (Small Phones)

- Sizes -> sm -> Minimum width of 768px (Tablets, Desktop browsers in a smaller size)
- Sizes -> md -> Minimum width of 992px (Beyond size of tablets)
- Sizes -> lg -> At least 1200px, going to be picked up by this instead

### Access Bootstrap

- Download copy -> http://getbootstrap.com
- Use absolute reference -> CDN

### Bootstrap Grid System

- The bootstrap layout is based on a 12 column grid

- 3 Columns is 25%, 6 Columns is 50%, 9 Columns is 75%, etc. 

Grid Classes:

- A container
- A row
- One or more column classes

```html
<div class = "container">
    <div class = "row">
        <div class = "col-xx-yy">
        </div>
    </div>
</div>
```

### Setting Width with col-xx-yy

- xx component is the viewport size (xs, sm, md, lg) (480, 768, 992, 1200)
- yy component is the number of columns you want to take up

- These are often combined, think of it like this

```html
<img src = "pic.jpg" class = "col-xs-12 col-sm-6 col-md-3 col-lg-2">
```

Or we can do it like this:

```html
<div class = "col-xs-12 col-md-3">Yellow Part</div>

<div class = "col-xs-12 col-md-8">Orange Part</div>
```

### Bootstrap Navigation

Example of a bootstrap navigation:

```html
<ul class = "nav nav-tabs">
    <li role = "presentation" class = "active"><a href = "#">Home</a></li>
    <li role = "presentation"><a href = "#">Profile</a></li>
    <li role = "presentation"><a href = "#">Messages</a></li>
</ul>
```

Nav Pills:

```html
<ul class = "nav nav-pills nav-justified" role = "navigation">
    <li role = "presentation" class = "active"><a href = "#">Home</a></li>
    <li role = "presentation"><a href = "#">Profile</a></li>
    <li role = "presentation"><a href = "#">Messages</a></li>
</ul>
```

### Responsive Images

- Write your own code
- Or use Bootstrap

```html
<div>
    <img src = "link" class = "img-responsive img-rounded">
</div>
```

- If you don't declare a rule, bootstrap defaults are 12 columns at the xs sizing

```html
<html>
    <div id = "container">
        <div id = "row">
            <img src = "link" class = "col-sm-6 col-md-4 col-lg-2 img-thumbnail">
        </div>
    </div>
</html>
```

### Bootstrap Tables

Classes:

- .table: some padding and horizontal dividers
- .table-striped: zebra stripes where "odd" rows have light color
- .table-bordered: add borders to table and cells
- .table-hover: adds hover state styling

Responsive Tables:

- Allows for scrolling tables
- Above 768px there is just default view

### Templates

Where to find templates:

- bootstrapzero.com
- startboostrap.com etc

Steps:

- First, decide on a template that best supports your content
- Download the code
- Modify the HTML
- Add or remove components

## Bootstrap 4

- Using more fluid elements or fluid measurements
- Can use rem and em units where before it didn't use them