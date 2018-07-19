import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe [] = [
  new Recipe('Test Recipe', 'This is a test Recipe', 'https://www.google.de/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi8lqfVuKncAhWMCOwKHQrkAFUQjRx6BAgBEAU&url=http%3A%2F%2Fwww.kraftrecipes.com%2Frecipes%2Fquick-jambalaya-recipe-56799.aspx&psig=AOvVaw3O-nHetU-wlMNWD-q9AepF&ust=1532030541432538')
];

  constructor() { }

  ngOnInit() {
  }

}
