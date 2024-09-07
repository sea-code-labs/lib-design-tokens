## @sea-code-themes/spacing

## Frameworks:

[ Angular ]

## Introduction

The @sea-code-themes/spacing library is designed to offer a flexible and efficient way
to manage spacing across your digital products. It provides access to a set of predefined CSS variables
and SCSS functions that retrieve these values, ensuring consistent spacing across your application.
The library covers all necessary sizes for various layout categories, allowing you to utilize
standardized spacing without needing to customize the values. Below, you'll find an explanation
of how to implement and use the spacing management functions effectively.

## Installation

To use the color palette in your project, follow these steps:

1. Install via npm:

```
npm install @sea-code-themes/spacing
```

2. Add the library styles to your project:

```
[ Angular ]

"styles": [
  "node_modules/@sea-code-themes/spacing/styles.scss"
],
"stylePreprocessorOptions": {
  "includePaths": [
    "node_modules/@sea-code-themes/spacing"
  ]
},
```

## Usage

1. You can use css variables:

```
[ Angular ]

.example {
  margin: var(--spacing-8);
}
```

2. You can also use scss function:

```
[ Angular ]

@use "@sea-code-themes/spacing/styles" as s;

.example {
  margin: s.spacing(8);
}
```

## Variables

| Token | Value (px) / 16 | Value (rem) |
| ----- | --------------- | ----------- |
| 0     | 1px             | 0.0625rem   |
| 1     | 2px             | 0.125rem    |
| 2     | 4px             | 0.25rem     |
| 3     | 8px             | 0.5rem      |
| 4     | 12px            | 0.75rem     |
| 5     | 16px            | 1rem        |
| 6     | 20px            | 1.25rem     |
| 7     | 24px            | 1.5rem      |
| 8     | 32px            | 2rem        |
| 9     | 40px            | 2.5rem      |
| 10    | 48px            | 3rem        |
| 11    | 64px            | 4rem        |
| 12    | 80px            | 5rem        |
| 13    | 96px            | 6rem        |
| 14    | 128px           | 8rem        |
| 15    | 160px           | 10rem       |
| 16    | 196px           | 12.25rem    |
| 17    | 256px           | 16rem       |
| 18    | 320px           | 20rem       |
| 19    | 392px           | 24.5rem     |
| 20    | 512px           | 32rem       |

## Documentation

For detailed information about this library,
visit [documentation](https://seacodelabs.atlassian.net/wiki/external/MjA1YWE3MGJiZjhjNGQxNmJmM2RiMWFhYWFmOWU1NWE).

**@sea-code-labs**
