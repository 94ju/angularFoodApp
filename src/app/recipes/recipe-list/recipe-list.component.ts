import {Component, EventEmitter, Output} from '@angular/core'
import { Recipie } from '../recipe.model';
import { RecipieService } from '../recipie.service';

@Component({
    selector:'app-recipie-list',
    templateUrl:'./recipe-list.component.html'
})
export class RecipieListComponent{
    @Output() recipieWasSelected =new EventEmitter<Recipie>()
    recipies:Recipie[]=[];
   
    constructor(private recipiservie:RecipieService){}
    onRecipieSelected(recipe:Recipie){
        
        this.recipieWasSelected.emit(recipe);
    }
    ngOnInit(){
        this.recipies=this.recipiservie.getRecipies();
    }
}