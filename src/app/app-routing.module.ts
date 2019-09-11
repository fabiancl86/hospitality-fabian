import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';
import { EventoGetComponent } from './evento-get/evento-get.component';

const routes: Routes = [
  {
    path: 'evento/create',
    component: EventoAddComponent
  },
  {
    path: 'evento/edit/:id',
    component: EventoEditComponent
  },
  {
    path: 'evento',
    component: EventoGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
