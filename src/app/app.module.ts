import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { AppComponent } from './app.component';
import {RecipiesComponent} from './recipes/recipes.component';
import {RecipieListComponent} from './recipes/recipe-list/recipe-list.component'
import { RecurseVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { RecipieDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
