### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front end framework 

- What is Babel?
Balbel is js compiler that translate js to older version of js for browser compatibility 

- What is JSX?
is syntax extension of JS, JSX allows you to write html code within js file use in React component 

- How is a Component created in React?
to create a React component, Functional Components 
define a fuction that return jsx syntax

- What are some difference between state and props?
props can't be modified but state can 

- What does "downward data flow" refer to in React?
it refers to passong data from parent component to child component throught props 

- What is a controlled component?
it refers to html form elements like inputs, textarea... are controlled by the state using useState function 

- What is an uncontrolled component?
it refers to html form elements like inputs, textarea... are not controlled by the state using useState function and maaged by the DOM

- What is the purpose of the `key` prop when rendering a list of components?
it used to identified elements in the of components, and helps React to efficiently update components without rerendering 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
beacuse key prop needs to be unique and array are mutable their value changes leading to unnecessary re-renders and potentially incorrect behavior.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a hook in React that allows functional components to perform side effects, data fetching, manual DOM manipulations,

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
is hook that allows you store a value that it kept even after a rerender, do not caude a rerender

- When would you use a ref? When wouldn't you use one?
Refs are commonly used when you need to access or modify a DOM element directly. 

- What is a custom hook in React? When would you want to write one?
to avoid repeated code that does the same thing 
