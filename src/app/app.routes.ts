// app.routes.ts
import { Routes } from '@angular/router';
import { PlaygroundComponent } from './playground/playground.component';
import { ToggleDemoComponent } from './toggle-demo/toggle-demo.component';


export const routes: Routes = [
  { path: '', component: PlaygroundComponent },
  { path: 'toggle-demo', component: ToggleDemoComponent }
];
