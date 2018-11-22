import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;

  usuario: any = {
    nombrecompleto: {
      nombre: 'Steven',
      apellido: 'Rojas'
    },
    correo: 'steven.rojas@akros.tech'
    // pasatiempos: ['Correr', 'Dormir', 'Comer']
  };

  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup( {
        'nombre': new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(3)
          ]),
          'apellido': new FormControl(
            '',
            [
              Validators.required,
              this.noRojas
            ])
        }),
        'correo': new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
          ]),
        'pasatiempos': new FormArray([
          new FormControl('Correr', Validators.required)
        ]),
        'username': new FormControl('', Validators.required, this.existeUsuario),
        'password1': new FormControl('', Validators.required),
        'password2': new FormControl()
    });

    // this.forma.setValue(this.usuario);
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    // this.forma.valueChanges
    //   .subscribe(data => {
    //     console.log(data);
    //   });

    this.forma.controls['username'].valueChanges
      .subscribe(data => {
        console.log(data);
      });

      this.forma.controls['username'].statusChanges
      .subscribe(data => {
        console.log(data);
      });
   }

   ngOnInit(): void {
   }

   agregarPasatiempo() {
     (<FormArray>this.forma.controls['pasatiempos']).push(
       new FormControl('Dormir', Validators.required)
     );
   }

   noIgual(control: FormControl): { [s: string]: boolean} {
     let forma: any = this;
     
    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    }

    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'sucre') {
            resolve({existe: true});
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );
    return promesa;
  }

   noRojas(control: FormControl): { [s: string]: boolean} {
     if (control.value === 'Rojas') {
       return {
         norojas: true
       };
     }

     return null;
   }

   guardarCambios() {
     console.log(this.forma.value);
     console.log(this.forma);

    //  this.forma.reset({
    //   nombrecompleto: {
    //     nombre: '',
    //     apellido: ''
    //   },
    //   correo: ''
    // });
   }

}
