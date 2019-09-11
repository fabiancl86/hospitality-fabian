import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventoService } from './evento.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventoAddComponent } from './evento-add/evento-add.component';
import { EventoGetComponent } from './evento-get/evento-get.component';
import { EventoEditComponent } from './evento-edit/evento-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoAddComponent,
    EventoGetComponent,
    EventoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
