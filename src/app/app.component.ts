import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailTesterComponent } from './email-tester/email-tester.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmailTesterComponent],
  standalone:true,
  template: `<app-email-tester></app-email-tester>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mini-projet';
}
