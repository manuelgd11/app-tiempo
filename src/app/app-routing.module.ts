import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; /*Importacion de modulos y clases para poder trabajar con las rutas*/
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';

const routes: Routes = [
  {
    path: 'tiempo',
    component: TiempoComponent 
  },
  { path: 'main', component: MainComponent },

  { path: '', redirectTo: 'tiempo', pathMatch: 'full' },
  { path: '**', component: TiempoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
