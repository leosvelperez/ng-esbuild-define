import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

declare const SOME_ENV_VAR: string;

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = `Welcome to ${
    typeof SOME_ENV_VAR !== 'undefined' ? SOME_ENV_VAR : 'ng-esbuild-define'
  }!`;
}
