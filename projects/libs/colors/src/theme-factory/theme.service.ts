import { Injectable } from '@angular/core';

import { Theme } from './models/theme.type';
import { defaultDarkTheme } from './themes/default-dark.theme';
import { defaultLightTheme } from './themes/default-light.theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey: string = 'userTheme';

  constructor() {
    this.applyUserPreferredTheme();
  }

  /**
   * Applies the specified theme to the application and saves it in sessionStorage.
   * @param theme The theme to apply.
   */
  public applyTheme(theme: Theme): void {
    this.setCSSVariables(theme.colors);
    this.saveThemeToSessionStorage(theme);
  }

  /**
   * Sets the user's preferred theme, applies it,
   * and saves the preference in sessionStorage.
   * @param themeName The name of the theme to apply (e.g., 'dark' or 'light').
   */
  public setUserPreferredTheme(themeName: string): void {
    const theme: Theme = themeName === defaultDarkTheme.name ? defaultDarkTheme : defaultLightTheme;
    this.applyTheme(theme);
    sessionStorage.setItem(this.themeKey, theme.name);
  }

  /**
   * Converts the provided theme colors into CSS variables
   * and applies them to the root element of the document.
   * @param colors A map of color variables to be applied.
   */
  private setCSSVariables(colors: Theme['colors']): void {
    const root: HTMLElement = document.documentElement;
    Object.keys(colors).forEach((key: keyof Theme['colors']): void => {
      root.style.setProperty(`--${key}`, colors[key]);
    });
  }

  /**
   * Applies the user's preferred theme based on saved preferences,
   * system settings, or falls back to a default theme.
   */
  private applyUserPreferredTheme(): void {
    const savedTheme: string | null = sessionStorage.getItem(this.themeKey);

    if (savedTheme) {
      const theme: Theme = savedTheme === defaultDarkTheme.name ? defaultDarkTheme : defaultLightTheme;
      this.applyTheme(theme);
    } else {
      const prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme: Theme = prefersDark ? defaultDarkTheme : defaultLightTheme;
      this.applyTheme(theme);
    }
  }

  /**
   * Saves the current theme name to sessionStorage.
   * @param theme The theme to save in sessionStorage.
   */
  private saveThemeToSessionStorage(theme: Theme): void {
    sessionStorage.setItem(this.themeKey, theme.name);
  }
}
