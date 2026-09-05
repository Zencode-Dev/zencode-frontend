import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'zencode-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(true);

  constructor() {
    const saved = localStorage.getItem(STORAGE_KEY);
    this.isDark.set(saved !== 'light');
    this.apply();
  }

  toggle() {
    this.isDark.update((v) => !v);
    localStorage.setItem(STORAGE_KEY, this.isDark() ? 'dark' : 'light');
    this.apply();
  }

  private apply() {
    document.documentElement.classList.toggle('theme-light', !this.isDark());
  }
}
