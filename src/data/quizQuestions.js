export const quizQuestions = [
  // CSS (20 questions)
  {
    id: 101,
    category: 'CSS',
    question: 'What does CSS stand for?',
    options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
    answer: 2,
    explanation: 'CSS stands for Cascading Style Sheets, used for describing the presentation of a document.'
  },
  {
    id: 102,
    category: 'CSS',
    question: 'Which HTML tag is used to define an internal style sheet?',
    options: ['<script>', '<style>', '<css>', '<link>'],
    answer: 1,
    explanation: 'The <style> tag is used to define internal CSS within the <head> section.'
  },
  {
    id: 103,
    category: 'CSS',
    question: 'Which HTML attribute is used to define inline styles?',
    options: ['font', 'class', 'styles', 'style'],
    answer: 3,
    explanation: 'The style attribute is used to apply inline CSS styles to an HTML element.'
  },
  {
    id: 104,
    category: 'CSS',
    question: 'Which is the correct CSS syntax?',
    options: ['body {color: black;}', '{body;color:black;}', '{body:color=black;}', 'body:color=black;'],
    answer: 0,
    explanation: 'CSS syntax consists of a selector (body) followed by a declaration block ({color: black;}).'
  },
  {
    id: 105,
    category: 'CSS',
    question: 'How do you insert a comment in a CSS file?',
    options: ['// this is a comment', '/* this is a comment */', '// this is a comment //', '\' this is a comment'],
    answer: 1,
    explanation: 'Comments in CSS are written inside /* and */.'
  },
  {
    id: 106,
    category: 'CSS',
    question: 'Which property is used to change the background color?',
    options: ['bgcolor', 'color', 'background-color', 'bg-color'],
    answer: 2,
    explanation: 'The background-color property sets the background color of an element.'
  },
  {
    id: 107,
    category: 'CSS',
    question: 'How do you add a background color for all <h1> elements?',
    options: ['h1.all {background-color:#FFFFFF;}', 'h1 {background-color:#FFFFFF;}', 'all.h1 {background-color:#FFFFFF;}', 'h1 {bgcolor:#FFFFFF;}'],
    answer: 1,
    explanation: 'You select the h1 tag directly and apply the background-color property.'
  },
  {
    id: 108,
    category: 'CSS',
    question: 'Which CSS property is used to change the text color of an element?',
    options: ['fgcolor', 'text-color', 'color', 'font-color'],
    answer: 2,
    explanation: 'The color property changes the text color of an element.'
  },
  {
    id: 109,
    category: 'CSS',
    question: 'Which CSS property controls the text size?',
    options: ['text-size', 'font-size', 'text-style', 'font-style'],
    answer: 1,
    explanation: 'The font-size property is used to set the size of the text.'
  },
  {
    id: 110,
    category: 'CSS',
    question: 'What is the correct CSS syntax for making all the <p> elements bold?',
    options: ['p {text-size:bold;}', 'p {font-weight:bold;}', '<p style="font-size:bold;">', 'p {font:bold;}'],
    answer: 1,
    explanation: 'The font-weight property is used to specify the weight (boldness) of the font.'
  },
  {
    id: 111,
    category: 'CSS',
    question: 'How do you display hyperlinks without an underline?',
    options: ['a {decoration:no-underline;}', 'a {text-decoration:none;}', 'a {underline:none;}', 'a {text-decoration:no-underline;}'],
    answer: 1,
    explanation: 'The text-decoration property set to none removes the underline from links.'
  },
  {
    id: 112,
    category: 'CSS',
    question: 'How do you make each word in a text start with a capital letter?',
    options: ['text-transform:capitalize', 'text-style:capitalize', 'transform:capitalize', 'text-transform:uppercase'],
    answer: 0,
    explanation: 'text-transform: capitalize; converts the first character of each word to uppercase.'
  },
  {
    id: 113,
    category: 'CSS',
    question: 'Which property is used to change the font of an element?',
    options: ['font-weight', 'font-family', 'font-style', 'font-size'],
    answer: 1,
    explanation: 'The font-family property specifies the font for an element.'
  },
  {
    id: 114,
    category: 'CSS',
    question: 'How do you make the text bold?',
    options: ['font-weight:bold;', 'style:bold;', 'font:bold;', 'text-align:bold;'],
    answer: 0,
    explanation: 'The font-weight property set to bold makes the text bold.'
  },
  {
    id: 115,
    category: 'CSS',
    question: 'Which property is used to change the left margin of an element?',
    options: ['margin-left', 'padding-left', 'indent', 'margin'],
    answer: 0,
    explanation: 'The margin-left property specifies the left margin of an element.'
  },
  {
    id: 116,
    category: 'CSS',
    question: 'When using the padding property; are you allowed to use negative values?',
    options: ['Yes', 'No', 'Only on block elements', 'Only on inline elements'],
    answer: 1,
    explanation: 'Negative values are not allowed for the padding property, but they are allowed for margin.'
  },
  {
    id: 117,
    category: 'CSS',
    question: 'How do you select an element with id "demo"?',
    options: ['.demo', '#demo', 'demo', '*demo'],
    answer: 1,
    explanation: 'The hash symbol (#) is used to select an element by its ID.'
  },
  {
    id: 118,
    category: 'CSS',
    question: 'How do you select elements with class name "test"?',
    options: ['#test', '*test', 'test', '.test'],
    answer: 3,
    explanation: 'The period (.) is used to select elements by their class name.'
  },
  {
    id: 119,
    category: 'CSS',
    question: 'How do you select all p elements inside a div element?',
    options: ['div p', 'div + p', 'div.p', 'div > p'],
    answer: 0,
    explanation: 'A space between selectors (descendant selector) matches all elements that are descendants of a specified element.'
  },
  {
    id: 120,
    category: 'CSS',
    question: 'What is the default value of the position property?',
    options: ['relative', 'fixed', 'absolute', 'static'],
    answer: 3,
    explanation: 'Elements render in order, as they appear in the document flow. The default position is static.'
  },

  // HTML (20 questions)
  {
    id: 1,
    category: 'HTML',
    question: 'What does HTML stand for?',
    options: ['Hyper Text Preprocessor', 'Hyper Text Markup Language', 'Hyper Text Multiple Language', 'Hyper Tool Multi Language'],
    answer: 1,
    explanation: 'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages.'
  },
  {
    id: 2,
    category: 'HTML',
    question: 'Which tag is used for the largest heading?',
    options: ['<head>', '<h6>', '<h1>', '<heading>'],
    answer: 2,
    explanation: 'The <h1> tag defines the most important heading in an HTML document, which is rendered as the largest.'
  },
  {
    id: 3,
    category: 'HTML',
    question: 'Which attribute specifies a unique identifier for an element?',
    options: ['class', 'id', 'name', 'key'],
    answer: 1,
    explanation: 'The "id" attribute specifies a unique ID for an HTML element. It cannot be shared among multiple elements on the same page.'
  },
  {
    id: 4,
    category: 'HTML',
    question: 'What is the correct HTML element for inserting a line break?',
    options: ['<br>', '<break>', '<lb>', '<newline>'],
    answer: 0,
    explanation: 'The <br> tag inserts a single line break and does not require a closing tag.'
  },
  {
    id: 5,
    category: 'HTML',
    question: 'How can you make a numbered list?',
    options: ['<ul>', '<ol>', '<dl>', '<list>'],
    answer: 1,
    explanation: 'The <ol> tag is used to create an ordered (numbered) list, while <ul> creates an unordered (bulleted) list.'
  },
  {
    id: 6,
    category: 'HTML',
    question: 'Which input type defines a slider control?',
    options: ['slider', 'range', 'controls', 'search'],
    answer: 1,
    explanation: 'The <input type="range"> defines a control for entering a number whose exact value is not critical (like a slider).'
  },
  {
    id: 7,
    category: 'HTML',
    question: 'Choose the correct HTML element to define important text.',
    options: ['<strong>', '<b>', '<important>', '<i>'],
    answer: 0,
    explanation: 'The <strong> tag is used to define text with strong importance. The content inside is typically displayed in bold.'
  },
  {
    id: 8,
    category: 'HTML',
    question: 'Which character is used to indicate an end tag?',
    options: ['^', '*', '/', '<'],
    answer: 2,
    explanation: 'The forward slash "/" is used to indicate an end tag in HTML (e.g., </div>).'
  },
  {
    id: 9,
    category: 'HTML',
    question: 'How can you open a link in a new tab/browser window?',
    options: ['<a href="url" target="new">', '<a href="url" target="_blank">', '<a href="url" new>', '<a href="url" window="new">'],
    answer: 1,
    explanation: 'Setting the target attribute to "_blank" tells the browser to open the linked document in a new window or tab.'
  },
  {
    id: 10,
    category: 'HTML',
    question: 'Which HTML element defines navigation links?',
    options: ['<nav>', '<navigation>', '<navigate>', '<links>'],
    answer: 0,
    explanation: 'The <nav> element represents a section of a page whose purpose is to provide navigation links.'
  },
  {
    id: 11,
    category: 'HTML',
    question: 'Which HTML element is used to specify a header for a document or section?',
    options: ['<top>', '<header>', '<head>', '<section>'],
    answer: 1,
    explanation: 'The <header> element represents introductory content, typically a group of introductory or navigational aids.'
  },
  {
    id: 12,
    category: 'HTML',
    question: 'What is the correct HTML for creating a hyperlink?',
    options: ['<a url="http://codepath.org">CodePath</a>', '<a name="http://codepath.org">CodePath</a>', '<a href="http://codepath.org">CodePath</a>', '<a>http://codepath.org</a>'],
    answer: 2,
    explanation: 'The <a> tag defines a hyperlink, and the "href" attribute specifies the URL of the page the link goes to.'
  },
  {
    id: 13,
    category: 'HTML',
    question: 'Which attribute is used to provide an advisory text about an element or its content?',
    options: ['alt', 'title', 'tooltip', 'src'],
    answer: 1,
    explanation: 'The title attribute specifies extra information about an element, typically displayed as a tooltip when hovered.'
  },
  {
    id: 14,
    category: 'HTML',
    question: 'What does the <canvas> element do?',
    options: ['Display database records', 'Draw graphics on the fly', 'Create draggable elements', 'Play videos'],
    answer: 1,
    explanation: 'The <canvas> element is used to draw graphics, on the fly, via scripting (usually JavaScript).'
  },
  {
    id: 15,
    category: 'HTML',
    question: 'In HTML, which attribute is used to specify that an input field must be filled out?',
    options: ['required', 'validate', 'placeholder', 'formvalidate'],
    answer: 0,
    explanation: 'The "required" attribute is a boolean attribute that specifies that an input field must be filled out before submitting the form.'
  },
  {
    id: 16,
    category: 'HTML',
    question: 'Which tag is used to create a drop-down list?',
    options: ['<list>', '<dropdown>', '<select>', '<input type="dropdown">'],
    answer: 2,
    explanation: 'The <select> element is used to create a drop-down list, containing <option> tags for choices.'
  },
  {
    id: 17,
    category: 'HTML',
    question: 'What is the correct HTML for inserting an image?',
    options: ['<img href="image.gif" alt="MyImage">', '<image src="image.gif" alt="MyImage">', '<img src="image.gif" alt="MyImage">', '<img alt="MyImage">image.gif</img>'],
    answer: 2,
    explanation: 'Images are defined with the <img> tag. The "src" attribute specifies the URL, and "alt" specifies alternate text.'
  },
  {
    id: 18,
    category: 'HTML',
    question: 'Which HTML element defines a section in a document?',
    options: ['<div>', '<section>', '<container>', 'Both A and B'],
    answer: 3,
    explanation: 'Both <div> and <section> define a section in a document, though <section> provides more semantic meaning.'
  },
  {
    id: 19,
    category: 'HTML',
    question: 'What is the purpose of the <meta> tag?',
    options: ['To create metaverses', 'To store metadata about the document', 'To link scripts', 'To display hidden text'],
    answer: 1,
    explanation: 'The <meta> tag provides metadata about the HTML document, such as character set, page description, and keywords.'
  },
  {
    id: 20,
    category: 'HTML',
    question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
    options: ['alt', 'title', 'src', 'longdesc'],
    answer: 0,
    explanation: 'The "alt" attribute provides alternate text for an image, useful for screen readers or when the image fails to load.'
  },

  // JavaScript (20 questions)
  {
    id: 21,
    category: 'JavaScript',
    question: 'Inside which HTML element do we put the JavaScript?',
    options: ['<js>', '<javascript>', '<script>', '<scripting>'],
    answer: 2,
    explanation: 'The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.'
  },
  {
    id: 22,
    category: 'JavaScript',
    question: 'What is the correct JavaScript syntax to change the content of the HTML element <p id="demo">?',
    options: ['document.getElementById("demo").innerHTML = "Hello World!";', 'document.getElement("p").innerHTML = "Hello World!";', '#demo.innerHTML = "Hello World!";', 'document.getElementByName("p").innerHTML = "Hello World!";'],
    answer: 0,
    explanation: 'You must select the element using getElementById, then modify its innerHTML property.'
  },
  {
    id: 23,
    category: 'JavaScript',
    question: 'Where is the correct place to insert a JavaScript?',
    options: ['The <head> section', 'The <body> section', 'Both the <head> section and the <body> section are correct', 'None of the above'],
    answer: 2,
    explanation: 'JavaScript can be placed in both the <head> and the <body> sections of an HTML page.'
  },
  {
    id: 24,
    category: 'JavaScript',
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    options: ['<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">', '<link src="xxx.js">'],
    answer: 0,
    explanation: 'External scripts are included using the <script> tag and pointing the "src" attribute to the file path.'
  },
  {
    id: 25,
    category: 'JavaScript',
    question: 'How do you write "Hello World" in an alert box?',
    options: ['msgBox("Hello World");', 'alert("Hello World");', 'msg("Hello World");', 'alertBox("Hello World");'],
    answer: 1,
    explanation: 'The global alert() method displays an alert box with a specified message and an OK button.'
  },
  {
    id: 26,
    category: 'JavaScript',
    question: 'How do you create a function in JavaScript?',
    options: ['function:myFunction()', 'function = myFunction()', 'function myFunction()', 'create myFunction()'],
    answer: 2,
    explanation: 'Functions are defined using the "function" keyword followed by a name, parentheses, and curly braces.'
  },
  {
    id: 27,
    category: 'JavaScript',
    question: 'How do you call a function named "myFunction"?',
    options: ['call function myFunction()', 'call myFunction()', 'myFunction()', 'execute myFunction()'],
    answer: 2,
    explanation: 'To invoke a function, write the function\'s name followed by parentheses: myFunction().'
  },
  {
    id: 28,
    category: 'JavaScript',
    question: 'How to write an IF statement in JavaScript?',
    options: ['if i = 5 then', 'if i == 5 then', 'if (i == 5)', 'if i = 5'],
    answer: 2,
    explanation: 'An if statement requires the condition to be enclosed in parentheses, like so: if (condition) { code }.'
  },
  {
    id: 29,
    category: 'JavaScript',
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    options: ['if (i <> 5)', 'if i <> 5', 'if (i != 5)', 'if i =! 5 then'],
    answer: 2,
    explanation: 'The != operator means "not equal to". So, if (i != 5) checks if i is not equal to 5.'
  },
  {
    id: 30,
    category: 'JavaScript',
    question: 'How does a WHILE loop start?',
    options: ['while (i <= 10)', 'while (i <= 10; i++)', 'while i = 1 to 10', 'while loop (i <= 10)'],
    answer: 0,
    explanation: 'A while loop starts with the "while" keyword followed by a condition in parentheses.'
  },
  {
    id: 31,
    category: 'JavaScript',
    question: 'How does a FOR loop start?',
    options: ['for (i = 0; i <= 5)', 'for (i <= 5; i++)', 'for i = 1 to 5', 'for (i = 0; i <= 5; i++)'],
    answer: 3,
    explanation: 'A for loop has three parts separated by semicolons: initialization, condition, and increment.'
  },
  {
    id: 32,
    category: 'JavaScript',
    question: 'How can you add a single line comment in JavaScript?',
    options: ['<!-- This is a comment -->', '// This is a comment', '\' This is a comment', '* This is a comment'],
    answer: 1,
    explanation: 'Two forward slashes // are used to indicate a single-line comment in JS.'
  },
  {
    id: 33,
    category: 'JavaScript',
    question: 'How to insert a comment that has more than one line?',
    options: ['/* This comment has more than one line */', '// This comment has more than one line //', '<!-- This comment has more than one line -->', '* This comment has more than one line *'],
    answer: 0,
    explanation: 'Multi-line comments in JS start with /* and end with */.'
  },
  {
    id: 34,
    category: 'JavaScript',
    question: 'What is the correct way to write a JavaScript array?',
    options: ['var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = ["red", "green", "blue"]', 'var colors = 1 = ("red"), 2 = ("green")'],
    answer: 2,
    explanation: 'JavaScript arrays are written with square brackets [ ] with items separated by commas.'
  },
  {
    id: 35,
    category: 'JavaScript',
    question: 'How do you round the number 7.25, to the nearest integer?',
    options: ['Math.rnd(7.25)', 'Math.round(7.25)', 'round(7.25)', 'rnd(7.25)'],
    answer: 1,
    explanation: 'Math.round() rounds a number to the nearest integer.'
  },
  {
    id: 36,
    category: 'JavaScript',
    question: 'How do you find the number with the highest value of x and y?',
    options: ['Math.max(x, y)', 'Math.ceil(x, y)', 'ceil(x, y)', 'top(x, y)'],
    answer: 0,
    explanation: 'Math.max() returns the number with the highest value.'
  },
  {
    id: 37,
    category: 'JavaScript',
    question: 'What is the correct JavaScript syntax for opening a new window called "w2"?',
    options: ['w2 = window.open("http://www.w3schools.com");', 'w2 = window.new("http://www.w3schools.com");', 'window.navigate("http://www.w3schools.com", "w2");', 'window.open("http://www.w3schools.com", "w2");'],
    answer: 3,
    explanation: 'window.open() takes the URL and the window name (target) as its parameters.'
  },
  {
    id: 38,
    category: 'JavaScript',
    question: 'Which event occurs when the user clicks on an HTML element?',
    options: ['onchange', 'onmouseclick', 'onclick', 'onmouseover'],
    answer: 2,
    explanation: 'The onclick event attribute fires when a mouse click occurs on the element.'
  },
  {
    id: 39,
    category: 'JavaScript',
    question: 'How do you declare a JavaScript variable?',
    options: ['v carName;', 'variable carName;', 'var carName;', 'declare carName;'],
    answer: 2,
    explanation: 'In JavaScript, variables are declared using var, let, or const keywords.'
  },
  {
    id: 40,
    category: 'JavaScript',
    question: 'Which operator is used to assign a value to a variable?',
    options: ['*', '-', '=', 'x'],
    answer: 2,
    explanation: 'The equals sign (=) is the assignment operator in JavaScript.'
  },

  // ReactJS (20 questions)
  {
    id: 41,
    category: 'ReactJS',
    question: 'What is React primarily used for?',
    options: ['Building databases', 'Building User Interfaces', 'Routing', 'Design'],
    answer: 1,
    explanation: 'React is an open-source JavaScript library primarily used for building user interfaces.'
  },
  {
    id: 42,
    category: 'ReactJS',
    question: 'What hook is used to manage state in functional components?',
    options: ['useEffect', 'useState', 'useContext', 'useReducer'],
    answer: 1,
    explanation: 'The useState hook lets you add state to functional components.'
  },
  {
    id: 43,
    category: 'ReactJS',
    question: 'What is JSX?',
    options: ['A styling library', 'JavaScript XML', 'A database format', 'Java Syntax Extension'],
    answer: 1,
    explanation: 'JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM.'
  },
  {
    id: 44,
    category: 'ReactJS',
    question: 'How do you pass data from a parent component to a child component?',
    options: ['Using state', 'Using props', 'Using contexts', 'Using Redux'],
    answer: 1,
    explanation: 'Props (short for properties) are used to pass data downwards from a parent to a child component.'
  },
  {
    id: 45,
    category: 'ReactJS',
    question: 'What is the Virtual DOM?',
    options: ['A direct copy of the actual DOM', 'A lightweight JavaScript representation of the DOM', 'A new HTML element', 'A CSS property'],
    answer: 1,
    explanation: 'The Virtual DOM is a lightweight copy of the actual DOM, which React uses to optimize updates by calculating diffs.'
  },
  {
    id: 46,
    category: 'ReactJS',
    question: 'Which hook is used to perform side effects in functional components?',
    options: ['useState', 'useContext', 'useEffect', 'useMemo'],
    answer: 2,
    explanation: 'The useEffect hook allows you to perform side effects (like data fetching or subscriptions) in function components.'
  },
  {
    id: 47,
    category: 'ReactJS',
    question: 'What does the useState hook return?',
    options: ['A state object', 'An array with the current state and a function to update it', 'A function to update state', 'Nothing'],
    answer: 1,
    explanation: 'useState returns an array of two items: the current state value, and a function that lets you update it.'
  },
  {
    id: 48,
    category: 'ReactJS',
    question: 'What is a "key" prop used for in React lists?',
    options: ['To uniquely identify elements for efficient re-rendering', 'To style elements', 'To secure the list data', 'To link to other components'],
    answer: 0,
    explanation: 'Keys help React identify which items in a list have changed, been added, or been removed, optimizing re-renders.'
  },
  {
    id: 49,
    category: 'ReactJS',
    question: 'What is the Context API used for?',
    options: ['Styling components', 'Sharing state globally without passing props down manually', 'Routing', 'Fetching data'],
    answer: 1,
    explanation: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level.'
  },
  {
    id: 50,
    category: 'ReactJS',
    question: 'Which of the following is NOT a hook?',
    options: ['useState', 'useFetch', 'useReducer', 'useRef'],
    answer: 1,
    explanation: 'useFetch is not a built-in React hook, though it is often created as a custom hook.'
  },
  {
    id: 51,
    category: 'ReactJS',
    question: 'What does the useRef hook do?',
    options: ['Triggers a re-render', 'Persists values between renders without causing re-renders', 'Fetches data', 'Creates a reference to another component'],
    answer: 1,
    explanation: 'useRef returns a mutable ref object whose .current property can hold a value that persists across renders without triggering a re-render when changed.'
  },
  {
    id: 52,
    category: 'ReactJS',
    question: 'Can React be used for mobile app development?',
    options: ['Yes, using React Native', 'No, only for web', 'Yes, using React Web', 'No, only for backend'],
    answer: 0,
    explanation: 'React Native allows you to build native mobile apps using React and JavaScript.'
  },
  {
    id: 53,
    category: 'ReactJS',
    question: 'What is a Higher-Order Component (HOC)?',
    options: ['A component that renders another component', 'A function that takes a component and returns a new component', 'A component at the top of the tree', 'A complex hook'],
    answer: 1,
    explanation: 'A higher-order component is an advanced technique in React for reusing component logic; it\'s a function that takes a component and returns a new one.'
  },
  {
    id: 54,
    category: 'ReactJS',
    question: 'What does the useMemo hook do?',
    options: ['Memoizes a function', 'Memoizes a computed value to optimize performance', 'Manages state', 'Handles side effects'],
    answer: 1,
    explanation: 'useMemo caches a calculated value between renders, preventing expensive calculations on every render.'
  },
  {
    id: 55,
    category: 'ReactJS',
    question: 'In React, what is the default behavior when state changes?',
    options: ['The component and its children re-render', 'The page refreshes', 'Only the changed element re-renders', 'Nothing happens'],
    answer: 0,
    explanation: 'When state changes, React automatically re-renders the component and all of its child components.'
  },
  {
    id: 56,
    category: 'ReactJS',
    question: 'How do you conditionally render a component in React?',
    options: ['Using if statements inside JSX', 'Using the ternary operator or logical AND (&&) in JSX', 'Using a renderIf property', 'React does not support conditional rendering'],
    answer: 1,
    explanation: 'JSX supports ternary operators (condition ? true : false) and logical AND (condition && element) for conditional rendering.'
  },
  {
    id: 57,
    category: 'ReactJS',
    question: 'What is the purpose of React Router?',
    options: ['Handling HTTP requests', 'Managing application state', 'Enabling client-side routing in single-page applications', 'Creating API endpoints'],
    answer: 2,
    explanation: 'React Router enables navigation between views in a React application, keeping the UI in sync with the URL.'
  },
  {
    id: 58,
    category: 'ReactJS',
    question: 'Which method is required in a React class component?',
    options: ['componentDidMount()', 'render()', 'constructor()', 'update()'],
    answer: 1,
    explanation: 'The render() method is the only required method in a class component, as it describes what to render.'
  },
  {
    id: 59,
    category: 'ReactJS',
    question: 'What is Redux commonly used for in React applications?',
    options: ['Styling', 'Routing', 'Global state management', 'Database integration'],
    answer: 2,
    explanation: 'Redux is a predictable state container often used with React to manage global application state.'
  },
  {
    id: 60,
    category: 'ReactJS',
    question: 'How can you prevent a component from re-rendering in functional components?',
    options: ['Using React.memo', 'Using shouldComponentUpdate', 'Using useReducer', 'You cannot prevent re-renders'],
    answer: 0,
    explanation: 'React.memo is a higher order component that prevents re-rendering if the component\'s props have not changed.'
  },

  // Theory (10 questions)
  {
    id: 61,
    category: 'Theory',
    question: 'What does Big-O notation describe in computer science?',
    options: ['The exact time an algorithm takes to run', 'The upper bound of the time or space complexity of an algorithm', 'The number of lines of code', 'The hardware requirements'],
    answer: 1,
    explanation: 'Big-O notation characterizes functions according to their growth rates, describing the worst-case time or space complexity.'
  },
  {
    id: 62,
    category: 'Theory',
    question: 'What does DRY stand for in software engineering?',
    options: ['Do Repeat Yourself', 'Don\'t Read Yourself', 'Don\'t Repeat Yourself', 'Data Resource Yield'],
    answer: 2,
    explanation: 'DRY stands for "Don\'t Repeat Yourself", a principle aimed at reducing repetition of software patterns.'
  },
  {
    id: 63,
    category: 'Theory',
    question: 'What is an API?',
    options: ['Application Programming Interface', 'Application Process Integration', 'Automated Program Interface', 'Advanced Programming Instructions'],
    answer: 0,
    explanation: 'An API (Application Programming Interface) allows two applications to talk to each other and share data.'
  },
  {
    id: 64,
    category: 'Theory',
    question: 'What does the "S" in SOLID principles stand for?',
    options: ['Simple Responsibility Principle', 'Single Responsibility Principle', 'Static Resource Principle', 'System Reliability Principle'],
    answer: 1,
    explanation: 'The Single Responsibility Principle states that a class should have only one reason to change, meaning it should only have one job.'
  },
  {
    id: 65,
    category: 'Theory',
    question: 'What is the main difference between a Stack and a Queue?',
    options: ['Stack is LIFO, Queue is FIFO', 'Stack is FIFO, Queue is LIFO', 'Stack is for data, Queue is for processes', 'There is no difference'],
    answer: 0,
    explanation: 'A Stack operates on a Last In, First Out (LIFO) basis, while a Queue operates on a First In, First Out (FIFO) basis.'
  },
  {
    id: 66,
    category: 'Theory',
    question: 'What is the purpose of Version Control Systems like Git?',
    options: ['To write code faster', 'To track changes in source code during software development', 'To compile code into executables', 'To host websites'],
    answer: 1,
    explanation: 'Version control systems record changes to a file or set of files over time so that you can recall specific versions later.'
  },
  {
    id: 67,
    category: 'Theory',
    question: 'Which of the following is a core concept of Agile methodology?',
    options: ['Extensive upfront documentation', 'Iterative development and continuous feedback', 'Strict adherence to a fixed plan', 'Working in silos'],
    answer: 1,
    explanation: 'Agile promotes iterative development, where requirements and solutions evolve through collaboration between self-organizing teams.'
  },
  {
    id: 68,
    category: 'Theory',
    question: 'What is the primary purpose of unit testing?',
    options: ['To test the entire system end-to-end', 'To verify that individual, isolated components work correctly', 'To test the user interface', 'To check for security vulnerabilities'],
    answer: 1,
    explanation: 'Unit tests check individual units of code (like a single function) in isolation to ensure they behave as expected.'
  },
  {
    id: 69,
    category: 'Theory',
    question: 'What does Continuous Integration (CI) involve?',
    options: ['Merging developer changes frequently and automatically testing them', 'Deploying code to production continuously', 'Writing code without breaks', 'Continuously talking to stakeholders'],
    answer: 0,
    explanation: 'CI is the practice of merging all developers\' working copies to a shared mainline several times a day, accompanied by automated tests.'
  },
  {
    id: 70,
    category: 'Theory',
    question: 'In database theory, what does ACID stand for?',
    options: ['Atomicity, Consistency, Isolation, Durability', 'Accuracy, Completeness, Integration, Data', 'Application, Control, Interface, Database', 'All Computers Interpret Data'],
    answer: 0,
    explanation: 'ACID properties guarantee that database transactions are processed reliably.'
  }
];
