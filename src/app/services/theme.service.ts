import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

const STORAGE_KEY = 'zencode-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(true);
  private readonly isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    @Inject(DOCUMENT) private readonly doc: Document,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const saved = localStorage.getItem(STORAGE_KEY);
      this.isDark.set(saved !== 'light');
    }
    this.apply();
  }

  toggle() {
    if (!this.isBrowser) return;
    this.isDark.update((v) => !v);
    localStorage.setItem(STORAGE_KEY, this.isDark() ? 'dark' : 'light');
    this.apply();
  }

  private apply() {
    this.doc.documentElement.classList.toggle('theme-light', !this.isDark());
  }
}
