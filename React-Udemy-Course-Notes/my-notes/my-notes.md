# React Udemy Course Notes

[React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

[Course repo](https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code/11-finished/src)


## 1. Getting Started
See [my handwritten notes](handwritten-react-notes.pdf).

## 2. JavaScript Refresher
See [my handwritten notes](handwritten-react-notes.pdf).

## 3. React Essentials: Components, JSX, State, Props
See [my handwritten notes](handwritten-react-notes.pdf).

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
