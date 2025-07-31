import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToggleComponent } from 'uicomponents';

@Component({
  selector: 'app-toggle-demo',
  standalone: true,
  imports: [ CommonModule,ToggleComponent],
  templateUrl: './toggle-demo.component.html',
  styleUrl: './toggle-demo.component.scss'
})
export class ToggleDemoComponent {
  checked1 = true;
  checked2 = false;
  checked3 = true;
  checkedSpacing1 = true;
  checkedSpacing2 = true;
  multi1 = true;
  multi2 = false;
  multi3 = true;
  multi4 = false;
  multi5 = true;
  multi6 = false;

  // Single-select
  // Radio group options
  radioOptions = [
    { id: 1, label: 'Lorem ipsum dolor sit amat' },
    { id: 2, label: 'Lorem ipsum dolor sit amat' },
    { id: 3, label: 'Lorem ipsum dolor sit amat' },
    { id: 4, label: 'Lorem ipsum dolor sit amat' },
    { id: 5, label: 'Lorem ipsum dolor sit amat' },
  ];

  selectedRadioId = 3;

  selectRadio(id: number): void {
    this.selectedRadioId = id;
  }


  group1Labels = ['All', 'Option #1', 'Option #2', 'Option #1234', 'Option lorem ipsum', 'Option #133'];
  group1 = [true, true, true, true, true, true];

  group2Labels =['All', 'Option #1', 'Option #2', 'Option #1234', 'Option lorem ipsum', 'Option #133'];
  group2 = [false, false, false, false, false, false];

  group3Labels = ['All', 'Option #1', 'Option #2', 'Option #3', 'Option #4', 'Option #5'];
  group3 = [true, true, true, false, true, true];
  setAll(state: boolean, groupKey: 'group1' | 'group2' | 'group3') {
      this[groupKey] = this[groupKey].map(() => state);
      if (groupKey === 'group3') this.group3[0] = state;
    }

    // 🔹 Метод сброса "All" если есть хотя бы один OFF
    onIndividualChange(groupKey: 'group3') {
      const allToggles = this[groupKey];
      const allChecked = allToggles.slice(1).every(Boolean); // кроме первого (All)
      allToggles[0] = allChecked;
    }
}
