import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleComponent } from 'uicomponents';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [ CommonModule,FormsModule, ReactiveFormsModule, ToggleComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  label = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  showHelp = true;
  helpTooltip = 'More info';
  truncateLabel = false;
  labelSpacing = '16px';
  verticalSpacing = '16px';
  labelAlign: 'center' | 'top' = 'center';
  fullClickable = true;
  checked = false;
}
