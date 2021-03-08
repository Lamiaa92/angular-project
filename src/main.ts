//POINT D'ENTREE DE NOTRE APPLICATION
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
  
import { AppModule } from './app/app.module';
  
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
