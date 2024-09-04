// @ts-nocheck

import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';
import { defaultDarkTheme } from './themes/default-dark.theme';
import { defaultLightTheme } from './themes/default-light.theme';

describe('ThemeService', (): void => {
  let service: ThemeService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    sessionStorage.clear();
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
    spyOn(service, 'applyTheme').and.callThrough();
    service.applyUserPreferredTheme();
    expect(service.applyTheme).toHaveBeenCalledWith(defaultLightTheme);
  });

  it('should set and save the dark theme correctly', (): void => {
    spyOn(service, 'applyTheme').and.callThrough();
    service.setUserPreferredTheme(defaultDarkTheme.name);

    expect(service.applyTheme).toHaveBeenCalledWith(defaultDarkTheme);
    expect(sessionStorage.getItem('userTheme')).toBe(defaultDarkTheme.name);
  });

  it('should set and save the light theme correctly', (): void => {
    spyOn(service, 'applyTheme').and.callThrough();
    service.setUserPreferredTheme(defaultLightTheme.name);
    expect(service.applyTheme).toHaveBeenCalledWith(defaultLightTheme);
    expect(sessionStorage.getItem('userTheme')).toBe(defaultLightTheme.name);
  });

  it('should save the theme to sessionStorage', (): void => {
    spyOn(sessionStorage, 'setItem').and.callThrough();
    service.saveThemeToSessionStorage(defaultDarkTheme);
    expect(sessionStorage.setItem).toHaveBeenCalledWith('userTheme', defaultDarkTheme.name);
  });
});
