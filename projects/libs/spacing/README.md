## @sea-code-themes/spacing

## Frameworks: 

[ Angular ]

## Introduction

The @sea-code-themes/spacing library is designed to offer a flexible and efficient way to manage spacing
across your digital products. It provides the ability to define and customize spacing values,
including all necessary sizes for various layout categories, and allows for seamless adjustments
to spacing settings within your application. Below, you'll find an explanation of how to implement
and use the spacing management function effectively.

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

2. You can also use scss variables:

```
[ Angular ]

@use "@sea-code-themes/spacing/styles" as s;

.example {
  margin: s.spacing(8);
}
```

## Variables

| Token | Value (px) |
| ----- | ---------- |
| 0     | 1px        |
| 1     | 2px        |
| 2     | 4px        |
| 3     | 8px        |
| 4     | 12px       |
| 5     | 16px       |
| 6     | 20px       |
| 7     | 24px       |
| 8     | 32px       |
| 9     | 40px       |
| 10    | 48px       |
| 11    | 64px       |
| 12    | 80px       |
| 13    | 96px       |
| 14    | 128px      |
| 15    | 160px      |
| 16    | 196px      |
| 17    | 256px      |
| 18    | 320px      |
| 19    | 392px      |
| 20    | 512px      |

## Documentation

For detailed information about this library,
visit [documentation](https://seacodelabs.atlassian.net/wiki/external/MjA1YWE3MGJiZjhjNGQxNmJmM2RiMWFhYWFmOWU1NWE).

**@sea-code-labs**
