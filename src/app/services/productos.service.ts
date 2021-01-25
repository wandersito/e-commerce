import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoModel } from '../models/productos.model';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class ProductosService implements OnInit {

    constructor(private http:HttpClient, private activatedRoute:ActivatedRoute ){

        console.log("servicio listo");

    }
    ngOnInit(): void {

    }

    getProductos():Observable<ProductoModel[]>{
       return this.http.get<ProductoModel[]>('http://localhost:8099/api/productos/listar');
    }

    verProducto(id:string):Observable<ProductoModel>{
        return this.http.get<ProductoModel>(`http://localhost:8099/api/productos/ver/${id}`);
    }

    crearProducto(producto:ProductoModel):Observable<ProductoModel>{
        return this.http.post<ProductoModel>(`http://localhost:8099/api/productos/crear`, producto);
    }

    actualizarProducto(producto:ProductoModel):Observable<ProductoModel>{
        return this.http.put<ProductoModel>(`http://localhost:8099/api/productos/editar/${producto.id}`, producto);
    }

    eliminarProducto(id:string):Observable<any>{
        return this.http.delete<any>(`http://localhost:8099/api/productos/eliminar/${id}`);
    }
    

}
