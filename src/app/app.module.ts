import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; /*Importacion de formularios reactivos*/
import { HttpClientModule }from '@angular/common/http'; /*Módulo que nos permite trabajar con la librería http
                                                          y poder tener acceso a los servicios*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';

/*Importamos el idioma español */
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ContactoComponent } from './componentes/contacto/contacto.component';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TiempoComponent,
    ContactoComponent
  ],
  imports: [ /*Aquí van otros módulos de la aplicación, framework o módulos que se vayan importando*/
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}], /*Aquí se inyectan los servicios a utilizar*/
  bootstrap: [AppComponent] /*Punto de partida o inicio de nuestra aplicación*/
})
export class AppModule { }
