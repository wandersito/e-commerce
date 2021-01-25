import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../confirmar/confirmar.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto:any = {};

  constructor(  private productoService:ProductosService, 
                private activatedRoute: ActivatedRoute,
                private router:Router,
                private dialog:MatDialog) { 

    this.activatedRoute.params.subscribe( params => {

      this.productoService.verProducto( params['id'] ).subscribe( data => {
        this.producto = data;
      } );
    } );

  }
  ngOnInit(): void {
  }

  eliminarProducto(id: string){

      const dialog = this.dialog.open( ConfirmarComponent, {
        width: '250px',
        data: {...this.producto}
      } );

      dialog.afterClosed().subscribe(
        (result) => {
            if(result){
              this.productoService.eliminarProducto(id).subscribe( resp => {
                  this.router.navigate(['/productos']);
              });

            }
        })


  }
}
