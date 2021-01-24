import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  producto:any = {};

  constructor(private activatedRoute:ActivatedRoute ,
              private productoService:ProductosService) { 

    this.activatedRoute.params.subscribe( params => {

      this.productoService.verProducto( params['id'] ).subscribe( data => {
        this.producto = data;
      } );
    } );

  }
}
