# React

This overview was kindly written by [Tim Shaw](https://www.linkedin.com/in/timshaww/) in the fall of 2024.

## Overview of ReactJS

**What is React?**
React is a Javascript library for building user interfaces. Specifically, it is designed to make interactive/dynamic web pages

**Library vs. Framework:**
A JS framework typically provides a comprehensive solution for a full application. It typically enforces a structure, and have built-in solutions for routing, data fetching, etc.
This is not React. React is designed specifically for creating the view layer of an application, handling the rendering of components and updating the UI.

**Why use React?**
React allows us to build applications in a way that is modular, breaking complex interfaces down into smaller, more manageable parts.

### Key Concept -- Components

In React, everything is a component. A component is just a small, reusable piece of UI. Each button, input, or div can be its own component, or they can all part of one component. It is up to you!

### Key Concept -- JSX

JSX (which stands for JavaScript XML[Extensible Markup Language]) allows us to write HTML-like syntax directly in JS. React will then compile it into HTML and JS. This is a big quality of life improvement over switching between HTML and JavaScript lol

## Functional components

A functional component is just a JS function that returns some JSX.
They are incredibly simple to write and do not require much 'boilerplate'

```jsx
function Greeting() {
    return <h1>Hello, World!</h1>
}
```

Another way to write functions is by using _arrow functions_

```jsx
const Greeting = () => {
    return <h1>Hello, World!</h1>
}

// OR

const Greeting = () => <h1>Hello, World!</h1>
```

Functional components are like Legos -- small, reuseable pieces of UI that can be used over and over again in different parts of the application.

**Parent/Child Components**
Parent components are those which contain other components. Children components are those which are contained (by a parent component)

Example:

```jsx
function ParentComponent() {
    return (
        <div>
            <p>This is a parent component</p>
            <ChildComponent />
        </div>
    )
}

function ChildComponent() {
    return <p>This is a child component</p>
}
```

## Props

Props, short for properties, are a way to pass data from a parent component to a child component. They make components customizable, and therefore more reusable.

Think of props as parameters that you pass into a function. They allow the component to take on different values without changing the component's code.

```jsx
function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>
}

<Greeting name='Tim' /> // Output: Hello, Tim!
<Greeting name='World' /> // Output: Hello, World!
<Greeting name='CIM 443' /> // Output: Hello, CIM 443!
```

By using props within this component, you can reuse the greeting component anywhere without needing to create unique components for each value that you want to display.

## Hooks

Hooks are special functions that allow you to 'hook into' React features within functional components. They allow you to manage state, run side effects, and access context, among other things.

Before hooks, the features of React were only availbale inside React class components (different than functional components). Since class components aren't the common practice anymore, hooks are critical to tap into the power of React.

### useState

The `useState` hook adds interactivity by allowing each instance of a component to 'remember' information (called state) between renders.
If you have multiple instances of the same component, each instance has its own state that is entirely seperate from the state of other instances.

```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // count starts at 0
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
```

Here, `useState` provides a variable (time) and a function to update the variable (setCount).
Each time that setCount gets called, it will re-render the component with the new count.

### useEffect

The `useEffect` hook handles side effects like data fetching or updating the page title.
`useEffect` runs after each render of the component. Optionally, you can also add dependecies to a `useEffect` hook that will also cause the hook to run whenever one of the dependencies changes. If there are no dependencies, the hooks only runs when the component is first rendered.

```jsx
import { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(interval); // Clean up on unmount
    }, []); // Empty dependency array runs effect once

    return <p>Seconds: {seconds}</p>;
}
```

### useRef

The `useRef` hook gives access to DOM elements directly.
Where you would normally use `document.getElementById()` in vanilla JS, you must now use the `useRef` hook.

```jsx
import { useRef } from 'react';

function TextInput() {
    const inputRef = useRef(null);
    const focusInput = () => inputRef.current.focus();
    return (
        <div>
            <input ref={inputRef} placeholder="Type here..." />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}
```

### useContext

The `useContext` hook allows data to be shared across multiple components without passing props manually at every level.

```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
    const theme = useContext(ThemeContext);
    return <div>The current theme is {theme}</div>;
}
```

Here, `useContext` access data from a context, making it easy to share values like themes across components, without requiring that every component have a theme prop.

## Events

We are used to dealing with events within vanilla JS already, using the `addEventListener()` function. In react, you can do this directly in the JSX syntax, making event handling much simpler in React than in vanilla JS.

### onClick

The `onClick` event triggers an action when an element is clicked.

**Vanilla JS**

```html
<button id="myButton">Click me</button>
<script>
    const button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        alert("Button clicked!");
    });
</script>
```

**React**

```jsx
function MyButton() {
    const handleClick = () => alert("Button clicked!");
    return <button onClick={handleClick}>Click me</button>;
}
```

### onChange

The `onClick` event captures changes in an input field, such as when a user types.

**Vanilla JS**

```html
<input type="text" id="myInput" placeholder="Type here">
<p id="output"></p>
<script>
  document.getElementById("myInput").addEventListener("input", (e) => {
    document.getElementById("output").textContent = `You typed: ${e.target.value}`;
  });
</script>
```

**React**

```jsx
function Input() {
    const [text, setText] = useState('')
    return (
        <div>
            <input
                type='text'
                onChange((event) => setText(event.target.value))
            />
            <p?>You typed: {text}</p>
        </div>
    );
}
```
