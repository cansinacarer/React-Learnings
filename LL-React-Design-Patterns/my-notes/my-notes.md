# 1. Layout Components

Layout components's primary job is to arrange other components. E.g. split screens, lists, modals...

Normally, we'd include the div and styles in the component but with layout components, we split the actual layout styles into their own component, then simply display the component itself inside that layout component. This separate the component from where it is displayed on the page, which is more flexible.

> Our components (main content components) shouldn't know or care where they're being displayed.

You want to pass in components as children to a layout component, instead of as props. This allows you to pass props to deeper level children without having to pass it through the middle children. E.g. here, we can pass the name prop directly to LeftHandComponent, without having to pass it to SplitScreen component first.
```jsx
<SplitScreen>
    <LeftHandComponent name="Cansin" />
    <RightHandComponent />
</SplitScreen>
```
