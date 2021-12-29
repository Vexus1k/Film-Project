import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./Pages/movies/movies.component";
import {MovieDetailsComponent} from "./Pages/movies/movie-details/movie-details.component";
import {PageNotFoundComponent} from "./Pages/page-not-found/page-not-found.component";
import {CategoriesComponent} from "./Pages/categories/categories.component";
import {MoviesInCategoryComponent} from "./Pages/categories/movies-in-category/movies-in-category.component";
import {YearsComponent} from "./Pages/years/years.component";
import {MoviesInYearComponent} from "./Pages/years/movies-in-year/movies-in-year.component";
import {AddMovieComponent} from "./Pages/add-movie/add-movie.component";
import {ShowSearchResultsComponent} from "./Pages/search-field/show-search-results/show-search-results.component";

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full' },
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent,},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/:category', component: MoviesInCategoryComponent},
  {path: 'years', component: YearsComponent},
  {path: 'years/:year', component: MoviesInYearComponent},
  {path: 'add-movie', component: AddMovieComponent},
  {path: 'search-bar-results', component: MoviesComponent},
  {path: 'search-bar-results/:title', component: ShowSearchResultsComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
