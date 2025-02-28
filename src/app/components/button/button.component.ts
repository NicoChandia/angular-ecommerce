import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule], // Añadir CommonModule para ngClass
  template: `
    <button 
      (click)="btnClicked.emit()"
      class="text-white w-full border px-5 py-2 rounded-xl shadow-md 
            transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
      [ngClass]="{
        'bg-red-500 hover:bg-red-600': color() === 'red',
        'bg-green-500 hover:bg-green-600': color() === 'green'
      }">
      {{ label() }}
    </button>
  `
})
export class ButtonComponent { 
  label = input('');
  color = input<'red' | 'green'>('green');
  btnClicked = output<void>();
}