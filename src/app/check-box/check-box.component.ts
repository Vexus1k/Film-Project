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
  title: string;
  checked: boolean;

  constructor(private http: HttpService) { }

  sendValueFromTitleToService(){
    this.http.changeMessage(this.checked)
  }
}
