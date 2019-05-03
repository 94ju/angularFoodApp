import {Component} from '@angular/core'
import { Recipie } from '../recipe.model';

@Component({
    selector:'app-recipieList',
    templateUrl:'./recipe-list.component.html'
})
export class RecipieListComponent{
    recipes : Recipie[] =[
        new Recipie('Pizza','Test Pizza','https://img.taste.com.au/n0QkSEPK/taste/2016/11/smoked-salmon-and-cucumber-sandwiches-79157-1.jpeg')
    ];   
    constructor(){}
    ngOnInit(){

    }
}