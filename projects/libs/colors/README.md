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

## Light Theme Colors

### Text / Surface Colors

| Color Name        | Hex Code  | Example                                                            |
| ----------------- | --------- | ------------------------------------------------------------------ |
| `color-text`      | `#000000` | ![#000000](https://via.placeholder.com/50x50/000000/000000?text=+) |
| `color-surface-a` | `#f2f4f8` | ![#f2f4f8](https://via.placeholder.com/50x50/f2f4f8/f2f4f8?text=+) |
| `color-surface-b` | `#c1c7cd` | ![#c1c7cd](https://via.placeholder.com/50x50/c1c7cd/c1c7cd?text=+) |
| `color-surface-c` | `#989c9f` | ![#989c9f](https://via.placeholder.com/50x50/989c9f/989c9f?text=+) |

### Neutral Colors

| Color Name          | Hex Code  | Example                                                            |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `color-neutral-100` | `#bbbdbf` | ![#bbbdbf](https://via.placeholder.com/50x50/bbbdbf/bbbdbf?text=+) |
| `color-neutral-200` | `#989c9f` | ![#989c9f](https://via.placeholder.com/50x50/989c9f/989c9f?text=+) |
| `color-neutral-300` | `#767b7f` | ![#767b7f](https://via.placeholder.com/50x50/767b7f/767b7f?text=+) |
| `color-neutral-400` | `#545a5f` | ![#545a5f](https://via.placeholder.com/50x50/545a5f/545a5f?text=+) |
| `color-neutral`     | `#545a5f` | ![#545a5f](https://via.placeholder.com/50x50/545a5f/545a5f?text=+) |
| `color-neutral-500` | `#43484c` | ![#43484c](https://via.placeholder.com/50x50/43484c/43484c?text=+) |
| `color-neutral-600` | `#323639` | ![#323639](https://via.placeholder.com/50x50/323639/323639?text=+) |
| `color-neutral-700` | `#222426` | ![#222426](https://via.placeholder.com/50x50/222426/222426?text=+) |

### Primary Colors

| Color Name          | Hex Code  | Example                                                            |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `color-primary-100` | `#a5c0e7` | ![#a5c0e7](https://via.placeholder.com/50x50/a5c0e7/a5c0e7?text=+) |
| `color-primary-200` | `#77a1db` | ![#77a1db](https://via.placeholder.com/50x50/77a1db/77a1db?text=+) |
| `color-primary-300` | `#4a81cf` | ![#4a81cf](https://via.placeholder.com/50x50/4a81cf/4a81cf?text=+) |
| `color-primary-400` | `#1d62c3` | ![#1d62c3](https://via.placeholder.com/50x50/1d62c3/1d62c3?text=+) |
| `color-primary`     | `#1d62c3` | ![#1d62c3](https://via.placeholder.com/50x50/1d62c3/1d62c3?text=+) |
| `color-primary-500` | `#174e9c` | ![#174e9c](https://via.placeholder.com/50x50/174e9c/174e9c?text=+) |
| `color-primary-600` | `#113b75` | ![#113b75](https://via.placeholder.com/50x50/113b75/113b75?text=+) |
| `color-primary-700` | `#0c274e` | ![#0c274e](https://via.placeholder.com/50x50/0c274e/0c274e?text=+) |

### Secondary Colors

| Color Name            | Hex Code  | Example                                                            |
| --------------------- | --------- | ------------------------------------------------------------------ |
| `color-secondary-100` | `#c5adea` | ![#c5adea](https://via.placeholder.com/50x50/c5adea/c5adea?text=+) |
| `color-secondary-200` | `#a884df` | ![#a884df](https://via.placeholder.com/50x50/a884df/a884df?text=+) |
| `color-secondary-300` | `#8b5bd5` | ![#8b5bd5](https://via.placeholder.com/50x50/8b5bd5/8b5bd5?text=+) |
| `color-secondary-400` | `#6e32ca` | ![#6e32ca](https://via.placeholder.com/50x50/6e32ca/6e32ca?text=+) |
| `color-secondary`     | `#6e32ca` | ![#6e32ca](https://via.placeholder.com/50x50/6e32ca/6e32ca?text=+) |
| `color-secondary-500` | `#5828a2` | ![#5828a2](https://via.placeholder.com/50x50/5828a2/5828a2?text=+) |
| `color-secondary-600` | `#421e79` | ![#421e79](https://via.placeholder.com/50x50/421e79/421e79?text=+) |
| `color-secondary-700` | `#2c1451` | ![#2c1451](https://via.placeholder.com/50x50/2c1451/2c1451?text=+) |

### Info Colors

| Color Name       | Hex Code  | Example                                                            |
| ---------------- | --------- | ------------------------------------------------------------------ |
| `color-info-100` | `#a5c0e7` | ![#a5c0e7](https://via.placeholder.com/50x50/a5c0e7/a5c0e7?text=+) |
| `color-info-200` | `#77a1db` | ![#77a1db](https://via.placeholder.com/50x50/77a1db/77a1db?text=+) |
| `color-info-300` | `#4a81cf` | ![#4a81cf](https://via.placeholder.com/50x50/4a81cf/4a81cf?text=+) |
| `color-info-400` | `#1d62c3` | ![#1d62c3](https://via.placeholder.com/50x50/1d62c3/1d62c3?text=+) |
| `color-info`     | `#1d62c3` | ![#1d62c3](https://via.placeholder.com/50x50/1d62c3/1d62c3?text=+) |
| `color-info-500` | `#174e9c` | ![#174e9c](https://via.placeholder.com/50x50/174e9c/174e9c?text=+) |
| `color-info-600` | `#113b75` | ![#113b75](https://via.placeholder.com/50x50/113b75/113b75?text=+) |
| `color-info-700` | `#0c274e` | ![#0c274e](https://via.placeholder.com/50x50/0c274e/0c274e?text=+) |

### Success Colors

| Color Name          | Hex Code  | Example                                                            |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `color-success-100` | `#a3c3b6` | ![#a3c3b6](https://via.placeholder.com/50x50/a3c3b6/a3c3b6?text=+) |
| `color-success-200` | `#76a691` | ![#76a691](https://via.placeholder.com/50x50/76a691/76a691?text=+) |
| `color-success-300` | `#48886d` | ![#48886d](https://via.placeholder.com/50x50/48886d/48886d?text=+) |
| `color-success-400` | `#1a6a48` | ![#1a6a48](https://via.placeholder.com/50x50/1a6a48/1a6a48?text=+) |
| `color-success`     | `#1a6a48` | ![#1a6a48](https://via.placeholder.com/50x50/1a6a48/1a6a48?text=+) |
| `color-success-500` | `#15553a` | ![#15553a](https://via.placeholder.com/50x50/15553a/15553a?text=+) |
| `color-success-600` | `#10402b` | ![#10402b](https://via.placeholder.com/50x50/10402b/10402b?text=+) |
| `color-success-700` | `#0a2a1d` | ![#0a2a1d](https://via.placeholder.com/50x50/0a2a1d/0a2a1d?text=+) |

### Warning Colors

| Color Name          | Hex Code  | Example                                                            |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `color-warning-100` | `#d5bb99` | ![#d5bb99](https://via.placeholder.com/50x50/d5bb99/d5bb99?text=+) |
| `color-warning-200` | `#bf9967` | ![#bf9967](https://via.placeholder.com/50x50/bf9967/bf9967?text=+) |
| `color-warning-300` | `#aa7734` | ![#aa7734](https://via.placeholder.com/50x50/aa7734/aa7734?text=+) |
| `color-warning-400` | `#955501` | ![#955501](https://via.placeholder.com/50x50/955501/955501?text=+) |
| `color-warning`     | `#955501` | ![#955501](https://via.placeholder.com/50x50/955501/955501?text=+) |
| `color-warning-500` | `#774401` | ![#774401](https://via.placeholder.com/50x50/774401/774401?text=+) |
| `color-warning-600` | `#593301` | ![#593301](https://via.placeholder.com/50x50/593301/593301?text=+) |
| `color-warning-700` | `#3c2200` | ![#3c2200](https://via.placeholder.com/50x50/3c2200/3c2200?text=+) |

### Danger Colors

| Color Name         | Hex Code  | Example                                                            |
| ------------------ | --------- | ------------------------------------------------------------------ |
| `color-danger-100` | `#d9aba7` | ![#d9aba7](https://via.placeholder.com/50x50/d9aba7/d9aba7?text=+) |
| `color-danger-200` | `#c7807b` | ![#c7807b](https://via.placeholder.com/50x50/c7807b/c7807b?text=+) |
| `color-danger-300` | `#b4564f` | ![#b4564f](https://via.placeholder.com/50x50/b4564f/b4564f?text=+) |
| `color-danger-400` | `#a12c23` | ![#a12c23](https://via.placeholder.com/50x50/a12c23/a12c23?text=+) |
| `color-danger`     | `#a12c23` | ![#a12c23](https://via.placeholder.com/50x50/a12c23/a12c23?text=+) |
| `color-danger-500` | `#81231c` | ![#81231c](https://via.placeholder.com/50x50/81231c/81231c?text=+) |
| `color-danger-600` | `#611a15` | ![#611a15](https://via.placeholder.com/50x50/611a15/611a15?text=+) |
| `color-danger-700` | `#40120e` | ![#40120e](https://via.placeholder.com/50x50/40120e/40120e?text=+) |

### Black & White

| Color Name | Hex Code  | Example                                                            |
| ---------- | --------- | ------------------------------------------------------------------ |
| `black`    | `#000000` | ![#000000](https://via.placeholder.com/50x50/000000/000000?text=+) |
| `white`    | `#ffffff` | ![#ffffff](https://via.placeholder.com/50x50/ffffff/ffffff?text=+) |

## Dark Theme Colors

### Text Colors

| Color Name        | Hex Code  | Example                                                            |
| ----------------- | --------- | ------------------------------------------------------------------ |
| `color-text`      | `#ffffff` | ![#ffffff](https://via.placeholder.com/50x50/ffffff/ffffff?text=+) |
| `color-surface-a` | `#0a0b0b` | ![#0a0b0b](https://via.placeholder.com/50x50/0a0b0b/0a0b0b?text=+) |
| `color-surface-b` | `#111213` | ![#111213](https://via.placeholder.com/50x50/111213/111213?text=+) |
| `color-surface-c` | `#18191b` | ![#18191b](https://via.placeholder.com/50x50/18191b/18191b?text=+) |

### Neutral Colors

| Color Name          | Hex Code  | Example                                                            |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `color-neutral-100` | `#c8cacc` | ![#c8cacc](https://via.placeholder.com/50x50/c8cacc/c8cacc?text=+) |
| `color-neutral-200` | `#adb0b2` | ![#adb0b2](https://via.placeholder.com/50x50/adb0b2/adb0b2?text=+) |
| `color-neutral-300` | `#919599` | ![#919599](https://via.placeholder.com/50x50/919599/919599?text=+) |
| `color-neutral-400` | `#767b7f` | ![#767b7f](https://via.placeholder.com/50x50/767b7f/767b7f?text=+) |
| `color-neutral`     | `#767b7f` | ![#767b7f](https://via.placeholder.com/50x50/767b7f/767b7f?text=+) |
| `color-neutral-500` | `#5e6266` | ![#5e6266](https://via.placeholder.com/50x50/5e6266/5e6266?text=+) |
| `color-neutral-600` | `#474a4c` | ![#474a4c](https://via.placeholder.com/50x50/474a4c/474a4c?text=+) |
| `color-neutral-700` | `#2f3133` | ![#2f3133](https://via.placeholder.com/50x50/2f3133/2f3133?text=+) |

### Primary Colors

| Color Name          | Hex Code  | Example                                                            |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `color-primary-100` | `#bed2ee` | ![#bed2ee](https://via.placeholder.com/50x50/bed2ee/bed2ee?text=+) |
| `color-primary-200` | `#9dbbe5` | ![#9dbbe5](https://via.placeholder.com/50x50/9dbbe5/9dbbe5?text=+) |
| `color-primary-300` | `#7da5dd` | ![#7da5dd](https://via.placeholder.com/50x50/7da5dd/7da5dd?text=+) |
| `color-primary-400` | `#5c8ed4` | ![#5c8ed4](https://via.placeholder.com/50x50/5c8ed4/5c8ed4?text=+) |
| `color-primary`     | `#5c8ed4` | ![#5c8ed4](https://via.placeholder.com/50x50/5c8ed4/5c8ed4?text=+) |
| `color-primary-500` | `#4a72aa` | ![#4a72aa](https://via.placeholder.com/50x50/4a72aa/4a72aa?text=+) |
| `color-primary-600` | `#37557f` | ![#37557f](https://via.placeholder.com/50x50/37557f/37557f?text=+) |
| `color-primary-700` | `#253955` | ![#253955](https://via.placeholder.com/50x50/253955/253955?text=+) |

### Secondary Colors

| Color Name            | Hex Code  | Example                                                            |
| --------------------- | --------- | ------------------------------------------------------------------ |
| `color-secondary-100` | `#d9caf1` | ![#d9caf1](https://via.placeholder.com/50x50/d9caf1/d9caf1?text=+) |
| `color-secondary-200` | `#c7afeb` | ![#c7afeb](https://via.placeholder.com/50x50/c7afeb/c7afeb?text=+) |
| `color-secondary-300` | `#b495e4` | ![#b495e4](https://via.placeholder.com/50x50/b495e4/b495e4?text=+) |
| `color-secondary-400` | `#a17add` | ![#a17add](https://via.placeholder.com/50x50/a17add/a17add?text=+) |
| `color-secondary`     | `#a17add` | ![#a17add](https://via.placeholder.com/50x50/a17add/a17add?text=+) |
| `color-secondary-500` | `#8162b1` | ![#8162b1](https://via.placeholder.com/50x50/8162b1/8162b1?text=+) |
| `color-secondary-600` | `#614985` | ![#614985](https://via.placeholder.com/50x50/614985/614985?text=+) |
| `color-secondary-700` | `#403158` | ![#403158](https://via.placeholder.com/50x50/403158/403158?text=+) |

### Info Colors

| Color Name       | Hex Code  | Example                                                            |
| ---------------- | --------- | ------------------------------------------------------------------ |
| `color-info-100` | `#bed2ee` | ![#bed2ee](https://via.placeholder.com/50x50/bed2ee/bed2ee?text=+) |
| `color-info-200` | `#9dbbe5` | ![#9dbbe5](https://via.placeholder.com/50x50/9dbbe5/9dbbe5?text=+) |
| `color-info-300` | `#7da5dd` | ![#7da5dd](https://via.placeholder.com/50x50/7da5dd/7da5dd?text=+) |
| `color-info-400` | `#5c8ed4` | ![#5c8ed4](https://via.placeholder.com/50x50/5c8ed4/5c8ed4?text=+) |
| `color-info`     | `#5c8ed4` | ![#5c8ed4](https://via.placeholder.com/50x50/5c8ed4/5c8ed4?text=+) |
| `color-info-500` | `#4a72aa` | ![#4a72aa](https://via.placeholder.com/50x50/4a72aa/4a72aa?text=+) |
| `color-info-600` | `#37557f` | ![#37557f](https://via.placeholder.com/50x50/37557f/37557f?text=+) |
| `color-info-700` | `#253955` | ![#253955](https://via.placeholder.com/50x50/253955/253955?text=+) |

### Success Colors

| Color Name          | Hex Code  | Example                                                            |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `color-success-100` | `#bdd4cb` | ![#bdd4cb](https://via.placeholder.com/50x50/bdd4cb/bdd4cb?text=+) |
| `color-success-200` | `#9cbfb0` | ![#9cbfb0](https://via.placeholder.com/50x50/9cbfb0/9cbfb0?text=+) |
| `color-success-300` | `#7ba996` | ![#7ba996](https://via.placeholder.com/50x50/7ba996/7ba996?text=+) |
| `color-success-400` | `#5a947c` | ![#5a947c](https://via.placeholder.com/50x50/5a947c/5a947c?text=+) |
| `color-success`     | `#5a947c` | ![#5a947c](https://via.placeholder.com/50x50/5a947c/5a947c?text=+) |
| `color-success-500` | `#487663` | ![#487663](https://via.placeholder.com/50x50/487663/487663?text=+) |
| `color-success-600` | `#36594a` | ![#36594a](https://via.placeholder.com/50x50/36594a/36594a?text=+) |
| `color-success-700` | `#243b32` | ![#243b32](https://via.placeholder.com/50x50/243b32/243b32?text=+) |

### Warning Colors

| Color Name          | Hex Code  | Example                                                            |
| ------------------- | --------- | ------------------------------------------------------------------ |
| `color-warning-100` | `#e1ceb6` | ![#e1ceb6](https://via.placeholder.com/50x50/e1ceb6/e1ceb6?text=+) |
| `color-warning-200` | `#d1b691` | ![#d1b691](https://via.placeholder.com/50x50/d1b691/d1b691?text=+) |
| `color-warning-300` | `#c29d6d` | ![#c29d6d](https://via.placeholder.com/50x50/c29d6d/c29d6d?text=+) |
| `color-warning-400` | `#b38548` | ![#b38548](https://via.placeholder.com/50x50/b38548/b38548?text=+) |
| `color-warning`     | `#b38548` | ![#b38548](https://via.placeholder.com/50x50/b38548/b38548?text=+) |
| `color-warning-500` | `#8f6a3a` | ![#8f6a3a](https://via.placeholder.com/50x50/8f6a3a/8f6a3a?text=+) |
| `color-warning-600` | `#6b502b` | ![#6b502b](https://via.placeholder.com/50x50/6b502b/6b502b?text=+) |
| `color-warning-700` | `#48351d` | ![#48351d](https://via.placeholder.com/50x50/48351d/48351d?text=+) |

### Danger Colors

| Color Name         | Hex Code  | Example                                                            |
| ------------------ | --------- | ------------------------------------------------------------------ |
| `color-danger-100` | `#e4c2c0` | ![#e4c2c0](https://via.placeholder.com/50x50/e4c2c0/e4c2c0?text=+) |
| `color-danger-200` | `#d7a4a0` | ![#d7a4a0](https://via.placeholder.com/50x50/d7a4a0/d7a4a0?text=+) |
| `color-danger-300` | `#c98581` | ![#c98581](https://via.placeholder.com/50x50/c98581/c98581?text=+) |
| `color-danger-400` | `#bc6761` | ![#bc6761](https://via.placeholder.com/50x50/bc6761/bc6761?text=+) |
| `color-danger`     | `#bc6761` | ![#bc6761](https://via.placeholder.com/50x50/bc6761/bc6761?text=+) |
| `color-danger-500` | `#96524e` | ![#96524e](https://via.placeholder.com/50x50/96524e/96524e?text=+) |
| `color-danger-600` | `#713e3a` | ![#713e3a](https://via.placeholder.com/50x50/713e3a/713e3a?text=+) |
| `color-danger-700` | `#4b2927` | ![#4b2927](https://via.placeholder.com/50x50/4b2927/4b2927?text=+) |

### Black & White

| Color Name | Hex Code  | Example                                                            |
| ---------- | --------- | ------------------------------------------------------------------ |
| `black`    | `#000000` | ![#000000](https://via.placeholder.com/50x50/000000/000000?text=+) |
| `white`    | `#ffffff` | ![#ffffff](https://via.placeholder.com/50x50/ffffff/ffffff?text=+) |

---

### Description

For detailed information about this library,
visit [documentation](https://seacodelabs.atlassian.net/wiki/external/NTkxMWY4MmE2NGE5NDdiYzlmN2I3NWUxNzlhNzExM2I).

**@sea-code-labs**
