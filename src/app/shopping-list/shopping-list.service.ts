import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    changedIngredients = new EventEmitter<Ingredients[]>();
    private ingredients: Ingredients[] =[
        new Ingredients("chees",4),
        new Ingredients("bread",5),
       new Ingredients("Buns",8)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient:Ingredients){
        this.ingredients.push(ingredient);
        this.changedIngredients.emit(this.ingredients.slice())
    }
}