import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListaFilmes } from '../models/IFilmeApi.model';
import { ToastController} from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  lingua='pt-BR';
  regiao='BR';

  private apiURL='https://api.themoviedb.org/3/';
  private key='?api_key=5dbd402afc03613b27adb6e7cd9de5e3';

  constructor( private http: HttpClient, public toastController: ToastController) { }

   buscarFilmes(busca: string): Observable<IListaFilmes>{
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}$region=${this.regiao}&query=${busca}`;
    return this.http.get<IListaFilmes>(url).pipe(
    map(retorno=>retorno),
    catchError(erro=> this.exibirErro(erro))
    );
   }

    async exibirErro(e){
      const toast = await this.toastController.create({
        message:'Erro ao consultar a API',
        duration: 2000,
        color: 'danger',
        position: 'middle'

      });
      toast.present();
      return null;
    }
   }
