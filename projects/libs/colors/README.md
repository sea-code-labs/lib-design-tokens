# @sea-code-themes/colors

The @sea-code-themes/colors library is designed to offer a flexible and efficient way to manage color themes across your digital products. It provides the ability to define and customize themes, including all necessary shades for various color categories, and allows for seamless theme switching within your application. Below, you'll find an explanation of how to implement and use the theme management function effectively.

---

## Installation

To use the color palette in your project, follow these steps:

1. Install via npm:

```
npm install @sea-code-themes/colors
```

2. Add the library styles to your project:

```
"styles": [
  "node_modules/@sea-code-themes/colors/styles.scss"
],
"stylePreprocessorOptions": {
  "includePaths": [
    "node_modules/@sea-code-themes/colors"
  ]
},
```

## Usage

1. You can use predefined light theme css variables from the start, for example:

```
{
  color: var(--color-primary);
  background-color: rgba(var(--color-surface-a), 0.8);
}
```

2. When the service is instantiated (e.g., on application start), it automatically applies the user’s preferred theme based on saved preferences in sessionStorage. If no preference is found, it falls back to the system's color scheme preference (dark or light).

```
import { ThemeService } from './path/to/theme.service';

constructor(private themeService: ThemeService) {
  // Automatically applies the user's preferred theme or system default.
}
```

3. To set and save a user-preferred theme (e.g., 'dark' or 'light'), use the setUserPreferredTheme method. The theme will be applied and saved in sessionStorage.

```
import { ThemeService } from './path/to/theme.service';
import { defaultDarkTheme } from './path/to/defaultDarkTheme';

constructor(private themeService: ThemeService) {
  this.themeService.setUserPreferredTheme(defaultDarkTheme.name);
}
```

4. To apply a specific theme in any place of application, call the applyTheme method on the ThemeService instance. This method also saves the theme in sessionStorage.

```
import { ThemeService } from './path/to/theme.service';
import { defaultLightTheme } from './path/to/themes/defaultLightTheme';

constructor(private themeService: ThemeService) {
  this.themeService.applyTheme(defaultLightTheme);
}
```

---

## Notes

- The service uses sessionStorage to persist the theme across page reloads.
- If you want to add more themes, ensure they follow the same Theme interface structure and update the service methods accordingly.

---

## Light Mode

| Attribute                             | HEX                         |
| ------------------------------------- | --------------------------- |
| `color-white`                         | `#ffffff`                   |
| `color-black`                         | `#000000`                   |
| `color-text`                          | `#14181a`                   |
| `color-text-muted`                    | `#4c5662`                   |
| `color-background`                    | `#eeeff0`                   |
| `color-surface-a`                     | `#dcdee1`                   |
| `color-surface-b`                     | `#cbced2`                   |
| `color-surface-c`                     | `#b9bec3`                   |
| `color-border-a`                      | `#858d96`                   |
| `color-border-b`                      | `#b9bec3`                   |
| `color-border-c`                      | `#cbced2`                   |
| `color-disabled`                      | `rgba(168, 173, 185, 0.75)` |
| `color-disabled-text-contrast`        | `#3c424d`                   |
| `color-neutral`                       | `#515c69`                   |
| `color-neutral-light`                 | `#616972`                   |
| `color-neutral-dark`                  | `#49535f`                   |
| `color-neutral-text-contrast`         | `#ffffff`                   |
| `color-neutral-ghost`                 | `rgba(116, 125, 135, 0.20)` |
| `color-neutral-ghost-text-contrast`   | `#414a54`                   |
| `color-primary`                       | `#094aa4`                   |
| `color-primary-light`                 | `#225cad`                   |
| `color-primary-dark`                  | `#084394`                   |
| `color-primary-text-contrast`         | `#ffffff`                   |
| `color-primary-ghost`                 | `rgba(8, 67, 148, 0.25)`    |
| `color-primary-ghost-text-contrast`   | `#062f68`                   |
| `color-secondary`                     | `#544986`                   |
| `color-secondary-light`               | `#655b92`                   |
| `color-secondary-dark`                | `#4c4279`                   |
| `color-secondary-text-contrast`       | `#ffffff`                   |
| `color-secondary-ghost`               | `rgba(84, 73, 134, 0.25)`   |
| `color-secondary-ghost-text-contrast` | `#3d3561`                   |
| `color-tertiary`                      | `#396776`                   |
| `color-tertiary-light`                | `#4b7381`                   |
| `color-tertiary-dark`                 | `#335d6a`                   |
| `color-tertiary-text-contrast`        | `#ffffff`                   |
| `color-tertiary-ghost`                | `rgba(97, 133, 145, 0.25)`  |
| `color-tertiary-ghost-text-contrast`  | `#223e47`                   |
| `color-success`                       | `#1a6a48`                   |
| `color-success-light`                 | `#1d7c52`                   |
| `color-success-dark`                  | `#165c3f`                   |
| `color-success-text-contrast`         | `#ffffff`                   |
| `color-success-ghost`                 | `rgba(26, 106, 72, 0.25)`   |
| `color-success-ghost-text-contrast`   | `#0d3524`                   |
| `color-warning`                       | `#806501`                   |
| `color-warning-light`                 | `#866a01`                   |
| `color-warning-dark`                  | `#6e5601`                   |
| `color-warning-text-contrast`         | `#ffffff`                   |
| `color-warning-ghost`                 | `rgba(213, 179, 53, 0.25)`  |
| `color-warning-ghost-text-contrast`   | `#654f01`                   |
| `color-danger`                        | `#863d38`                   |
| `color-danger-light`                  | `#9a4740`                   |
| `color-danger-dark`                   | `#592926`                   |
| `color-danger-text-contrast`          | `#ffffff`                   |
| `color-danger-ghost`                  | `rgba(134, 61, 56, 0.25)`   |
| `color-danger-ghost-text-contrast`    | `#592926`                   |

