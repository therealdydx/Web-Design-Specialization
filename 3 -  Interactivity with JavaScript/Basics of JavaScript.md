# Basics of JavaScript

### Variables

- Store data and refer back to it later

### Decision Points

- Use control statements to decide which code to run under different circumstances

### Looping

- Avoid writing the same code over and over again

- Determine at runtime how many times you want to run some code

### Functions

- Reuse code multiple times, but only write it once

### Manipulating the DOM

- JavaScript can find, add, and delete elements from the DOM
- Can also react to mouse clicks, page reloads, and other actions

### The DOM and JavaScript

- Page content is represented by the DOM
- Scripting languages (JavaScript) use the DOM to interact with the document
- Accessing the DOM is done with an API - Application Programming Interface
  - No matter which browser, no matter which scripting language, the API is the same

### DOM Objects

- Document - The root of the page
  - document.height, document.links, document.bgColor, ...

- Element - A node in the tree
  - Returned by a member of the API

- nodeList - an array of elements
  - document.getElementByTagName('p') would return a set of nodes

- Attribute
  - A node in the DOM, though rarely used that way. Another way to manipulate / change the document

### Specific APIs

- document.getElementById(id)

- document.getElementsByClassName(class)
- element.innerHTML
- element.style
- element.setAttribute(attribute, value)
- element.removeAttribute(attribute) etc

### Output

- JavaScript doesn't have a built-in print function
- Data is displayed via
  - An alert box using window.alert()
  - A prompt using window.prompt()
  - HTML output using document.write()
  - HTML element using innerHTML()
  - The browser console using console.log()

Some forms of commands include:

- alert("My Message Here") - Pop up window that displays information
- prompt("Enter your name: ") - Very similar to alert, but wants input

Other forms of commands include:

- What if we want something permanent instead?
- document.write() writes directly to the page

```javascript
document.write("Time to learn JavaScript: ");
```

- Not recommended because it can be misused

- innerHTML() may work better
- To change the contents of the DOM, use innerHTML combined with the element you want to change, such as the example below:

```javascript
element.innerHTML = "Time to learn JavaScript ";
```

- The element will come from the API

- We can also write to the browser console using console.log

```javascript
console.log("Leave a secret message ");
```

- See what's going on during the execution of your program, in your console

## Variables, Data Types and Expressions

### Storing Data

- Data is stored in variables

- To use a variable, you have to declare it `var name;`

### Variables

- Are case-sensitive (name, Name are different variables)
- Cannot start with a digit
- Using a variable:

```javascript
var name = prompt("What is your name?");
document.write(name);
var date = Date();
document.write(date);
var location = window.location;
document.write(location);
```

- Variables are a key component of creating interactive programs

### Data Types

- Number - Numerical Values
  - With or without decimals
- String - Collection of characters
  - Letters, numbers, punctuation etc
- Boolean - Either true or false
- Object - A node in the DOM is an object
  - `var topic = document.getElementById('myID')`
- Arrays - Return more than 1 value
  - `var links = document.getElementsbyTagName('a')`

### Operators and Expressions

- Statements often have expressions
- Expressions produce values

### More Uncommon Operators

Logical Operators:

- && - both sides must be true
- || - at least one side must be true

## Functions

- Functions are bits of codes that you can reuse
- Functions have a special syntax

```javascript
function functionName(parameters) {
	code you want to run
}

function welcomeMsg(){
    alert("Welcome to JavaScript!")
}

// A function that returns a value:

function welcomeMsg(msg){
    alert(msg);
    var name = prompt("What is your name?");
    return name;
}

var firstName = welcomeMsg("Hi");
```

## Code Placement

Storing your JavaScript in an external file:

```html
<head>
    <script src = "js/two-external.js"></script>
</head>

<body>
    <h1>
        Functions
    </h1>
    
    <script>
    	message();
    </script>
</body>
```

Linking to all your files in the head:

```html
<link rel = 'stylesheet' href = 'css/style.css'>

<script "js/javaFunctions.js"></script>

<img src = "images/myPicture.jpg"/>
```

## Events

- onclick
  - User clicks on an HTML element
- onmouseover
  - User moves the mouse over an HTML element

- onresize
  - Browser window is resized

- onload
  - Browser finishes loading the page

