import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-green-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90" (click)="btnClicked.emit()">
      {{label()}}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent { 
  label = input('')
  disabled = input(false); // <- Esta propiedad es crucial ESTO
  btnClicked = output();
  
  /*Control del evento 
  handleButtonClick(){ //tambien se puede como funcion en (click)
    this.btnClicked.emit() //Emite el evento cuando se hace click

  }
  */  
}
