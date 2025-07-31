import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'ui-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Input() label = '';
  @Input() showHelp = false;
  @Input() helpTooltip = '';
  @Input() truncateLabel = false;

  @Input() labelSpacing: string = '16px';
  @Input() verticalSpacing: string = '16px';

  @Input() labelAlign: 'top' | 'center' = 'center';

  @Input() fullClickable: boolean = true;


  @Output() checkedChange = new EventEmitter<boolean>();

  isFocused = false;

  toggle(): void {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
  }
}