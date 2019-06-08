import { Ingredients } from '../shared/ingredients.model';

export class ShoppingListService{
    private ingredients: Ingredients[] =[
        new Ingredients("chees",4),
        new Ingredients("bread",5),
       new Ingredients("Buns",8)
    ];

    getIngredients(){
        return this.ingredients;
    }
    addIngredient(ingredient:Ingredients){
        this.ingredients.push(ingredient);
    }
}