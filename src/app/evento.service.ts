import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  uri = 'http://localhost:4000/evento';

  constructor(private http: HttpClient) { }

  addEvento(nombre, fecha, tipo, capacidad) {
    const obj = {
      nombre: nombre,
      fecha: fecha,
      tipo: tipo,
      capacidad: capacidad
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getEventos() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editEvento(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

    updateEvento(nombre, fecha, tipo, capacidad, id) {

      const obj = {
          nombre: nombre,
          fecha: fecha,
          tipo: tipo,
          capacidad: capacidad
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteEvento(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }
}
