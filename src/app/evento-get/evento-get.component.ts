import { Component, OnInit } from '@angular/core';
import Evento from '../Evento';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento-get',
  templateUrl: './evento-get.component.html',
  styleUrls: ['./evento-get.component.css']
})
export class EventoGetComponent implements OnInit {

  eventos: Evento[];

  constructor(private ev: EventoService) { }

  deleteEvento(id) {
    this.ev.deleteEvento(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.ev
      .getEventos()
      .subscribe((data: Evento[]) => {
        this.eventos = data;
    });
  }

}
