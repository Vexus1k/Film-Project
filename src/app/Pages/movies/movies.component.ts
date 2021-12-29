import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Observable} from "rxjs";
import {Movie} from "../../models/movie";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  content: string;


  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.content = params['title'];
      this.http.getMovieFromTitle(this.content).subscribe((response) => {
        console.log(response)
        this.movies = response;
      });

    });
  }
}
