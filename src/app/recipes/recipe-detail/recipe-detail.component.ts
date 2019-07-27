import { Component, Input } from '@angular/core';
import { Recipie } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipieService } from '../recipie.service';

@Component({
    selector:'app-recipie-detail',
    templateUrl:'./recipe-detail.component.html'
})
export class RecipieDetailComponent{
   @Input() recipie :Recipie;
   constructor(private recipieService:RecipieService){}

    onAddToShoppingList(){
        this.recipieService.addIngredientsToShoppingList(this.recipie.ingredients);
    }
}