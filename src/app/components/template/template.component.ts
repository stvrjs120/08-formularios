import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('Posteado');
    console.log(forma);
  }

}
