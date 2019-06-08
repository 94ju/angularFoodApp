import { Component, OnInit, ElementRef, ViewChild, ViewChildren, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  constructor(private slservice:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName =this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngrient =new Ingredients(ingName,ingAmount);
    this.slservice.addIngredient(newIngrient);
   
  }

  onDelete(){
    console.log('check');
  }

}
