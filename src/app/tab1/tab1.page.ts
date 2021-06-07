import { Router, Routes } from '@angular/router';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/Ifilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo  = 'Videos App';

  listaVideos: IFilme[] = [
    {
      nome:'Superman e Lois (2021)',
      lancamento: 'Action & Adventure',
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg',
      generos: ['Drama', ' 1h 4m'],
      pagina: '/superman'
    },
    {
      nome:'Godzilla vs. Kong (2021)',
      lancamento: 'Ação, Aventura, Ficção científica',
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg',
      generos: ['Drama', '1h 52m'],
      pagina: '/godizilla'
    },
    {
      nome:'Cruella',
      lancamento: '28/05/2021 (BR)',
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg',
      generos: ['Comédia', 'Crime', '2h 14m'],
      pagina: '/godizilla'
    },
    {
      nome:'Army of the Dead: Invasão em Las Vegas (2021)',
      lancamento: '14/05/2021 (US)',
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kn72J6BFcN71VYOl8sTVeo7x9ph.jpg',
      generos: ['Ação', 'Terror', 'Thriller', 'Crime', '2h 28m'],
      pagina: '/godizilla'
    },
    {
      nome:'Infiltrado (2021)',
      lancamento: '27/05/2021 (BR)',
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dAtAp4IeT6EYGhewfnNNhalobme.jpg',
      generos: ['Ação', 'Crime', '1h 59m'],
      pagina: '/godizilla'
    }
  ];


  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosServices: DadosService,
    public route: Router ) {}

    exibirFilme(filme: IFilme){
this.dadosServices.gurdarDados('filme', filme);
this.route.navigateByUrl('/dados-filme');
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
