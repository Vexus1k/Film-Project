import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Movie} from "../models/movie";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {filter, map, switchMap, tap} from "rxjs/operators";
import FuzzySearch from 'fuzzy-search';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://localhost:3000/movies/';
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}


  private messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();
  changeTerm(term: boolean) {
    this.messageSource.next(term)
  }

  postMovie(movie: Movie): Observable<Movie>{
    return this.httpClient.post<Movie>(this.url, movie).pipe(tap(console.log));
  }

  deleteMovie(id: string){
    return this.httpClient.delete(this.url + id).pipe(tap(console.log))
  }

  getMovies(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>('http://localhost:3000/movies/');
  }

  getMovie(id: string): Observable<Movie>{
    return this.httpClient.get<Movie>('http://localhost:3000/movies/' + id);
  }
  getMovieFromTitle(title: string): Observable<Movie[]>{
    return this.getMovies().pipe(
      map(movies => {const searcher = new FuzzySearch(movies, ['title', 'plot'], {
      caseSensitive: true,
    });
        console.log(title)
        console.log(searcher.search(title))
        return searcher.search(title)
      }
      )
      // map(movies => movies.filter( movie => movie.title.includes(title) || movie.plot.includes(title)))
    )
  }

  getCategories(): Observable<string[]>{
    return this.httpClient.get<string[]>('http://localhost:3000/categories');
  }

  getMoviesFromCategory(category: string): Observable<Movie[]>{
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.category === category ))
    )
  }

  getYears(): Observable<string[]>{
    return this.httpClient.get<string[]>('http://localhost:3000/years');
  }

  getMoviesFromYear(year: string): Observable<Movie[]>{
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.year === year ))
    )
  }
}
