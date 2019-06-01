import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] =[
    new Ingredients("chees",4),
     new Ingredients("bread",5),
     new Ingredients("Buns",8)
  ];
  constructor() { }

  ngOnInit() {
  }
  OnIngredientAdded(ingredient:Ingredients){
    this.ingredients.push(ingredient);
  }

}
