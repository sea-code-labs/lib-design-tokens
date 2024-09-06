/* eslint-disable */
// @ts-nocheck

import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { defaultDarkTheme } from './themes/default-dark.theme';
import { defaultLightTheme } from './themes/default-light.theme';
import { Theme } from './models/theme.type';

import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { defaultDarkTheme } from './themes/default-dark.theme';
import { defaultLightTheme } from './themes/default-light.theme';
import { Theme } from './models/theme.type';

describe('ThemeService', (): void => {
  let service: ThemeService;

  const mockDarkTheme: Theme = {
    name: 'mock-dark',
    colors: {
      primary: '#000000',
      secondary: '#333333',
      background: '#121212',
      text: '#FFFFFF',
    },
  };

  const mockLightTheme: Theme = {
    name: 'mock-light',
    colors: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
      background: '#FAFAFA',
      text: '#000000',
    },
  };

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    sessionStorage.clear();
  });

  it('should apply theme and save to sessionStorage', (): void => {
    spyOn(service as any, 'setCSSVariables').and.callThrough();
    spyOn(sessionStorage, 'setItem');
    service.applyTheme(mockDarkTheme);
    expect(sessionStorage.setItem).toHaveBeenCalledWith(service.themeKey, JSON.stringify(mockDarkTheme));
    expect(service.setCSSVariables).toHaveBeenCalledWith(mockDarkTheme.colors);
  });

  it('should retrieve theme from sessionStorage if available', (): void => {
    sessionStorage.setItem(service.themeKey, JSON.stringify(mockLightTheme));
    const savedTheme: Theme | null = service.getThemeFromSessionStorage();
    expect(savedTheme).toEqual(mockLightTheme);
  });

  it('should return null if theme in sessionStorage is invalid', (): void => {
    sessionStorage.setItem(service.themeKey, 'invalid JSON');
    const savedTheme: Theme | null = service.getThemeFromSessionStorage();
    expect(savedTheme).toBeNull();
  });

  it('should apply user preferred theme if one is saved', (): void => {
    spyOn(service, 'applyTheme');
    sessionStorage.setItem(service.themeKey, JSON.stringify(mockLightTheme));
    service.applyUserPreferredTheme();
    expect(service.applyTheme).toHaveBeenCalledWith(mockLightTheme);
  });

  it('should apply dark theme if no theme is saved and system preference is dark', (): void => {
    spyOn(service, 'applyTheme');
    spyOn(window, 'matchMedia').and.callFake((query: string): { matches: boolean } => {
      return { matches: true };
    });
    service.applyUserPreferredTheme();
    expect(service.applyTheme).toHaveBeenCalledWith(defaultDarkTheme);
  });

  it('should apply light theme if no theme is saved and system preference is light', (): void => {
    spyOn(service, 'applyTheme');
    spyOn(window, 'matchMedia').and.callFake((query: string): { matches: boolean } => {
      return { matches: false };
    });
    service.applyUserPreferredTheme();
    expect(service.applyTheme).toHaveBeenCalledWith(defaultLightTheme);
  });

  it('should correctly set CSS variables for the provided theme', (): void => {
    const setPropertySpy: jasmine.Spy = spyOn(document.documentElement.style, 'setProperty');
    service.setCSSVariables(mockDarkTheme.colors);
    Object.keys(mockDarkTheme.colors).forEach((key: string): void => {
      expect(setPropertySpy).toHaveBeenCalledWith(`--${key}`, mockDarkTheme.colors[key as keyof Theme['colors']]);
    });
  });

  it('should save theme to sessionStorage', (): void => {
    spyOn(sessionStorage, 'setItem');
    service.saveThemeToSessionStorage(mockLightTheme);
    expect(sessionStorage.setItem).toHaveBeenCalledWith(service.themeKey, JSON.stringify(mockLightTheme));
  });

  it('should set and apply user preferred theme if saved in sessionStorage', (): void => {
    spyOn(service, 'applyTheme');
    sessionStorage.setItem(service.themeKey, JSON.stringify(mockLightTheme));
    service.setUserPreferredTheme();
    expect(service.applyTheme).toHaveBeenCalledWith(mockLightTheme);
  });
});
