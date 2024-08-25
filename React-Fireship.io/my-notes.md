# My Notes from React - The Full Course - FireShip.io
[Course Link](https://fireship.io/courses/react/)

## Anatomy of a React App

`create-react-app` takes care of webpack to bundle your code.

Dependencies specified in `package.json` are installed in `node_modules`. You shouldn't need to manually edit that folder or carry it over while deploying.

You shouldn't have to write any code in the `public` directory because all the action happens in the `src` directory. Here `index.js` is your entrypoint.

`App.js` is your first component. Components can import images and css. It is good practice to export only one component per file.

`create-react-app` also contains a server you can run with `npm start`. It will monitor your changes and recompile every time you save changes.

When it's time for deployment, you run `npm run build` to create the files you can host on a storage bucket, which are generated in the `build` folder.

[CD to an S3 Bucket with GitHub Actions](https://cacarer.com/how-to-continuously-deploy-a-react-app-to-a-aws-s3-bucket/)


## Components
You can destructure props to avoid using the props keyword everywhere.

```jsx
function MyComponent({name, icon}) {
    return (
        <>
            {icon}
            <h1>{name}</h1>
        </>
    )
}
```
instead of
```jsx
function MyComponent(props) {
    return (
        <>
            {props.icon}
            <h1>{props.name}</h1>
        </>
    )
}
```

__Data flows one-way:__ Components can pass props to child, but not vice versa.


## Conditional Rendering

If a component contains entirely different UIs based on its state, you can use if statements. But sometimes, you want to update a portion of the component based on a state.

Since JSX is a Javascript expression, you can't use statements inside of it. But, we can use the ternary operator:
```jsx
    {count === 4 ?
        <p>Even</p>
        :
        <p>Odd</p>
    }
```

React will re-render this whenever the value changes, so we can be sure that it will always show the correct UI.

If you want to show one component or nothing at all, you can use a condition followed by a logical and (`&&`). If the condition is truthy, it will render the component on the right.

```jsx
    {count === 4 && <p>Even</p>}
```

But this has pitfalls because values like `""` and `0` evaluate to falsy in JS, which can lead to unpredictable behavior.

## Loops
Since JSX is only a Javascript expression, you can't just write for loop in it. Instead, you can use tools like `map()`.
```jsx
let myArray = [
    { id: 1, value: "124" },
    { id: 2, value: 123 },
    { id: 3, value: 321 },
    { id: 4, value: "heyoo" },
];
return (
    <div className="App">
        <ul>
            {myArray.map(({ id, value }) => {
                return <li key={id}>{value}</li>;
            })}
        </ul>
    </div>
);
}
```

Sidenote: When you are destructuring an object in JS, you have to use the same property names, like `id` and `value` in this case, unless you want to use this syntax to rename them.
```jsx
{ id: key, value: name }
```

## State
Props are immutable, so you can't just change the value and expect React to update the UI. For data that changes, React providers a hook called useState. A hook is a function that can be called at the top level of your component to use different features of React.

If you are working with an Array or Object with useState, when you set a new value, it will completely overwrite the old one. If you want to merge a new value into an Array or Object, you can use the __spread__ syntax to merge the old values into a new Object and set that object as the new state:
```jsx
const handleClick = () => {
    // We are passing a new object as arg for setState
    setState( {
        ...state,
        count: state.count + 1
    } );
}
```

## Events

If you want to pass arguments from onClick to the event, you have to call it using the full arrow syntax.
```jsx
let myClickHandler = (event, otherArg) => {
    const newCount = clickCount + 1;
    console.log(`Other arg: ${otherArg}`);
    setClickCount(newCount);
};
return (
    <button onClick={(e) => myClickHandler(e, 23124)}>Test</button>
)
```

Otherwise, you can just pass the handler function name:
```jsx
let myClickHandler = (event) => {
    const newCount = clickCount + 1;
    console.log(event.target.innerHTML);
    setClickCount(newCount);
};

return (
    <button onClick={myClickHandler}>Test</button>
)
```

You can also pass the event handler functions to the child components.
```jsx
function Parent() {
    const clickHandler = (event) => {
        console.log(event)
    }
    // ...
    return <ChildComponent onClick={clickHandler} />;
}

function Child({ onClick }) {
    return <button onClick={onClick}>+</button>
}

```

## useEffect
useEffect runs a function when data changes. If you leave its dependency array empty, it only runs when the component is first mounted. If you return another function from useEffect, that will only run when the component is unmounted.
```jsx
const [count, setCount] = useState(0);

useEffect( () => {
    // stuff to do when count changes

    // This returned function runs when the component is unmounted
    return () => console.log('destroyed');
}, [count])

```


