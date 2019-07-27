import { Recipie } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipieService{
    constructor(private slService:ShoppingListService){}
    recipieSelected =new EventEmitter<Recipie>();
    recipes : Recipie[] =[
        new Recipie('Pizza1',
        'Test Pizza',
        'https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg',
        [
            new Ingredients('Meat',1),
            new Ingredients('cheese',2)
        ]
        )
    ,    new Recipie('Pizza2',
    'Test Pizza',
    'https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg',
    [
        new Ingredients('Meat',1),
        new Ingredients('cheese',2)
    ]
    )
    ,    new Recipie('chees pizza',
    'Pizza mania',
    'https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg',
    [
        new Ingredients('Meat',1),
        new Ingredients('cheese',2)
    ]
    )
    
    ];  

    getRecipies(){
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients:Ingredients[]){
        this.slService.addIngredients(ingredients);
    }
}