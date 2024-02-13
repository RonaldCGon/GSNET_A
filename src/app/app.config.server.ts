import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideToastr({ timeOut: 2000, positionClass: 'toast-top-right', })
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
