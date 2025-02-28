import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  template: `
    <div class="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      @for (product of products(); track product.id) {
        <app-product-card 
          [product]="product"
          class="h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        />
      }
      @empty {
        <div class="col-span-full text-center text-gray-500 py-12">
          No products found
        </div>
      }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {

  async ngOnInit(){
    const res = await fetch(`${environment.apiUrl}/products`);
    const data = await res.json();
    this.products.set(data);
  }

  products = signal<Product[]>([
      /*
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        stock: 10,
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        stock: 0,
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        stock: 3,
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        stock: 5,
      },
      {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        stock: 0,
      }
        */
    

  ])

}