## Dark Mode

| Attribute                             | HEX                         |
| ------------------------------------- | --------------------------- |
| `color-white`                         | `#ffffff`                   |
| `color-black`                         | `#000000`                   |
| `color-text`                          | `#b6c2cf`                   |
| `color-text-muted`                    | `#87929a`                   |
| `color-background`                    | `#1d2125`                   |
| `color-surface-a`                     | `#1c1f25`                   |
| `color-surface-b`                     | `#16191c`                   |
| `color-surface-c`                     | `#14181a`                   |
| `color-border-a`                      | `#738496`                   |
| `color-border-b`                      | `#515c69`                   |
| `color-border-c`                      | `#2e353c`                   |
| `color-disabled`                      | `rgba(56, 61, 66, 0.75)`    |
| `color-disabled-text-contrast`        | `#9ea8b2`                   |
| `color-neutral`                       | `#8196a9`                   |
| `color-neutral-light`                 | `#9aabba`                   |
| `color-neutral-dark`                  | `#707e91`                   |
| `color-neutral-text-contrast`         | `#000000`                   |
| `color-neutral-ghost`                 | `rgba(90, 105, 118, 0.20)`  |
| `color-neutral-ghost-text-contrast`   | `#9aabba`                   |
| `color-primary`                       | `#579dff`                   |
| `color-primary-light`                 | `#89baff`                   |
| `color-primary-dark`                  | `#467ecc`                   |
| `color-primary-text-contrast`         | `#000000`                   |
| `color-primary-ghost`                 | `rgba(87, 157, 255, 0.25)`  |
| `color-primary-ghost-text-contrast`   | `#89baff`                   |
| `color-secondary`                     | `#8f7ee7`                   |
| `color-secondary-light`               | `#bcb2f1`                   |
| `color-secondary-dark`                | `#8171d0`                   |
| `color-secondary-text-contrast`       | `#000000`                   |
| `color-secondary-ghost`               | `rgba(143, 126, 231, 0.25)` |
| `color-secondary-ghost-text-contrast` | `#bcb2f1`                   |
| `color-tertiary`                      | `#6cc3e0`                   |
| `color-tertiary-light`                | `#98d5e9`                   |
| `color-tertiary-dark`                 | `#61b0ca`                   |
| `color-tertiary-text-contrast`        | `#000000`                   |
| `color-tertiary-ghost`                | `rgba(108, 195, 224, 0.25)` |
| `color-tertiary-ghost-text-contrast`  | `#98d5e9`                   |
| `color-success`                       | `#4bce97`                   |
| `color-success-light`                 | `#93e2c1`                   |
| `color-success-dark`                  | `#44b988`                   |
| `color-success-text-contrast`         | `#000000`                   |
| `color-success-ghost`                 | `rgba(75, 206, 151, 0.25)`  |
| `color-success-ghost-text-contrast`   | `#93e2c1`                   |
| `color-warning`                       | `#e2b203`                   |
| `color-warning-light`                 | `#eed168`                   |
| `color-warning-dark`                  | `#cba003`                   |
| `color-warning-text-contrast`         | `#000000`                   |
| `color-warning-ghost`                 | `rgba(226, 178, 3, 0.25)`   |
| `color-warning-ghost-text-contrast`   | `#eed168`                   |
| `color-danger`                        | `#f87168`                   |
| `color-danger-light`                  | `#fa9c95`                   |
| `color-danger-dark`                   | `#df665e`                   |
| `color-danger-text-contrast`          | `#000000`                   |
| `color-danger-ghost`                  | `rgba(248, 113, 104, 0.25)` |
| `color-danger-ghost-text-contrast`    | `#fa9c95`                   |

---

### Description

For detailed information about this library,
visit [documentation](https://seacodelabs.atlassian.net/wiki/external/NTkxMWY4MmE2NGE5NDdiYzlmN2I3NWUxNzlhNzExM2I).

**@sea-code-labs**
