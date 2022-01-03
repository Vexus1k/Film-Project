import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {HttpService} from "../services/http.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {
  title: boolean;
  plot: boolean;
  image: boolean;

  constructor(private http: HttpService) { }

  sendTermFromTitleToService(){
    this.http.changeTermForTitle(this.title)
  }
  sendTermFromPlotToService(){
    this.http.changeTermForPlot(this.plot)
  }
  sendTermFromImageToService(){
    this.http.changeTermForImage(this.image)
  }
}
