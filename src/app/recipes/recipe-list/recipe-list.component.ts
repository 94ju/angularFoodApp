import {Component, EventEmitter, Output} from '@angular/core'
import { Recipie } from '../recipe.model';

@Component({
    selector:'app-recipie-list',
    templateUrl:'./recipe-list.component.html'
})
export class RecipieListComponent{
    @Output() recipieWasSelected =new EventEmitter<Recipie>()
    recipes : Recipie[] =[
        new Recipie('Pizza1','Test Pizza','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    ,    new Recipie('Pizza2','Test Pizza','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    ,    new Recipie('chees pizza','Pizza mania','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    
    ];   
    constructor(){}
    onRecipieSelected(recipe:Recipie){
        this.recipieWasSelected.emit(recipe);
    }
    ngOnInit(){

    }
}