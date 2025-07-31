import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { ToggleDemoComponent } from './toggle-demo/toggle-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet,ToggleDemoComponent,PlaygroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toggle-playground';
}
