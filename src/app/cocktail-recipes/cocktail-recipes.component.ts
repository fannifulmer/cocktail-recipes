import { Component, OnInit } from '@angular/core';
import { CocktailRecipesService } from './cocktail-recipes.service';
import { Drink, Drinks, Ingredients } from './drinks';

@Component({
  selector: 'app-cocktail-recipes',
  templateUrl: './cocktail-recipes.component.html',
  styleUrls: ['./cocktail-recipes.component.css']
})
export class CocktailRecipesComponent implements OnInit {
  public cocktail!: Drink;
  public ingredients: string[] = [];

  constructor(private cocktailRecipesService: CocktailRecipesService) {
    this.cocktailRecipesService = cocktailRecipesService;
  }

  ngOnInit(): void {
    this.getRandomCocktail();
  }

  public getRandomCocktail(): void {
    this.cocktailRecipesService.getRandonCocktail().subscribe((data: Drinks) => {
      this.cocktail = data.drinks[0];
      this.setIngredients();
    })
  }

  public getCocktailByName(cocktailName: string): void {
    this.cocktailRecipesService.getCocktailByName(cocktailName).subscribe(
      (drink: Drinks) => {
        if (drink) {
          if (drink.drinks.length === 1) {
            this.cocktail = drink.drinks[0];
          }
        }
      })
  }

  private setIngredients() {
    let ingredients: string[] = [];
    let mesurements: string[] = [];
    this.ingredients = [];

    Object.entries(this.cocktail).map(entry => {
      let key = entry[0];
      let value = entry[1];

      if (key.startsWith('strIngredient') && value !== null) {
        ingredients.push(value);
      }

      if (key.startsWith('strMeasure') && value !== null) {
        mesurements.push(value);
      }
    });

    mesurements.forEach((el, index) => {
      this.ingredients.push(el + ingredients[index]);
    });
  }
}
