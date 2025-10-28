import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es-CO';
import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import { LocaleService } from './services/locale';

registerLocaleData(localeEs,'es');
registerLocaleData(localeFr,'fr');
registerLocaleData(localeEn,'en');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide:LOCALE_ID,
      //useValue:'es'
      deps:[LocaleService],
      useFactory: (localService:LocaleService)=> localService.getCurrent
    }
  ]
};
