import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ServiceSpamDetectionService } from './app/service-spam-detection.service';


bootstrapApplication(AppComponent, {
  providers: [ServiceSpamDetectionService], // Services globaux
}).catch((err) => console.error(err));
