import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {NgModel} from "@angular/forms";
import {HttpService} from "../../services/http.service";
import {Observable} from "rxjs";
import {Movie} from "../../models/movie";
import {AppComponent} from "../../app.component";
import {switchMap} from "rxjs/operators";


@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css'],

})
export class SearchFieldComponent implements OnInit {
  title = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  go_next(){
    setTimeout(() => {
        this.router.navigate(['/movies/' + this.title])
      }
      , 2000);
  }


}
