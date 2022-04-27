import { newArray } from '@angular/compiler/src/util';

export interface Drinks {
    drinks: Array<Drink>;
}

export interface Drink {
    idDrink: number;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strInstructions: string;
}

export interface Ingredients {
    measurement: string;
    type: string;
}