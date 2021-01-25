import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { ProductoModel } from '../../models/productos.model';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-reactive',
  templateUrl: './agregar.component.html'
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;
  title?:string;
  producto = new ProductoModel();

  constructor(  private fb: FormBuilder, 
                private productoService:ProductosService,
                private activatedRoute:ActivatedRoute,
                private router:Router) {

    this.crearFormulario();

  }

  ngOnInit(): void {
      if( this.router.url.includes('editar') ){
        this.title = 'Editar Producto';
        this.activatedRoute.params
        .pipe(switchMap( ({id}) => this.productoService.verProducto(id) ) )
            .subscribe( ({id, nombre, descripcion, precio, img}) =>  
                      this.forma.patchValue({
                        id: id,
                        nombre: nombre,
                        descripcion: descripcion,
                        precio: precio,
                        img: img
                     } ) );
      }else{
        this.title = 'Nuevo Producto';
        return;
      }
  }

  noValido(campo:string){
    return this.forma.get(campo)?.invalid && this.forma.get(campo)?.touched;
  }

  crearFormulario(){

    this.forma = this.fb.group({
      nombre:[
        '',
        [Validators.required, 
          Validators.minLength(5)] 
      ],
      descripcion:[
        '', 
        [ 
          // Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
          Validators.required ] 
      ],
      precio:[
        '', 
        Validators.required,
      ],
      img:['no-disponible.png',]
      // ,
      // direccion: this.fb.group({
      //   distrito: ['', Validators.required],
      //   ciudad:   ['', Validators.required]
      // })
    });

  }

  guardar( form: NgForm){

    // this.forma.reset();
    if(this.forma.valid){
      this.producto = form.value;
          //Guardar
            if(!this.producto.id){
              this.productoService.crearProducto(this.producto).subscribe( producto => {
                this.router.navigate(['/productos', producto.id]);
              })
            }
          //Actualizar
            else{
              this.productoService.actualizarProducto(this.producto).subscribe(producto =>{
                this.router.navigate(['/productos', producto.id]);
              })
            }


    }
    else{
        return this.forma.markAllAsTouched();
    }

  }

}
