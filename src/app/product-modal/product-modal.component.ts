import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductModalComponent {
    @Input() product: any; // Asegúrate de que esto esté presente
    isOpen: boolean = false;

    open() {
      this.isOpen = true;
    }

    close() {
      this.isOpen = false;
    }
  }
