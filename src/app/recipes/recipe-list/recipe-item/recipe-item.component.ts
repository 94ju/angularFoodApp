import { Component,  Input, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../../recipe.model';

@Component({
    selector:'app-recipie-item',
    templateUrl:'./recipe-item.component.html'
})
export class RecipeItemComponent{
    @Input() recipie: Recipie;
    @Output() recipieSelected = new EventEmitter<void>();
    onRecipieDetail(){
        this.recipieSelected.emit();
    }
    ngOnInit(){

    }
}