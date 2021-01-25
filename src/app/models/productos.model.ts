export class ProductoModel{
        id:string;
        nombre:string;
        descripcion:string;
        precio:number;
        img:string;

        constructor(){
            this.img='no-disponible.png';
        }
    }