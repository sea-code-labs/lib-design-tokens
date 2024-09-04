/* eslint-disable @typescript-eslint/no-empty-function */
// @ts-nocheck

import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { defaultDarkTheme } from './themes/default-dark.theme';
import { defaultLightTheme } from './themes/default-light.theme';

describe('ThemeService', (): void => {
  let service: ThemeService;
  let originalMatchMedia: typeof window.matchMedia;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    sessionStorage.clear();
    originalMatchMedia = window.matchMedia;
  });

  afterEach((): void => {
    window.matchMedia = originalMatchMedia;
  });

  it('should apply the dark theme if saved in sessionStorage', (): void => {
    sessionStorage.setItem('userTheme', defaultDarkTheme.name);
    spyOn(service, 'applyTheme').and.callThrough();
    service.applyUserPreferredTheme();
    expect(service.applyTheme).toHaveBeenCalledWith(defaultDarkTheme);
  });

  it('should apply the light theme if saved in sessionStorage', (): void => {
    sessionStorage.setItem('userTheme', defaultLightTheme.name);
    spyOn(service, 'applyTheme').and.callThrough();
    service.applyUserPreferredTheme();
    expect(service.applyTheme).toHaveBeenCalledWith(defaultLightTheme);
  });

  it('should apply the default light theme if no theme is saved in sessionStorage', (): void => {
    window.matchMedia = (query: string): MediaQueryList =>
      ({
        matches: query === '(prefers-color-scheme: dark)' ? false : false,
        media: query,
        onchange: null,
        addListener: (): void => {},
        removeListener: (): void => {},
      }) as unknown as MediaQueryList;
    spyOn(service, 'applyTheme').and.callThrough();
    service.applyUserPreferredTheme();
    expect(service.applyTheme).toHaveBeenCalledWith(defaultLightTheme);
  });

  it('should apply the default dark theme if system prefers dark mode and no theme is saved in sessionStorage', (): void => {
    window.matchMedia = (query: string): MediaQueryList =>
      ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: (): void => {},
        removeListener: (): void => {},
      }) as unknown as MediaQueryList;
    spyOn(service, 'applyTheme').and.callThrough();
    service.applyUserPreferredTheme();
    expect(service.applyTheme).toHaveBeenCalledWith(defaultDarkTheme);
  });

  it('should set user preferred theme and save it to sessionStorage', (): void => {
    spyOn(service, 'applyTheme').and.callThrough();
    spyOn(sessionStorage, 'setItem').and.callThrough();
    service.setUserPreferredTheme(defaultDarkTheme.name);
    expect(service.applyTheme).toHaveBeenCalledWith(defaultDarkTheme);
    expect(sessionStorage.setItem).toHaveBeenCalledWith('userTheme', defaultDarkTheme.name);
  });

  it('should save the theme to sessionStorage', (): void => {
    spyOn(sessionStorage, 'setItem').and.callThrough();
    service.saveThemeToSessionStorage(defaultDarkTheme);
    expect(sessionStorage.setItem).toHaveBeenCalledWith('userTheme', defaultDarkTheme.name);
  });
});
