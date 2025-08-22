import { Component, Input } from '@angular/core';
import { Pictograma } from '../../core/models/pictograma.model'; // agora funciona

@Component({
  selector: 'app-card-pictograma',
  standalone: true,
  template: `
    <div
      class="border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition"
    >
      <img [src]="pictograma.imagemUrl" [alt]="pictograma.label" class="w-20 h-20 mb-2" />
      <span class="font-semibold">{{ pictograma.label }}</span>
    </div>
  `
})
export class CardPictograma {
  @Input() pictograma!: Pictograma;
}
