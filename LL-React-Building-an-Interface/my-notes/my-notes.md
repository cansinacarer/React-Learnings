# React.js: Building an Interface

## Installing an Icon Pack

You can use [React Icons](https://react-icons.github.io/react-icons/), which only import the icons you use.

1. Install the library:

    `npm install react-icons --save`

2. Import the icons you need:

    `import { BiAlarm } from "react-icons/bi";`

3. Use it as a component, wherever:

    `<BiAlarm className="inline-block" />`

## Installing Tailwind

Unlike bootstrap, which adds many unused classes, tailwind only includes the classes you use.

Just follow the instructions on [Tailwind website](https://tailwindcss.com/docs/guides/nextjs).

We also used a plugin for forms:

1. Install it:

    `npm install @tailwindcss/forms`

2. Add to tailwind config:
    ```js
    // tailwind.config.js
    module.exports = {
    	plugins: [require("@tailwindcss/forms")],
    };
    ```

### Tailwind usage

Similar to Bootstrap, grid begins with a container outside. E.g.:

`<div className="App container mx-auto mt-40 font-thin">`

Then you can start adding the classes to components and elements.

## Creating components

We can organize components with directories in the `src` directory. E.g. we can make a `components` folder and a `Search.js` component in it:

```js
// Search.js
import { BiSearch, BiCaretDown } from "react-icons/bi";

const Search = () => {
	return <div className="py-5">// ...</div>;
};

export default Search;
```

Then you can import it in another component with something like:

```js
import Search from "./components/Search";
```

...and drop `<Search />` wherever you need.

> Component file names should be upper case!

### Two ways to export the component

1. You can either define the function first, then export it at the end of the file:
    ```js
    const AddAppointment = () => {
    	return <>...</>;
    };
    export default AddAppointment;
    ```
2. Or you can export the function where you define it:
    ```js
    export default function AddAppointment() {
    	return <>...</>;
    }
    ```

_You can't use the arrow notation in the second version._

### Deciding whether to put a new component into its own file

If you know for a fact that you will never use a component elsewhere (e.g. the component for the dropdown menu of a search bar), you can still create a new component for it but keep it in the same file as the component being exported (Search.js).

Keeping things that always belong together in the same file saves you from having to dig around the file structure.

## Mapping a JSON to a list

Assuming your json is in a variable named `appointmentList`:

```jsx
<ul className="divide-y divide-gray-200">
	{appointmentList.map((appointment) => (
		<li>{appointment.petName}</li>
	))}
</ul>
```

## Dark mode with Tailwind

**1. Configure Tailwind**

Tailwind CSS provides a darkMode option that you can set to either 'media' or 'class'.

-   'media': Uses the user's system preference for dark mode.
-   'class': Allows you to toggle dark mode manually by adding a dark class to an element.

```js
// tailwind.config.js
module.exports = {
	darkMode: "class",
	// ...
};
```

**2. Using dark mode styles**

2.1. You can either add classes that begin with `dark:` as the dark alternatives:

```html
<html class="dark">
	<body class="bg-white dark:bg-gray-800 text-black dark:text-white">
		<!-- ... -->
	</body>
</html>
```

2.2. or you can be fancy and use css properties:

```css
/* index.css */
:root {
	--bg-color: white;
	--text-color: black;
}

.dark {
	--bg-color: #1a202c; /* Dark background color */
	--text-color: #a0aec0; /* Dark text color */
}
```

Update the tailwind config:

```js
// tailwind.config.js
module.exports = {
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				background: "var(--bg-color)",
				text: "var(--text-color)",
			},
		},
	},
	// ...
};
```

Apply your variables:

```js
// Normally you'd have a logic with useEffect for toggling these classes
document.querySelector("body").classList.add("bg-background", "text-text");
```

**3. Toggle Dark Mode with JS**

```js
document.documentElement.classList.toggle("dark");
```

[WHERE I LEFT](https://www.linkedin.com/learning/react-js-building-an-interface-8551484/passing-data-to-a-component?autoSkip=true&resume=false&u=2174970)
