## @sea-code-themes/typography

## Frameworks:

[ Angular ]

## Introduction

The @sea-code-themes/typography library is designed to offer a flexible and efficient way
to manage typography across your digital products. It provides access to a set of predefined
CSS variables and SCSS functions that retrieve these values, ensuring consistent typography
across your application. The library covers all necessary font sizes, weights, and line heights
for various text elements, allowing you to utilize standardized typography without needing
to customize the values.

## Installation

1. Install via npm:

```
npm install @sea-code-themes/typography
```

2. Add the library styles to your project:

```
[ Angular ]

"styles": [
  "node_modules/@sea-code-themes/typography/styles.scss"
],
"stylePreprocessorOptions": {
  "includePaths": [
    "node_modules/@sea-code-themes/typography"
  ]
},
```

## Usage

1. You can use css variables:

```
[ Angular ]

.example {
  font-size: var(--typography-label-2-font-size);
}
```

2. You can also use scss function:

```
[ Angular ]

@use "@sea-code-themes/typography/styles" as t;

.example {
  @include t.apply-type(body-2);
}
```

## Variables

| Token                 | Font Family                 | Font Size (rem) | Line Height (rem) | Font Weight | Letter Spacing (px) | Comment                                                        |
| --------------------- | --------------------------- | --------------- | ----------------- | ----------- | ------------------- | -------------------------------------------------------------- |
| code-1                | 'JetBrains Mono', monospace | 0.75            | 1.0               | 400         | 0.5                 | Inline code snippets and smaller code elements                 |
| code-2                | 'JetBrains Mono', monospace | 0.875           | 1.25              | 400         | 1.0                 | Large code snippets and larger code elements                   |
| label-1               | 'Montserrat', sans-serif    | 0.75            | 1.0               | 400         | 0.75                | Field labels, error messages, and captions (not for body copy) |
| label-2               | 'Montserrat', sans-serif    | 0.875           | 1.125             | 400         | 0.75                | Field labels, error messages, and captions (not for body copy) |
| helper-1              | 'Montserrat', sans-serif    | 0.75            | 1.0               | 400         | 1.0                 | Explanatory helper text below field title                      |
| helper-2              | 'Montserrat', sans-serif    | 0.875           | 1.125             | 400         | 0.75                | Explanatory helper text below field title                      |
| legal-1               | 'Montserrat', sans-serif    | 0.75            | 1.0               | 400         | 1.0                 | Legal copy appearing in product pages                          |
| legal-2               | 'Montserrat', sans-serif    | 0.875           | 1.125             | 400         | 0.75                | Legal copy appearing in product pages                          |
| body-compact-1        | 'Montserrat', sans-serif    | 0.875           | 1.125             | 400         | 0.75                | Short paragraphs, commonly used in components                  |
| body-compact-2        | 'Montserrat', sans-serif    | 1.0             | 1.375             | 400         | 0.2                 | Short paragraphs, commonly used in components                  |
| body-1                | 'Montserrat', sans-serif    | 0.875           | 1.25              | 400         | 0.35                | Long paragraphs in productive layouts, components              |
| body-2                | 'Montserrat', sans-serif    | 1.0             | 1.5               | 400         | 0.5                 | Long paragraphs in expressive layouts                          |
| heading-compact-1     | 'Montserrat', sans-serif    | 0.875           | 1.125             | 600         | 0.35                | Component and layout headings, pairs with body-compact-1       |
| heading-compact-2     | 'Montserrat', sans-serif    | 1.0             | 1.375             | 600         | 0.5                 | Smaller layout headings, pairs with body-compact-2             |
| heading-1             | 'Montserrat', sans-serif    | 0.875           | 1.25              | 600         | 0.75                | Component and layout headings, pairs with body-1               |
| heading-2             | 'Montserrat', sans-serif    | 1.0             | 1.5               | 600         | 0.5                 | Smaller layout headings, pairs with body-2                     |
| heading-3             | 'Montserrat', sans-serif    | 1.25            | 1.75              | 400         | 0.25                | Component and layout headings                                  |
| heading-4             | 'Montserrat', sans-serif    | 1.75            | 2.25              | 400         | 0.2                 | Layout headings                                                |
| heading-5             | 'Montserrat', sans-serif    | 2.0             | 2.5               | 400         | 0.2                 | Layout headings                                                |
| heading-6             | 'Montserrat', sans-serif    | 2.625           | 3.125             | 300         | 0.2                 | Layout headings                                                |
| heading-7             | 'Montserrat', sans-serif    | 3.375           | 4.0               | 300         | 0.2                 | Layout headings                                                |
| fluid-heading-3-sm    | 'Montserrat', sans-serif    | 1.25            | 1.75              | 400         | 0.2                 | Component and layout headings                                  |
| fluid-heading-3-md    | 'Montserrat', sans-serif    | 1.25            | 1.75              | 400         | 0.2                 | Component and layout headings                                  |
| fluid-heading-3-lg    | 'Montserrat', sans-serif    | 1.25            | 1.75              | 400         | 0.2                 | Component and layout headings                                  |
| fluid-heading-3-xl    | 'Montserrat', sans-serif    | 1.25            | 1.75              | 400         | 0.2                 | Component and layout headings                                  |
| fluid-heading-3-xxl   | 'Montserrat', sans-serif    | 1.5             | 1.75              | 400         | 0.2                 | Component and layout headings                                  |
| fluid-heading-4-sm    | 'Montserrat', sans-serif    | 1.75            | 2.25              | 400         | 0.2                 | Layout headings                                                |
| fluid-heading-4-md    | 'Montserrat', sans-serif    | 1.75            | 2.25              | 400         | 0.2                 | Layout headings                                                |
| fluid-heading-4-lg    | 'Montserrat', sans-serif    | 1.75            | 2.25              | 400         | 0.2                 | Layout headings                                                |
| fluid-heading-4-xl    | 'Montserrat', sans-serif    | 2.0             | 2.5               | 400         | 0.2                 | Layout headings                                                |
| fluid-heading-4-xxl   | 'Montserrat', sans-serif    | 2.0             | 2.5               | 400         | 0.2                 | Layout headings                                                |
| fluid-heading-5-sm    | 'Montserrat', sans-serif    | 2.0             | 2.5               | 400         | 0.2                 | Layout headings                                                |
| fluid-heading-5-md    | 'Montserrat', sans-serif    | 2.25            | 2.75              | 300         | 0.2                 | Layout headings                                                |
| fluid-heading-5-lg    | 'Montserrat', sans-serif    | 2.625           | 3.125             | 300         | 0.2                 | Layout headings                                                |
| fluid-heading-5-xl    | 'Montserrat', sans-serif    | 3.0             | 3.5               | 300         | 0.2                 | Layout headings                                                |
| fluid-heading-5-xxl   | 'Montserrat', sans-serif    | 3.75            | 4.375             | 300         | 0.2                 | Layout headings                                                |
| fluid-heading-6-sm    | 'Montserrat', sans-serif    | 2.0             | 2.5               | 600         | 0.2                 | Layout headings                                                |
| fluid-heading-6-md    | 'Montserrat', sans-serif    | 2.25            | 2.75              | 600         | 0.2                 | Layout headings                                                |
| fluid-heading-6-lg    | 'Montserrat', sans-serif    | 2.625           | 3.125             | 600         | 0.2                 | Layout headings                                                |
| fluid-heading-6-xl    | 'Montserrat', sans-serif    | 3.0             | 3.5               | 600         | 0.2                 | Layout headings                                                |
| fluid-heading-6-xxl   | 'Montserrat', sans-serif    | 3.75            | 4.375             | 600         | 0.2                 | Layout headings                                                |
| fluid-paragraph-1-sm  | 'Montserrat', sans-serif    | 1.5             | 1.875             | 300         | 0.2                 | Larger paragraphs, usually three or more lines                 |
| fluid-paragraph-1-md  | 'Montserrat', sans-serif    | 1.5             | 1.875             | 300         | 0.2                 | Larger paragraphs, usually three or more lines                 |
| fluid-paragraph-1-lg  | 'Montserrat', sans-serif    | 1.75            | 2.25              | 300         | 0.2                 | Larger paragraphs, usually three or more lines                 |
| fluid-paragraph-1-xl  | 'Montserrat', sans-serif    | 2.0             | 2.5               | 300         | 0.2                 | Larger paragraphs, usually three or more lines                 |
| fluid-paragraph-1-xxl | 'Montserrat', sans-serif    | 2.25            | 2.75              | 300         | 0.2                 | Larger paragraphs, usually three or more lines                 |
| fluid-paragraph-2-sm  | 'Montserrat', sans-serif    | 1.0             | 1.25              | 300         | 0.2                 | Standard paragraphs, up to three lines                         |
| fluid-paragraph-2-md  | 'Montserrat', sans-serif    | 1.0             | 1.25              | 300         | 0.2                 | Standard paragraphs, up to three lines                         |
| fluid-paragraph-2-lg  | 'Montserrat', sans-serif    | 1.25            | 1.5               | 300         | 0.2                 | Standard paragraphs, up to three lines                         |
| fluid-paragraph-2-xl  | 'Montserrat', sans-serif    | 1.375           | 1.75              | 300         | 0.2                 | Standard paragraphs, up to three lines                         |
| fluid-paragraph-2-xxl | 'Montserrat', sans-serif    | 1.5             | 1.875             | 300         | 0.2                 | Standard paragraphs, up to three lines                         |
| fluid-paragraph-3-sm  | 'Montserrat', sans-serif    | 0.75            | 1.0               | 300         | 0.2                 | Small paragraphs, minimal line count                           |
| fluid-paragraph-3-md  | 'Montserrat', sans-serif    | 0.75            | 1.0               | 300         | 0.2                 | Small paragraphs, minimal line count                           |
| fluid-paragraph-3-lg  | 'Montserrat', sans-serif    | 0.875           | 1.125             | 300         | 0.2                 | Small paragraphs, minimal line count                           |
| fluid-paragraph-3-xl  | 'Montserrat', sans-serif    | 1.0             | 1.25              | 300         | 0.2                 | Small paragraphs, minimal line count                           |
| fluid-paragraph-3-xxl | 'Montserrat', sans-serif    | 1.125           | 1.375             | 300         | 0.2                 | Small paragraphs, minimal line count                           |
| fluid-display-1-sm    | 'Montserrat', sans-serif    | 2.0             | 2.5               | 300         | 0.2                 | Display text                                                   |
| fluid-display-1-md    | 'Montserrat', sans-serif    | 2.25            | 2.75              | 300         | 0.2                 | Display text                                                   |
| fluid-display-1-lg    | 'Montserrat', sans-serif    | 2.875           | 3.375             | 300         | 0.2                 | Display text                                                   |
| fluid-display-1-xl    | 'Montserrat', sans-serif    | 3.25            | 3.875             | 300         | 0.2                 | Display text                                                   |
| fluid-display-1-xxl   | 'Montserrat', sans-serif    | 3.5             | 4.125             | 300         | 0.2                 | Display text                                                   |
| fluid-display-2-sm    | 'Montserrat', sans-serif    | 2.625           | 3.125             | 600         | 0.2                 | Display text                                                   |
| fluid-display-2-md    | 'Montserrat', sans-serif    | 2.625           | 3.125             | 600         | 0.2                 | Display text                                                   |
| fluid-display-2-lg    | 'Montserrat', sans-serif    | 3.375           | 4.0               | 600         | 0.2                 | Display text                                                   |
| fluid-display-2-xl    | 'Montserrat', sans-serif    | 3.75            | 4.375             | 600         | 0.2                 | Display text                                                   |
| fluid-display-2-xxl   | 'Montserrat', sans-serif    | 4.75            | 5.375             | 600         | 0.2                 | Display text                                                   |
| fluid-display-3-sm    | 'Montserrat', sans-serif    | 2.625           | 3.125             | 300         | 0.2                 | Display text                                                   |
| fluid-display-3-md    | 'Montserrat', sans-serif    | 3.375           | 4.0               | 300         | 0.2                 | Display text                                                   |
| fluid-display-3-lg    | 'Montserrat', sans-serif    | 3.75            | 4.375             | 300         | 0.1                 | Display text                                                   |
| fluid-display-3-xl    | 'Montserrat', sans-serif    | 4.75            | 5.375             | 300         | 0.1                 | Display text                                                   |
| fluid-display-3-xxl   | 'Montserrat', sans-serif    | 5.25            | 5.875             | 300         | 0                   | Display text                                                   |
| fluid-display-4-sm    | 'Montserrat', sans-serif    | 2.625           | 3.125             | 300         | 0.2                 | Display text                                                   |
| fluid-display-4-md    | 'Montserrat', sans-serif    | 4.25            | 4.875             | 300         | 0.2                 | Display text                                                   |
| fluid-display-4-lg    | 'Montserrat', sans-serif    | 5.75            | 6.375             | 300         | 0.1                 | Display text                                                   |
| fluid-display-4-xl    | 'Montserrat', sans-serif    | 7.625           | 8.125             | 300         | 0.1                 | Display text                                                   |
| fluid-display-4-xxl   | 'Montserrat', sans-serif    | 9.75            | 10.25             | 300         | 0                   | Display text                                                   |

## Documentation

For detailed information about this library,
visit [documentation](https://seacodelabs.atlassian.net/wiki/external/NmI1ODgxZjRiNWQ0NGUzMjgzZmM4OWVmZTNlZTNmZTg).

**@sea-code-labs**
