# Document

## Global

Change from `box-sizing: content-box` to `box-sizing: border-box` so that `width` is not affected by `padding` or `border`.

```scss
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

## Body

1.  Remove the margin in all browsers
2.  As a best practice, apply a default `background-color`
3.  Correct the line height in all browsers
4.  Prevent adjustments of font size after orientation changes in iOS
5.  Change the default tap highlight to be completely transparent in iOS
6.  Make footer sticky to bottom

```scss
body {
    display: flex; // 6
    flex-direction: column; // 6
    min-height: 100vh; // 6
    margin: 0; // 1
    background-color: $body-background-color; // 2
    color: $body-color;
    font-family: $body-font-family;
    font-size: $body-font-size;
    font-weight: $body-font-weight;
    line-height: $body-line-height; // 3
    text-align: left;
    text-size-adjust: 100%; // 4
    -webkit-tap-highlight-color: rgba($black, 0); // 5
}
```

## SCSS

### Variables

```scss
$body-background-color: $light !default;
$body-color: $dark !default;
$body-font-family: $font-family-sans-serif !default;
$body-font-size: $font-size !default;
$body-font-weight: $font-weight-normal !default;
$body-line-height: 1.5 !default;
```
