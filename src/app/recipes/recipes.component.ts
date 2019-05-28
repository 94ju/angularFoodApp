import { Component } from '@angular/core';
import { Recipie } from './recipe.model';


@Component({
    selector:'app-recipes',
    templateUrl:'./recipes.component.html'
})

export class RecipiesComponent{
    selectedRecipie : Recipie;
    onRecipieDetail(event){
        console.log(event);
        alert(event);
    }
}