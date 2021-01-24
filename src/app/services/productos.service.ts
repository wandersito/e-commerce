import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';


@Injectable()
export class ProductosService {

    constructor(private http:HttpClient ){

        console.log("servicio listo");

    }

    getProductos():Observable<any[]>{
       return this.http.get<any[]>('http://localhost:8099/api/productos/listar');
    }

    verProducto(id:string){
        return this.http.get(`http://localhost:8099/api/productos/ver/${id}`);
    }
    

}
export interface Producto{
    nombre:string;
}