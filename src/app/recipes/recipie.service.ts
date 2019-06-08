import { Recipie } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipieService{
    recipieSelected =new EventEmitter<Recipie>();
    recipes : Recipie[] =[
        new Recipie('Pizza1','Test Pizza','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    ,    new Recipie('Pizza2','Test Pizza','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    ,    new Recipie('chees pizza','Pizza mania','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    
    ];  

    getRecipies(){
        return this.recipes.slice();
    }
    
}