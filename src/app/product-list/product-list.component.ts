import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductService } from "../product.service";
import { ProductModalComponent } from '../product-modal/product-modal.component';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
    standalone: true,
    imports: [CommonModule, ProductModalComponent]

})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    selectedProduct: Product | null = null;

    constructor(private productService: ProductService) {}

    ngOnInit() {
      this.productService.getProducts().subscribe((data: Product[]) => {
        this.products = data;
      });
    }

    selectProduct(product: Product, modal: ProductModalComponent) {
        this.selectedProduct = product; // Asignar el producto seleccionado
        modal.open(); // Llamar a la función open del modal
      }
    }
