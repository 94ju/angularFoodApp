import {Component} from '@angular/core'
import { Recipie } from '../recipe.model';

@Component({
    selector:'app-recipie-list',
    templateUrl:'./recipe-list.component.html'
})
export class RecipieListComponent{
    recipes : Recipie[] =[
        new Recipie('Pizza','Test Pizza','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    ,    new Recipie('Pizza','Test Pizza','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    ,    new Recipie('chees pizza','Pizza mania','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    
    ];   
    constructor(){}
    ngOnInit(){

    }
}