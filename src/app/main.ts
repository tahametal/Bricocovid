import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { LoginPageModule } from './login/login.module';

platformBrowserDynamic().bootstrapModule(AppModule);
