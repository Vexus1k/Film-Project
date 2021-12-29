import {ApplicationRef, Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../../models/movie";
import {Observable} from "rxjs";
import {HttpService} from "../../../services/http.service";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-show-search-results',
  templateUrl: './show-search-results.component.html',
  styleUrls: ['./show-search-results.component.css']
})
export class ShowSearchResultsComponent implements OnInit {
  movies: Movie[];
  content: string;


  constructor(private http: HttpService, private route: ActivatedRoute) { }

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
