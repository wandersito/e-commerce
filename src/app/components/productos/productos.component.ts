import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  listaProductos :any[] = [];

  constructor(private productoService: ProductosService) { 

    this.productoService.getProductos().subscribe( (data:any) => {

      this.listaProductos = data;
      
    } );

  }

}
