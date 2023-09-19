import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
recipes:Recipe[]=[
  new Recipe('Chicken Rolls','This a simple lunch recipe','https://www.acouplecooks.com/wp-content/uploads/2023/02/Veggie-Wrap-004.jpg'),
  new Recipe('Mushroom Pasta w/ Goat Cheese','This a simple dinner recipe','https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg')

];

 constructor() {
 }

  ngOnInit(): void {
  }
}
