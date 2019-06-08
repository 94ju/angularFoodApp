import { Component,  Input, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../../recipe.model';
import { RecipieService } from '../../recipie.service';

@Component({
    selector:'app-recipie-item',
    templateUrl:'./recipe-item.component.html'
})
export class RecipeItemComponent{
    @Input() recipie: Recipie;
    // @Output() recipieSelected = new EventEmitter<void>();
    constructor(private recipieService:RecipieService){}
    // onRecipieDetail(){
    //     // this.recipieSelected.emit();
    // }
    onSelected(){
        this.recipieService.recipieSelected.emit(this.recipie); 
    }
    ngOnInit(){

    }
}