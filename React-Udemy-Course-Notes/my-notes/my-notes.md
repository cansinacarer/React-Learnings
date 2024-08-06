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
