import { Router, Routes } from '@angular/router';
import { DadosService } from './../services/dados.service';
import { Iserie } from './../models/ISerie.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //variáveis que eu criei
  titulo= 'Séries';
  listaSeries: Iserie[]=[
    {
      nome: 'The Flash (2014)',
      lacamento: '2014',
      duracao: '1h 30m',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rNy8dBsoJ4jVtIBzJbK7HddZsSc.jpg',
      generos: ['Drama', 'Sci-Fi','Fantasia']
    },
    {
    nome: 'Loki (2021)',
    lacamento: '2021',
    duracao: '52m',
    classificacao: 81,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kAHPDqUUciuObEoCgYtHttt6L2Q.jpg',
    generos: ['Action & Adventure', 'Sci-Fi & Fantasy'],
    pagina: '/the-flash'
  },
  {
    nome: 'Sweet Tooth (2021)',
    lacamento: '2021',
    duracao: '45m',
    classificacao: 80,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rgMfhcrVZjuy5b7Pn0KzCRCEnMX.jpg',
    generos: ['Drama', 'Sci-Fi & Fantasy'],
    pagina: '/the-flash'
  },
  {
    nome: 'Greys Anatomy',
    lacamento: '2005',
    duracao: '43m',
    classificacao: 82,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1HAm7sxXu9eGVvs8BIAlkCKGaTd.jpg',
    generos: ['Drama'],
    pagina: '/the-flash'
  },
  {
    nome: 'Legados (2018)',
    lacamento: '2018',
    duracao: '43m',
    classificacao: 86,
    cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/roFJeeBbcFYCaTfmKaCQ7wtCT5l.jpg',
    generos: ['Sci-Fi & Fantasy', 'Drama'],
    pagina: '/the-flash'
  }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) {}


    exibirserie(serie: Iserie){
      this.dadosService.gurdarDados('serie',serie);
      this.route.navigateByUrl('/dados-serie');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção!',
      message: 'Message <strong>Deseja realmente favoritar o filme?</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme Adicionado aos favoritos',
      duration: 2000,
      color:'success'
    });
    toast.present();
  }



}
