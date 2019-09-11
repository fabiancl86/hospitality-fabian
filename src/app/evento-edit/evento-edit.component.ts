import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styleUrls: ['./evento-edit.component.css']
})
export class EventoEditComponent implements OnInit {

  evento: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private ev: EventoService,
    private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
        nombre: ['', Validators.required ],
        fecha: ['', Validators.required ],
        tipo: ['', Validators.required ],
        capacidad: ['', Validators.required ]
      });
    }

    updateEvento(nombre, fecha, tipo, capacidad) {
      this.route.params.subscribe(params => {
         this.ev.updateEvento(nombre, fecha, tipo, capacidad, params['id']);
         this.router.navigate(['evento']);
   })};



  ngOnInit() {
    this.route.params.subscribe(params => {
        this.ev.editEvento(params['id']).subscribe(res => {
          this.evento = res;
      });
    });
  }

}
