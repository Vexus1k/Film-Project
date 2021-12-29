import { Component, OnInit } from '@angular/core';
import {ParamMap} from "@angular/router";
import {Movie} from "../../models/movie";
import {Observable} from "rxjs";
import {HttpService} from "../../services/http.service";
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  model: Partial<Movie> = {};
  years: string[] = [];
  categories: string[] = [];


  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getYears().subscribe(years => this.years = years);
    this.http.getCategories().subscribe(categories => this.categories = categories);
  }

  send(){
    this.http.postMovie(this.model as Movie).subscribe(
      results => console.log(results),
      error => console.log(error)
    );
  }


  show(item: NgModel){
    console.log(item);
  }

}
