import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-participantes-detalhes',
  templateUrl: './participantes-detalhes.component.html',
  styleUrls: ['./participantes-detalhes.component.less'],
})

export class ParticipantesDetalhesComponent implements OnInit {

  @Input() participante = null;
  @Input() idParticipante = null;

  constructor() {}

  ngOnInit() {}
}
