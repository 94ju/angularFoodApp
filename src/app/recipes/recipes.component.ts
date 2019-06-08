import { Component, OnInit } from '@angular/core';
import { Recipie } from './recipe.model';
import { RecipieService } from './recipie.service';


@Component({
    selector:'app-recipes',
    templateUrl:'./recipes.component.html',
    providers:[RecipieService]
})

export class RecipiesComponent implements OnInit{
    selectedRecipie : Recipie;
    constructor(private recipieService:RecipieService){}

    ngOnInit(){
        this.recipieService.recipieSelected.subscribe(
            (recipie:Recipie)=>{
                this.selectedRecipie=recipie;
            }
        )
    }
    // onRecipieDetail(event){
    //     console.log(event);
    //     alert(event);
    // }
}