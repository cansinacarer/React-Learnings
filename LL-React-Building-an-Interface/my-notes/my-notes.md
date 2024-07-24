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
    ```
    // tailwind.config.js
     module.exports = {
         plugins: [
             require('@tailwindcss/forms'),
         ],
     }
    ```

### Tailwind usage

Similar to Bootstrap, grid begins with a container outside. E.g.:

`<div className="App container mx-auto mt-40 font-thin">`

Then you can start adding the classes to components and elements.

## Creating components

We can organize components with directories in the `src` directory.

E.g. we can make a `components` folder and a `Search.js` component in it.

> Component names should be upper case!
