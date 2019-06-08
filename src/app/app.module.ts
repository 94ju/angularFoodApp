import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { AppComponent } from './app.component';
import {RecipiesComponent} from './recipes/recipes.component';
import {RecipieListComponent} from './recipes/recipe-list/recipe-list.component'
import { RecurseVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { RecipieDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipieService } from './recipes/recipie.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers:[ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
