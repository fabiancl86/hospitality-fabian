import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css']
})
export class EventoAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ev: EventoService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      nombre: ['', Validators.required ],
      fecha: ['', Validators.required ],
      tipo: ['', Validators.required ],
      capacidad: ['', Validators.required ],
    });
  }

  addEvento(nombre, fecha, tipo, capacidad) {
    this.ev.addEvento(nombre, fecha, tipo, capacidad);
  }

  ngOnInit() {
  }

}
