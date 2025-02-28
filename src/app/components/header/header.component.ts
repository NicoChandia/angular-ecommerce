import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink ],
  template: `
 <div class="bg-slate-100 px-4 py-3 shadow-md flex flex-col md:flex-row gap-2 justify-between items-center">
  <!-- Título - Centrado en móvil, izquierda en desktop -->
  <div class="md:flex-grow text-center md:text-left">
    <button class="text-lg md:text-xl font-bold tracking-wider" routerLink="/">
      🛒 ECOMMERCE 🛒
    </button>
  </div>
  
  <!-- Botón del carrito - Derecha en todas las pantallas -->
  <div class="w-full md:w-auto flex justify-end">
    <app-primary-button 
      class="whitespace-nowrap text-sm md:text-base"
      [label]="'Cart (' + cartService.cart().length + ')'"
      routerLink="/cart"
    />
  </div>
</div>
  `,
  styles: `

  `
})
export class HeaderComponent {

  cartService = inject(CartService)
}
