import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  contactoForm!: FormGroup;

  constructor (private readonly fb: FormBuilder){
    this.iniciarFormulario();
  }

  ngOnInit(): void {
  }

  iniciarFormulario() {

    this.contactoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      checkAdult: ['',  [Validators.required]],
      departament: [''],
      comment: ['', [Validators.required]]
    })
  }

  onSubmit(){
    console.log("Formulario:", this.contactoForm.value);
  }

  // initForm() {
  //   this.fb.group({
  //     name: ['', [Validators.required, Validators.minLength(3)]],
  //     checkAdult: ['', [Validators.required]],
  //     departament: [''],
  //     comment: ['', [Validators.required]]
  //   });
  // }

}
