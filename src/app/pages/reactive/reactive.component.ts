import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder) {

    this.crearFormulario();

  }

  ngOnInit(): void {
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
        [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$") ,
          Validators.required ] 
      ],
      precio:[
        '', 
        Validators.required,
      ],
    });

  }

  guardar(){
    console.log(this.forma);
  }

}
