import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [ngClass]="{
        'bg-blue-500 hover:bg-blue-600 text-white': variant === 'primary',
        'bg-gray-300 hover:bg-gray-400 text-black': variant === 'secondary'
      }"
      class="px-4 py-2 rounded-lg transition"
    >
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
