import { Injectable } from '@angular/core';
import { WakoHttpRequestService } from '@wako-app/mobile-sdk';
import { map } from 'rxjs/operators';

@Injectable()
export class OmdbApiService {
  protected basUrl = 'http://www.omdbapi.com/?apikey=';
  constructor() {
    //this.getOMDBRatings();
  }
  movie: IMovie;

  getOMDBRatings(imdbID: string) {
    var apikey = '9ff50eff';
    return WakoHttpRequestService.get<any>(this.basUrl+`${apikey}&i=${imdbID}`);
  }

  getRatings(imdbID: string){
    return this.getOMDBRatings(imdbID)
  .pipe(
    map((data:any)=>this.movie=data)
  )
  }
}

// export interface RatingsDTO{
//   title:  string;
//   year: string;
//   ratings:RatingsSearchResultsDTO[];
// }

export interface Ratings{
  source: string;
  value: string;
}

export interface IMovie{
  Title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  ratings: Ratings[];
  metascore: string;
  imdbrating: string;
  imdbVotes: string;
  imdbid: string;
  type: string;
  dvd: string;
  boxOffice: string;
  production: string;
  website: string;
  response: string;
  }
//export interface