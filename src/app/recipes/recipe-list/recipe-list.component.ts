import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Test Recipe', 'This is a test Recipe', 'http://www.m5zn.com/newuploads/2016/11/30/jpg//m5zn_52f1919b5820553.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
