# React Udemy Course Notes

[React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

[Course repo](https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code/11-finished/src)


## 1. Getting Started
See [my handwritten notes](handwritten-react-notes.pdf).

## 2. JavaScript Refresher
Some of my notes are in [handwritten notes](handwritten-react-notes.pdf).

To the `<script></script>` tag, you can add these attributes
- `defer`: Scripts with defer are downloaded asynchronously while the HTML parsing continues. They execute after the HTML is parsed but before the DOMContentLoaded event fires.
- `type="module"`: This allows you to import stuff between modules.

In a React project, you'll usually use a build process, so not applicable.
- This also means the code you write is not the code executed in the browser. The built version converts, bundles and minifies it.

### import & export
You use `export` keyword before a definition to make that expression available for import.

Then you import it:
```jsx
import {appointment} from "./appointment.js" // in the same folder
```
or if you want to use it with a different name:
```jsx
import {appointment as apt} from "./appointment.js"
```
In react projects, you can skip the `.js`, the build process understands that.

#### export default
If you have a default export in the module like this:
```jsx
export default "someValue";
```

It doesn't have a name in the module, so
- You give it a name while importing,
- You don't need braces (`{}`) around the variable name:
```jsx
import myVariable from "./otherModule"
```

#### Importing multiple things
Either:
```jsx
import {myVariable, yourVariable} from "./utils.js";
```

Or you can define an object while importing, and call the variables from that object:
```jsx
import * as utils from "./utils.js";

console.log(utils.myVariable)
```

#### Different ways to export a component
Function can be named or anonymous, arrow or ES5. Anonymous function needs to be exported immediately in the line it is defined.

1. You can have an anonymous function with export default in one line:
   ```jsx
    export default () => {
        return(
            <p>Test component</p>
        );
    }
   ```
   You'd import this component with whatever name you want:
   ```jsx
    import Whatever from "./test.js";
   ```
2. You can have a named arrow function and `export default` at the end:
   ```jsx
    const Whatever = () => {
        return(
            <p>Test component</p>
        );
    };
    export default Whatever;
   ```
   You could still import this component with whatever name you want, but good practice to match them:
   ```jsx
    import Whatever from "./test.js";
   ```
3. You can define a function old school and do either of the above, named or anonymous:
   ```jsx
    function Whatever() {
        return(
            <p>Test component</p>
        );
    };
    export default Whatever;
   ```
    or
   ```jsx
    export default function () {
        return(
            <p>Test component</p>
        );
    };
   ```

### Arrow function nuances
If you function takes exactly one parameter, you can omit the first set of parentheses.
```jsx
// Instead of
(number) => { ... }

// you could write
number => { ... }
```

If your function has no logic other than a return statement (not even a single-liner if statement), you can omit the return key and the braces (can't omit just one).
```jsx
// Instead of
number => { 
  return number * 3;
}
// you could write
number => number * 3;
```

If you are just returning an object, the braces will be interpreted as if they are for function definition. So you need to wrap the object in parentheses.
```jsx
number => ({ age: number });
```

### Objects
Objects can also contain functions:
```jsx
const  user = {
    name: "Cansin",
    age: 90,
    greet() {
        console.log("Hello!");
        // You can also access the properties with this
        console.log(this.age);
    }
};
// can be called like any other item
user.greet();
```

Classes should start with a capital letter:
```jsx
class User {
    // Like __init__ in python
    constructor(name, age) {
        // store the received parameters in the properties of this object
        // similar to of self.age in python
        this.age = age;
    }

    greet() {
        console.log("Hello!");
    }
}
```

You instantiate with the new Keyword (didn't need it in Python):
```jsx
const user1 = new User("Cansin", 75);
```

### Array Methods

#### findIndex()
```js
hobbies = ['Reading', 'Coding', 'Gaming', 'Traveling', 'Cooking'];

hobbies.findIndex((item)=>{
    return item === 'Coding'
}); // returns 2
```
`findIndex` uses the function (with its argument as item) you pass to determine whether an element in the array satisfies the condition or not. The function you pass should return true if the element satisfies the condition, and false otherwise.

If multiple elements match the criteria, you only get the index of the first match.

#### map()
Allows you to transform every item in an array to another item. It takes a function, you define what happens to each item in that function. It returns the resulting items as an array.
```js
hobbies.map((item)=> item + `!`)
```

#### Others
Particularly important in this course are:
- [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)
- [concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b)
- [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

### Destructuring
From a list:
```js
const [mostImportantHobby, , thirdHobby] = hobbies
console.log(thirdHobby) // 'Gaming'
```

From an object (note that we use {} this time):
```js
const user = {
    name: 'Cansin',
    age: 412
};

const {name, age} = user
console.log(name) // 'Cansin'
```

In the function args:
```js
function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}
```
... instead of:
```js
function storeOrder(order) {
  localStorage.setItem('id', order.id);
  localStorage.setItem('currency', order.currency);
}
```
You pass it a single object either way:
```jsx
storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!
```

### Spread Operator
For carrying over the elements of an array or an object:
```js
mergedHobbies = [...hobbies, ...newHobbies, "Flying"] // ...hobbies brings over the elements from hobbies
```
const extendedUser = {
    ...user,
    isAdmin: true,
}

### Control structures

```js
// similar to `for item in list` from Python
for (const hobby of hobbies) {
    console.log(hobby)
}
```

### Manipulating the DOM
In React, we don't usually reach out to the DOM elements to manipulate them directly. 
```js
const list = document.querySelector("ul");
list.remove()
```

### Using Functions as Values
When you are passing a named function like these, to another function, you don't use () next to the function name:
```js
function handleTimeOut() {
    console.log('Timed out!');
}
handleTimeOut2 = () => {
    console.log('Timed out again!');
}
setTimeout(handleTimeOut, 2000);
```
If I did `setTimeout(handleTimeOut(), 2000);` the inner function would run first and the returned value (if any) would be passed.

The functions to which we pass other functions as args are defined to expect functions as args:
```js
function greeter(greeterFn) {
    greeterFn();
}

greeter(() => console.log('Hi!'));
```

### Defining functions inside functions

```js
function init() {
    // greet() is scoped to the init function, can't call from outside
    //just like a variable inside init()
    function greet() {
        console.log('Hi!');
    }
}
```

### Reference vs. Primitive Values

You can't edit primitives. In a variable, you don't store the value, you store the address of that value in memory.

E.g. When you assign new value to a string variable, you throw away the old value and assign the new value.

Objects (also arrays which is an object) are reference values, they can be mutated. 

E.g.when you use the push() method, js reaches into memory and adds this new item to that existing array. Address doesn't change.
```js
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Working');
console.log(hobbies);
// ['Sports', 'Cooking', 'Working']
```

This is why, even though hobbies are defined with `const`, we are able to change its elements. Because, `const` doesn't mean the value can't be edited but it means the variable can't be overwritten.

If I tried to reassign hobbies, I'd get an error:
```js
hobbies = []; // results in error
```

The **spread operator** is extremely useful for cloning arrays and objects. Since both are reference types (and not primitives), copying them safely (i.e. preventing future mutation of the copied original) can be tricky. With the spread operator you have an easy way of creating a (shallow!) clone of the object or array. 

[Course notes summarizing Chapter 2](../course-notes/ch2-next-gen-js-summary.pdf).


## 3. React Essentials: Components, JSX, State, Props
Some of my notes are in [handwritten notes](handwritten-react-notes.pdf).

When you have props passed to a component like this:
```jsx
const expenses = [
    {
      id: 'e1',
      title: 'Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New Desk',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
// ...
<ExpenseItem title={expenses[0].title} amount={expenses[0].amount} />
```

... you can accept them with the props object:
```jsx
const ExpenseItem = (props) => {
    <>
        <p>{props.title}</p>
        <p>{props.amount}</p>
    </>
}

```
1. You could pass the entire expense item (e.g. `expenses[0]`) as prop instead.
2. If you have the entire expense object passed as one prop, you could use object destructuring to avoid having `props` everywhere:
   ```jsx
   const ExpenseItem = ({title, amount}) => {
        // that arg is like doing:
        // let {title, amount} = props
        // title and amount are local variables now
        <p>
            <p>{title}</p>
            <p>{amount}</p>
        </>
    }
    ```
