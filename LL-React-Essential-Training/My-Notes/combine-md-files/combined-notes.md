# 1. Intro
Chrome Extension: [React Developer Tools](https://chromewebstore.google.com/detail/fmkadmapgofadopljbjfkapdkoienihi)

Quick React Sandbox: [React.new](https://react.new/)

# 2. Intro to React
[React.js-Essential-Training from Linkedin Learning](https://www.linkedin.com/learning/react-js-essential-training-14836121/)

## Adding React to Your Project

1. We could just add the React scripts:

```html
<script
	src="https://unpkg.com/react@17/umd/react.development.js"
	crossorigin
></script>
<script
	src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
	crossorigin
></script>
```

2. Add a div#root where you want react to render

```html
<div id="root"></div>
```

3. Then manually render the elements:

```html
<script type="text/javascript">
    // We pass two parameters:
    // 1. The element we want to render
    // 2. Where to put it
    ReactDOM.render(
        React.createElement("h1", null, "Hello world!"),
        document.getElementById("root")
    );
</script>
</body>
```

## Creating React Elements

In the code above, we can actually move the parameter to be rendered into its own variable.

```js
let heading = React.createElement(
	"h1",
	{ style: { color: blue } },
	"Hello world!"
);
ReactDOM.render(heading, document.getElementById("root"));
```

## Elements with JSX

We could write the element to be rendered as jsx, but this wouldn't run in the browser:

```js
ReactDOM.render(
	<ul>
		<li>🤖</li>
		<li>🤠</li>
		<li>🌝</li>
	</ul>,
	document.getElementById("root")
);
```

Instead, we can use [Babel](https://babeljs.io/) to convert it into a format compatible with all browsers.

All we need to use Babel is to:

1. Add its script,

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

2. Change the script type where jsx is used.

```js
<script type="text/babel">
```

Babel all scripts with type "text/babel" and convert the JSX in them into createElement calls so that we don't have to write like this:

```js
ReactDOM.render(
	/*#__PURE__*/ React.createElement(
		"ul",
		null,
		/*#__PURE__*/ React.createElement("li", null, "\\uD83E\\uDD16"),
		/*#__PURE__*/ React.createElement("li", null, "\\uD83E\\uDD20"),
		/*#__PURE__*/ React.createElement("li", null, "\\uD83C\\uDF1D")
	),
	document.getElementById("root")
);
```

This is not how you would do it in production.

## Dynamic Content in JSX

We can inject dynamic content in between JSX tags using `{}` syntax and typing objects, variables, or props in them.

```js
let robot = "🤖";
let cowboy = "🤠";
let moon = "🌝";
let name = "React";
ReactDOM.render(
	<ul>
		<li>{robot}</li>
		<li>{cowboy}</li>
		<li>{moon}</li>
		<li>{name.toUpperCase()}</li>
		<li>{name.length}</li>
	</ul>,
	document.getElementById("root")
);
```


# 3. React Components
## Creating a React Component

A component is just a JS function that returns some JSX.

**Rule #1:** Component function names start with a capital letter, which helps distinguish `<Header>` component from the built in `<header>` dom element.
So instead of putting all our JSX in the render method like this:

```js
ReactDOM.render(
	<ul>
		<li>🤖</li>
		<li>🤠</li>
	</ul>,
	document.getElementById("root")
);
```

We can just put all that into a component, let's call it App:

```js
function App() {
	return (
		<ul>
			<li>🤖</li>
			<li>🤠</li>
		</ul>
	);
}
```

... and replace them with a JSX tag that refers to that component function:

```js
ReactDOM.render(<App />, document.getElementById("root"));
```

In general, you run ReactDOM.render for one parent component and the other components are nested in it.

```js
function App() {
	return (
		<div>
			<Header />
			<Main />
		</div>
	);
}
```

**Rule #2:** The component must return a single tag. You can either wrap everything in a div or use React Fragments: wrapping everything in `<></>`:

```js
function App() {
	return (
		<>
			<p>My emojis:</p>
			<ul>
				<li>🤖</li>
				<li>🤠</li>
			</ul>
		</>
	);
}
```

You can build your tree from there by nesting components inside the App component.

## Using props for displaying dynamic data

**Step 1:** Add an argument called props to the component function.

```js
function Header(props) { ...
```

**Step 2:** When we add an attribute in the JSX where we call this component function, it will pass that attribute as a prop to the component function.

```html
<header name="Cansin" />
```

**Step 3:** Now you can use that passed arg in the component function. If you are putting it in jsx, you'd need curly brackets.

```jsx
<h1>{props.name}'s Kitchen</h1>
```

If we pass a number, we'd pass it between braces:

```html
<footer year="{2024}" />
```

or we could pass JS as a prop:

```html
<footer year="{new" Date().getFullYear()} />
```

### Using an Array as a prop

If you want to render a list from a passed as an Array:

```jsx
<ul>
	{props.dishes.map((dish) => (
		<li>{dish}</li>
	))}
</ul>
```

But this gives a warning in console: `Warning: Each child in a list should have a unique "key" prop.` You could fix it like this but it is not recommended:

```jsx
{
	props.dishes.map((dish, i) => <li key={i}>{dish}</li>);
}
```

Instead, we can create an object for each item in the Array, then pass that Array of Objects as the prop.

```jsx
const dishObjects = dishes.map((dish, i) => ({
	id: i,
	title: dish,
}));
```

```html
<main adjective="amazing" dishes="{dishObjects}" />
```

We'd also need to update the object mapping:

```jsx
<ul>
	{props.dishes.map((dish, i) => (
		<li key={i}>{dish}</li>
	))}
</ul>
```

**We have () around {} because an arrow function can't return an object without wrapping it in ().**


# 4. React State in the Component Tree

## Working with a create-react-app project:

`src/index.js` is like your `index.html`, it is the entry point to your app.

Components are in their own files, they `export default` the component function at the end.

You run it with `npm start`, you may need to run `npm install` first to install the dependencies from package.json.

## Destructuring the props or any other Object

Instead of using props as the arg for the component function, you can use an object with the keys of the elements from the props:

```jsx
function App({ cheer, library }) {
	return (
		<div className="App">
			<h1>
				{cheer} from {library}.
			</h1>
		</div>
	);
}
```

Instead of `function App(props)` and `{props.cheer} from {props.library}`.

## Destructuring Arrays

You can desctructure an Array and assign its elements to variables as below:

```js
const [firstCity, second] = ["Tokyo", "Tahoe City", "Bend"];
```

Then you can use those variables in a component like `<p>{firstCity} and {second}.</p>`.

This is used in useState.

## useState Hook

**Step 1:** Import useState in the component.

```js
import { useState } from "react";
```

**Step 2:** Define a variable to hold the state and a function to update it.

If we assign `useState()`; to a variable and log it in console, we see that it is an Array with an undefined value (value of the state) and a function (to update the value). So we need to destructure `useState()` into 2 variables.

```js
const [emotion, setEmotion] = useState("happy");
```

If you want to give it an initial value, you can pass it in useState() as an arg.

-   When the app is first rendered, emotion = 'happy', you can print it wherever with

    ```jsx
    <h1>Hello from {emotion} guy!</h1>
    ```

-   We can update it with the setEmotion method:

    ```jsx
    <button onClick={() => setEmotion("sad")}
    <!-- or -->
    <button onClick={toggleEmotion}> <!-- where toggleEmotion() is a function-->
    ```

## useEffect Hook

Used for side effects that aren't related to a component's render. If all you want to do when a state changes is to update a value in dom, you can just put that value in the component, but it you want to do something else, you can pass that function.

**Step 1:** We start by importing it:

```js
import { useState, useEffect } from "react";
```

**Step 2:** We call it while passing in 2 args:

-   A function that determines what it does,
-   An array, which determines when it does it.
    -   If we pass an empty array `[]` it only does once when rendering and never again.
    -   If we pass in a property or a state value, it listens to its changes.
    -   If we pass nothing, it is run every time the component is (re-)rendered.

```jsx
useEffect(() => {
	console.log(`It's ${emotion} now.`);
}, [emotion]);
```

## useReducer

Allows you to take the function that defines how the state is updated in a single place.

Takes 2 args:

1. Function we'll use to update our state
2. Initial state

With useState:

```jsx
import { useState } from "react";

function App() {
	const [checked, setChecked] = useState(false);
	return (
		<div className="App">
			<input
				type="checkbox"
				value={checked}
				onChange={() => setChecked((checked) => !checked)}
				id="chx"
			/>
			<label htmlFor="chx">{checked ? "checked" : "not checked"}</label>
		</div>
	);
}
```

vs with useReducer:

```jsx
import { useReducer } from "react";

function App() {
	const [checked, setChecked] = useReducer((checked) => !checked, false);
	return (
		<div className="App">
			<input
				type="checkbox"
				value={checked}
				onChange={setChecked}
				id="chx"
			/>
			<label htmlFor="chx">{checked ? "checked" : "not checked"}</label>
		</div>
	);
}

export default App;
```


# 5. Handling Forms
## Managing Uncontrolled Form Elements with useRef

Anytime you are using useRef, you are managing form components outside of the state.

You can disable the default form submit with `<form action="" onSubmit={submit}>` which is defined as:

```jsx
const submit = (e) => {
	e.preventDefault();
};
```

You can use **useRef** hook to get the value of an element in dom. Import it:

```js
import { useRef } from "react";
```

Then you can get the value of a form input with:

1. Define a variable with useRef();

    ```jsx
    const textTitle = useRef();
    ```

2. Assign this variable as a reference to the input

    ```jsx
    <input ref={textTitle} type="text" placeholder="Color title" />
    ```

3. Then you can access it with:

    ```jsx
    const title = textTitle.current.value;
    console.log(title);
    ```

4. You can also set them with `current.value`. E.g. for reseting after submission

    ```jsx
    textTitle.current.value = "";
    ```

So managing this form with uncontrolled components using useRef would be:

```jsx
import "./App.css";
import { useRef } from "react";

function App() {
	const colorTitle = useRef("");
	const hexColor = useRef("#000000");

	const submit = (e) => {
		// Prevent the form from submitting
		e.preventDefault();

		// Do something with the inputs
		console.log(`${colorTitle.current.value}, ${hexColor.current.value}`);

		// Clear the form
		colorTitle.current.value = "";
		hexColor.current.value = "#000000";
	};
	return (
		<form onSubmit={submit}>
			<input ref={colorTitle} type="text" placeholder="color title..." />
			<input ref={hexColor} type="color" />
			<button>ADD</button>
		</form>
	);
}

export default App;
```

Unlike useState, where the component will re-render if there is a change, useRef will not re-render. Anytime you see useRef, we are creating an uncontrolled component.

## Managing Controlled Form Elements with useState

Contolled means we are creating state values for the form inputs:

-   Our variables would be the state values,
-   We'd replace ref attributes of the inputs with value attributes that point to states,
-   We'd need to listen to onChange event of the inputs and call the state change functions onChange:
    ```jsx
    <input
    	onChange={(event) => setTitle(event.target.value)}
    	value={title}
    	type="text"
    	placeholder="Color title"
    />
    ```
-   How we clear the form would also change, you don't just have variables to assign values like useRef, you need to call state update function.

    ```jsx
    setTitle("");
    setColor("#000000");
    ```

Managing the form with useState:

```jsx
import "./App.css";
import { useState } from "react";

function App() {
	const [colorTitle, setColorTitle] = useState("");
	const [hexColor, setHexColor] = useState("#000000");

	const submit = (e) => {
		// Prevent the form from submitting
		e.preventDefault();

		// Do something with the inputs
		console.log(`${colorTitle}, ${hexColor}`);

		// Clear the form
		setColorTitle("");
		setHexColor("#000000");
	};
	return (
		<form onSubmit={submit}>
			<input
				onChange={(event) => setColorTitle(event.target.value)}
				type="text"
				value={colorTitle}
				placeholder="color title..."
			/>
			<input
				onChange={(event) => setHexColor(event.target.value)}
				type="color"
				value={hexColor}
			/>
			<button>ADD</button>
		</form>
	);
}

export default App;
```

## useState vs useRef

The difference between the two approach is:

-   With **useRef**, we are reading the input values and updating our variables only when the form is submitted,
    -   Steps:
        1. Create const values with useRef('')
            ```jsx
            const colorTitle = useRef("");
            ```
        2. Tie it to the input value with ref attribute
            ```jsx
            <input ref={colorTitle} type="text" />
            ```
        3. Read it with current.value
            ```jsx
            colorTitle.current.value;
            ```
        4. Change input value with current.value
            ```jsx
            colorTitle.current.value = "";
            ```
-   With **useState**, we are continuously listening to onChange event of the input fields and updating our variables.
    -   Steps:
        1. Create const values with useState(''):
            ```jsx
            const [colorTitle, setColorTitle] = useState("");
            ```
        2. Listen onChange, grab the event and assign event.target.value to the state:
            ```jsx
            <input
            	onChange={(event) => setColorTitle(event.target.value)}
            	type="text"
            />
            ```
        3. Read it with state name
            ```jsx
            colorTitle;
            ```
        4. Change input value with setter function
            ```jsx
            setColorTitle("");
            ```
        5. To make the input value update, you also need to tie its value to the state name.
            ```jsx
            <input
            	onChange={(event) => setColorTitle(event.target.value)}
            	type="text"
            	value={colorTitle}
            />
            ```

## Building a custom hook

A custom hook is a function, its name always starts with the word "use".

When you have a repeatable behavior in your code, you can make it a custom hook.

```jsx
import "./App.css";
import { useState } from "react";

function useInput(initialValue) {
	const [value, setValue] = useState(initialValue);
	return [
		{
			value,
			onChange: (e) => setValue(e.target.value),
		},
		() => setValue(initialValue),
	];
}

function App() {
	const [titleProps, resetTitle] = useInput("");
	const [colorProps, resetColor] = useState("#000000");
	const submit = (e) => {
		e.preventDefault();
		alert(`${titleProps.value}, ${colorProps.value}`);
		resetTitle();
		resetColor();
	};
	return (
		<form onSubmit={submit}>
			<input {...titleProps} type="text" placeholder="color title..." />
			<input {...colorProps} type="color" />
			<button>ADD</button>
		</form>
	);
}

export default App;

```

## Form Libraries

They can help with validation, performance optimiziation (reducing re-renders); they abstract away the state management logic...
- Formik
- React Hook Form

## Hooks Learned So Far

-   useState: returns a variable to store data and a setter function.
    -   When tieing a state variable to an input, you need to set up sync in both ways:
        1.  Listen to onChange and set event.target.value as the new value, to update state from input,
        2.  Set the value attribute of the input equal as the state variable, to update dom from the state varaible.
-   useRef: Gives you a variable, you assign it to an input with ref attribute, then you can read its current.value.
-   useEffect: Allow you to do things when something's value changes.
-   useReducer:
    [Left at this and then custom hooks.](https://www.linkedin.com/learning/react-js-essential-training-14836121/incorporating-usereducer?resume=false&u=2174970)


Custom hook recipes:
- https://usehooks.com/

# 6. Asynchronous React


