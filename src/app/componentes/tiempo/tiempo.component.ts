import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoTiempoService } from 'src/app/servicios/estado-tiempo.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent {

  /*formulario!: FormGroup;*/ /*Declaración de objeto formulario*/
  formulario = new FormGroup({
    ciudad: new FormControl(''),
    codigo: new FormControl('')
  }); 

  estado_tiempo: any;
  nombre: any;
  temperatura: any;
  humedad: any;
  latitud: any;
  longitud: any;
  descripcion: any;
  verError!: boolean; 
  msjError!: String;
  fecha = new Date(); 


  constructor(private fb: FormBuilder, private tiempo: EstadoTiempoService) { /*Es importante siempre 
  declarar/inyectar clases/servicios a utilizar en el constructor*/

    this.iniciarFormulario();
  }

  ngOnInit(): void {
  }

  iniciarFormulario() {

    this.formulario = this.fb.group({
      ciudad: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }

  /*Este método consumirá el servicio de Temperatura*/
  consultar() {
    this.verError = false;
    console.log("Formulario: ", this.formulario);
    this.tiempo.getEstadoTiempo(`${this.formulario.controls.ciudad.value}`, `${this.formulario.controls.codigo.value}`)
    /*Me suscribo para acceder al observable retornado por el método que contiene la respuesta e 
    información necesaria*/.subscribe({
      next: (respuesta) => {
        console.log(respuesta);
        this.estado_tiempo = respuesta;
        this.nombre = this.estado_tiempo.name;
        this.temperatura = this. estado_tiempo.main.temp;
        this.humedad = this.estado_tiempo.main.humidity;
        this.latitud = this.estado_tiempo.coord.lat;
        this.longitud = this.estado_tiempo.coord.lon;
        this.descripcion = this.estado_tiempo.weather[0].description;
      },
      error: (error) => {
        console.log(error),
        this.verError = true;
        this.msjError = "Error al consultar el tiempo."
      },
      complete: () => console.log('Completado')
    }
    );
  }

}
