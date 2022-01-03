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
  plotShow: boolean;
  imageShow: boolean;

  constructor(private http: HttpService) {
  }
  ngOnInit() {
    this.http.termResultForTitle.subscribe(result => this.titleShow = result);
    this.http.termResultForPlot.subscribe(result => this.plotShow = result);
    this.http.termResultForImage.subscribe(result => this.imageShow = result);
  }
  show(){
    console.log(this.titleShow)
  }
  setImageStyle(){
    if(this.imageShow == true)
    {
      return{
        visibility: `hidden`
      };
    }
  }


}
