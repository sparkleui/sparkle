<script setup>
import ColorsView from '@/views/ColorsView.vue';
</script>

# Colors

All the colors are from the Google Color Material palette.

## Gray colors

<ColorsView color="grays" />

```scss
$gray-50: #fafafa !default;
$gray-100: #f5f5f5 !default;
$gray-200: #eeeeee !default;
$gray-300: #e0e0e0 !default;
$gray-400: #bdbdbd !default;
$gray-500: #9e9e9e !default;
$gray-600: #757575 !default;
$gray-700: #616161 !default;
$gray-800: #424242 !default;
$gray-900: #212121 !default;

$grays: (
    'gray-50': $gray-50,
    'gray-100': $gray-100,
    'gray-200': $gray-200,
    'gray-300': $gray-300,
    'gray-400': $gray-400,
    'gray-500': $gray-500,
    'gray-600': $gray-600,
    'gray-700': $gray-700,
    'gray-800': $gray-800,
    'gray-900': $gray-900,
) !default;
```

## All colors

<ColorsView color="colors" />

```scss
$red: #f44336 !default;
$pink: #e91e63 !default;
$purple: #9c27b0 !default;
$deep-purple: #673ab7 !default;
$indigo: #3f51b5 !default;
$blue: #2196f3 !default;
$light-blue: #03a9f4 !default;
$cyan: #00bcd4 !default;
$teal: #009688 !default;
$green: #4caf50 !default;
$light-green: #8bc34a !default;
$lime: #cddc39 !default;
$yellow: #ffeb3b !default;
$amber: #ffc107 !default;
$orange: #ff9800 !default;
$deep-orange: #ff5722 !default;
$brown: #795548 !default;
$gray: $gray-500 !default;
$light-gray: $gray-300 !default;
$dark-gray: $gray-700 !default;
$blue-gray: #607d8b !default;
$black: #000000 !default;
$white: #ffffff !default;

$colors: (
    'red': $red,
    'pink': $pink,
    'purple': $purple,
    'deep-purple': $deep-purple,
    'indigo': $indigo,
    'blue': $blue,
    'light-blue': $light-blue,
    'cyan': $cyan,
    'teal': $teal,
    'green': $green,
    'light-green': $light-green,
    'lime': $lime,
    'yellow': $yellow,
    'amber': $amber,
    'orange': $orange,
    'deep-orange': $deep-orange,
    'brown': $brown,
    'gray': $gray,
    'light-gray': $light-gray,
    'dark-gray': $dark-gray,
    'blue-gray': $blue-gray,
    'black': $black,
    'white': $white,
) !default;
```

## Main theme colors

<ColorsView color="theme" />

```scss
$primary: $blue !default;
$success: $green !default;
$warning: $amber !default;
$error: $red !default;
$info: $teal !default;
$light: $gray-50 !default;
$dark: $gray-900 !default;

$theme-colors: (
    'primary': $primary,
    'success': $success,
    'warning': $warning,
    'error': $error,
    'info': $info,
    'light': $light,
    'dark': $dark,
) !default;
```
