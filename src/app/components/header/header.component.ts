import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink ],
  template: `
   <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center relative">
  <div class="flex-grow text-center">
    <button class="text-xl font-bold tracking-wider" routerLink="/">
      🛒 ECOMMERCE 🛒
    </button>
  </div>
  
  <div class="absolute right-4">
    <app-primary-button 
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
