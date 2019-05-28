import { Component, Input } from '@angular/core';
import { Recipie } from '../recipe.model';

@Component({
    selector:'app-recipie-detail',
    templateUrl:'./recipe-detail.component.html'
})
export class RecipieDetailComponent{
   @Input() recipie :Recipie;
}