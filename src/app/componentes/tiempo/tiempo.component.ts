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
  /*Variables para almacenar la respuesta del servicio o api del tiempo*/
  estado_tiempo: any;
  nombre: any;
  temperatura: any;
  humedad: any;
  latitud: any;
  longitud: any;
  descripcion: any;
  verError!: boolean; /*Variable booleana que indica si muestra o no el error en html*/
  msjError!: String;
  fecha = new Date(); 


  constructor(private fb: FormBuilder, private tiempo: EstadoTiempoService) { /*Es importante siempre 
  declarar/inyectar clases/servicios a utilizar en el constructor*/

    /*Para hacer referencia un método o variable desde otro método u otro constructor se usa 
    la palabra reservada "this"*/
    this.iniciarFormulario();
  }

  ngOnInit(): void {
  }

  /*Declaracion del método para crear o iniciar un formulario*/
  iniciarFormulario() {

    /*Iniciamos el formulario y lo instanciamos para que sea igual a formbuilder para usar el
    método formGroup que permite agrupar los distintos controles que tenga el formulario*/
    this.formulario = this.fb.group({
      /*Declaracion de objeto json*/
      ciudad: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]], /*Clase "Validator" que implementa validaciones 
      comunes que se pueden hacer a cualquier campo*/
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }

  /*Este método consumirá el servicio de Temperatura*/
  consultar() {
    this.verError = false;
    console.log("Formulario: ", this.formulario);
    /*Llamamos al método getEstadoTiempo que recibe 2 parámetros desde el formulario*/
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
       /*Sentencia para capturar un error de servicio o método que se esté consumiendo*/
      error: (error) => {
        console.log(error),
        this.verError = true;
        this.msjError = "Error al consultar el tiempo. Coloque un nombre y código de ciudad válidos."
      },
      complete: () => console.log('Completado')
    }
    );
  }

}