- Any element can react to an event
- You need to add the event to the tag and include what you want to happen

```html
<div onclick = "message('Hi')"> Clicking on this Div will invoke a JavaScript function</div>
```

### Examples

```html
<h1>Modify the DOM</h1>
		<button onclick="document.getElementById('stuff').innerHTML = 'Clicked First Button';">First</button>

		<button onclick="document.getElementById('stuff').innerHTML = 'Clicked Another Button';">Third</button>
	<p>This code shouldn't change.</p>
	<p id="stuff">This will change.</p>
	<p>This shouldn't change either.</p>
```

## "This" Keyword

- "this" is a keyword that allows an element to reference itself
  - Every object in the DOM has an automatically generated "this"
- Allows you to access an element's info
  - Without "this" it would be difficult for the functions to know what data to use

- "this" is also used outside functions

```html
<script>
	function displayId(element){
        console.log(element.id);
    }
</script>

<img src = "random jpg" alt = "Hi" id = "Yo" onclick = "displayId(this)">

<div onclick = "displayID(this)" id = "Me">Another Div</div>
```

## Forms

- One place where you often see JavaScript
- Forms add a new layer to the Request-Response Cycle

### Web Development

Frontend Side:

- What you are developing...What happens on the browser / client side
- HTML, CSS, JavaScript

Backend Side:

- What the server is handling
- Python, Ruby, PHP, Perl, Java

### Forms:

```html
<form>
    <label for 'name'>Name</label>
    <input type = 'text' id = 'name' name = 'name'><br/>
    
    <label>Email: <input type = 'email' name = 'email'></label><br/>
    
    <label for = 'birth'>Birth</label>
    <input type = 'date' id = 'birth' value = 'birth'><br/>
    
    <input type = 'submit' value = 'Click Here'>
</form>
```

### Input Types

- textfield
- email
- password
- radiobutton
- checkbox
- submit
- number
- range
- color
- date
- url

### Attributes

Name

- Almost all input types should have a name attribute
- The name attribute is assigned whatever value is input

id

- Used for labels
- Used for by JavaScript

value

- button: text inside the button
- textfield: provides a default value

placeholder

- Provides a suggestion
- Not an 'official' value

### Simple Validation

- Validate the type of input
  - You want a number instead of a string...
- Validate the format of input
  - Is it a valid email address or URL?
  - Does the phone number have spaces?

- Value of the input
  - Should it be the required input?
  - Do the email values match?

### How To Validate?

- Use new HTML5 input types
  - Email, number, url
  - Input types require that the browser validate the format of the input
  - It will half the submission for non-valid inputs
  - The first non-valid input is put into focus, and if not supported, the input type is just text
- Use HTML5 attributes
  - Required, placeholder, min, max (limiting numbers)
- Use JavaScript functions
  - Write custom code to validate
  - Use API events to validate as soon as the event is tabbed (onchange)

### Comparing Two Inputs with JavaScript

```javascript
function check(){
    var email1 = document.getElementById('email_addr'):
    var email2 = document.getElementById('email_repeat'):
    if (email1.value != email2.value){
        alert("The two emails must match!");
        return false;
    }
}
```

### Checkboxes

- Typically shaped as squares
- Allows the user to select options with a single click
- Options share a single name

```html
<form>
    Favourite Foods<br/>
    <label><input type = 'checkbox' name = 'food' value = 'pizza'>Pizza</label>
    
    <label><input type = 'checkbox' name = 'food' value = 'chips'>Chips</label>
    
    <label><input type = 'checkbox' name = 'food' value = 'kale'>Kale</label>
    
    <input type = 'submit'>
</form>
```

Opening up a new input using the checkbox can be done through JS:

```javascript
function nicknameFunction(){
    if (document.getElementById('yesNick').checked){
        document.getElementById('nick').style.display = "inline";
        document.getElementById('nickname').setAttribute('required', true);
    }
    else{
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nick').style.display = 'none';
    }
}
```



### Radiobuttons

- Typically shaped as circles
- Radio buttons also have an easy click it interfact
- But you can only click one specific option

```html
<form>
    Gender<br/>
    <label><input type = 'radio' name = 'gender' value = 'male'>Male</label>
    
    <label><input type = 'radio' name = 'gender' value = 'female'>Female</label>
    
    <input type = 'submit'>
</form>
```

