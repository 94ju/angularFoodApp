import { Component, OnInit, ElementRef, ViewChild, ViewChildren, EventEmitter, Output } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  @Output() ingredientAdded=new EventEmitter<Ingredients>()
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName =this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngrient =new Ingredients(ingName,ingAmount);
    this.ingredientAdded.emit(newIngrient);
  }

}
