import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [PrimaryButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-4 flex flex-col h-full min-h-[320px] relative">
      <!-- Stock Indicator -->
      <span class="absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-md"
        [class]="product().stock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
        {{ product().stock ? (product().stock + ' left') : 'Out of stock' }}
      </span>

      <!-- Image Container -->
      <div class="flex-1 mb-2 flex items-center justify-center max-h-32">
        <img 
          [src]="product().image" 
          class="w-full h-full object-contain max-w-[140px]"
          [alt]="product().title">
      </div>

      <!-- Content Container -->
      <div class="flex flex-col flex-1">
        <!-- Title -->
        <span class="text-sm font-semibold mb-1 line-clamp-2 min-h-[2.8rem]">
          {{ product().title }}
        </span>
        
        <!-- Price -->
        <span class="text-base font-bold text-gray-900 mb-3">
          {{ '$' + product().price }}
        </span>

        <!-- Button -->
        <app-primary-button 
          label="Add to Cart" 
          [disabled]="!product().stock"
          (btnClicked)="cartService.addToCart(product())"
          class="mt-auto w-full py-1 text-sm"
        />
      </div>
    </div>
  `,
  styles: `
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `
})

export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();
}