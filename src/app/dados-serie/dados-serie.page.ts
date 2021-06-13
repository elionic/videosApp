import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { Iserie } from '../models/ISerie.model';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {
   serie: Iserie;
  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.serie = this.dadosService.pegarDados('serie');
    console.log('Série enviada', this.serie);
  }

}
