import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, UrlSerializer, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { TrailingSlashUrlSerializer } from './services/trailing-slash-url-serializer';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
    { provide: UrlSerializer, useClass: TrailingSlashUrlSerializer },
    provideHttpClient(),
    provideClientHydration(withEventReplay()),
  ],
};
