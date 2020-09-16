import { Component, OnInit } from '@angular/core';
import relacao from '../../assets/data.json';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.less'],
})

export class ParticipantesComponent implements OnInit {

  public participante = null;
  public participantes = [];
  public idParticipante = null;

  constructor() {}

  ngOnInit(): void {
    relacao.forEach((participante) => this.participantes.push(participante));
  }

  montaPopover(ind) {
    this.idParticipante = ind;
    this.participante = this.participantes[ind];
  }
}
