import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp  } from '@angular/http';

import { Movie }    from './movie';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {

  constructor(private http: Http, private jsonp: Jsonp) { }
  
  private movieUrl = 'https://api.themoviedb.org/3/movie/600?api_key=5abe72479c850246b35a60d027e29967';
 
     getMovie() {
      
       return this.http.get(this.movieUrl)
                        // ...and calling .json() on the response to return data
                         //.map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

}
