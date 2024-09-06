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

  public applyTheme(theme: Theme): void {
    this.setCSSVariables(theme.colors);
    this.saveThemeToSessionStorage(theme);
  }

  public setUserPreferredTheme(): void {
    const savedTheme: Theme | null = this.getThemeFromSessionStorage();

    if (savedTheme) {
      this.applyTheme(savedTheme);
    } else {
      this.applyUserPreferredTheme();
    }
  }

  private setCSSVariables(colors: Theme['colors']): void {
    const root: HTMLElement = document.documentElement;
    Object.keys(colors).forEach((key: keyof Theme['colors']): void => {
      root.style.setProperty(`--${key}`, colors[key]);
    });
  }

  private applyUserPreferredTheme(): void {
    const savedTheme: Theme | null = this.getThemeFromSessionStorage();
    const theme: Theme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? defaultDarkTheme : defaultLightTheme);
    this.applyTheme(theme);
  }

  private getThemeFromSessionStorage(): Theme | null {
    const themeJSON: string | null = sessionStorage.getItem(this.themeKey);

    if (themeJSON) {
      try {
        return JSON.parse(themeJSON) as Theme;
      } catch (e) {
        console.error('Failed to parse theme from sessionStorage:', e);
        return null;
      }
    }

    return null;
  }

  private saveThemeToSessionStorage(theme: Theme): void {
    sessionStorage.setItem(this.themeKey, JSON.stringify(theme));
  }
}
