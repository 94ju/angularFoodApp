import { Component } from '@angular/core';
import { Recipie } from './recipe.model';
import { RecipieService } from './recipie.service';


@Component({
    selector:'app-recipes',
    templateUrl:'./recipes.component.html',
    providers:[RecipieService]
})

export class RecipiesComponent{
    selectedRecipie : Recipie;
    onRecipieDetail(event){
        console.log(event);
        alert(event);
    }
}