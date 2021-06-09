/* eslint-disable @typescript-eslint/naming-convention */
export interface IFilmeApi{
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  orginal_title?: string;
  orginal_language?: string;
  title?: string;
  backdrop_path: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_everage?: number;


  }

export interface IListaFilmes{
page: number;
results: IFilmeApi[];
total_results: number;
total_pages: number;

}


