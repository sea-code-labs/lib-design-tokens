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
    const root: HTMLElement = document.documentElement;
    Object.keys(theme.colors).forEach((key: keyof Theme['colors']) => {
      root.style.setProperty(`--${key}`, theme.colors[key]);
    });
    this.saveThemeToSessionStorage(theme);
  }

  /**
   * Applies the user's preferred theme based on saved preferences
   * or system settings.
   */
  private applyUserPreferredTheme(): void {
    const savedTheme: string | null = sessionStorage.getItem(this.themeKey);
    const theme: Theme = savedTheme === defaultDarkTheme.name ? defaultDarkTheme : defaultLightTheme;
    this.applyTheme(theme);
  }

  /**
   * Sets the user's preferred theme and saves it in sessionStorage.
   * @param themeName The name of the theme to apply (e.g., 'dark' or 'light').
   */
  private setUserPreferredTheme(themeName: string): void {
    const theme: Theme = themeName === defaultDarkTheme.name ? defaultDarkTheme : defaultLightTheme;
    this.applyTheme(theme);
    sessionStorage.setItem(this.themeKey, themeName);
  }

  /**
   * Saves the current theme name to sessionStorage.
   * @param theme The theme to save in sessionStorage.
   */
  private saveThemeToSessionStorage(theme: Theme): void {
    sessionStorage.setItem(this.themeKey, theme.name);
  }
}
