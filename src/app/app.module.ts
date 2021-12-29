import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { MovieDetailsComponent } from './Pages/movies/movie-details/movie-details.component';
import { MovieCoverComponent } from './shared/movie-cover/movie-cover.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesComponent } from './Pages/categories/categories.component';
import { MoviesInCategoryComponent } from './Pages/categories/movies-in-category/movies-in-category.component';
import {PageNotFoundComponent} from "./Pages/page-not-found/page-not-found.component";
import { YearsComponent } from './Pages/years/years.component';
import { MoviesInYearComponent } from './Pages/years/movies-in-year/movies-in-year.component';
import { AddMovieComponent } from './Pages/add-movie/add-movie.component';
import {FormsModule} from "@angular/forms";
import { SearchFieldComponent } from './Pages/search-field/search-field.component';
import { CheckBoxComponent } from './check-box/check-box.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    MovieCoverComponent,
    CategoriesComponent,
    MoviesInCategoryComponent,
    PageNotFoundComponent,
    YearsComponent,
    MoviesInYearComponent,
    AddMovieComponent,
    SearchFieldComponent,
    CheckBoxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
