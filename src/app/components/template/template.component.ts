import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  };

  paises = [ {
    codigo: 'CRI',
    nombre: 'Costa Rica'
  },
  {
    codigo: 'ESP',
      nombre: 'Espana'
  }];

  sexos: string[] = ['Hombre', 'Mujer', 'Sin definir'];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {

    console.log('ngForm', forma);
    console.log('Valor', forma.value);

    console.log('usuario', this.usuario);

  }

}
