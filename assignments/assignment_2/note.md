# Assignment 2

## Q1. Explain why does this color not works, and how to fix make it work on 1st list

The second list was not working because of CSS specificity. The first one used 3 class selectors and 1 element selector, while the second one used 3 class selectors. Comparing the sum of these two lists, 4 is greater than 3; therefore, the color green won.

Here are approaches to fix the problem:

1. Change the class name; this is not recommended, as when we have more lists, it will be complex to maintain.
2. We can make the second list's class name more specific by adding an element selector.

```css
.container .ol.shop-list .item {
  color: blue;
}
```

## Q2. Write styling make every other line give background color to next one

We can use `nth-child()` to accomplish.
