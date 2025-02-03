
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {ApplicationConfig} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
