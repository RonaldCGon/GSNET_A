import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import 'zone.js';
//(global as {window: unknown}).window = global;
(window as any)['global'] = window;
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
