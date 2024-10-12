import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./models/product.model";

@Injectable({
    providedIn: 'root' // Esto hace que el servicio esté disponible en toda la aplicación
  })
  export class ProductService {
    private apiUrl = 'https://fakestoreapi.com/products';

    constructor(private http: HttpClient) {}

    // Define el método getProducts aquí
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }
  }
