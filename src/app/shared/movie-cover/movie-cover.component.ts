import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.css']
})
export class MovieCoverComponent implements OnInit{
  @Input() movie: Movie;
  titleShow: boolean;
  constructor(private http: HttpService) {
  }
  ngOnInit() {
    this.http.currentMessage.subscribe(result => this.titleShow = result)
  }
  show(){
    console.log(this.titleShow)
  }



}
