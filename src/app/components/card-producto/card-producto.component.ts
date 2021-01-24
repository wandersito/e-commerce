import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  @Input() producto:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
