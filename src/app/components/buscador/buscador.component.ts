import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  listaProductos:any[] = [];
  productosEncontrados:any[] = [];
  texto:string = '';

  constructor(private activatedRoute:ActivatedRoute, private productoService:ProductosService) { 
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(  (params) => {

      this.texto = params['texto'];

      this.productoService.getProductos().subscribe( data => {
          this.productosEncontrados = [];
          this.listaProductos = data;
          this.texto = this.texto.toLocaleLowerCase();
          console.log(this.texto);
          for(let producto of this.listaProductos){
              let nombre = producto.name.toLowerCase();
              if( nombre.indexOf( this.texto ) >= 0 ){
                this.productosEncontrados.push( producto );
              }
          }
        });
      });

  }

}
