import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drinks } from './drinks';

@Injectable({
  providedIn: 'root'
})
export class CocktailRecipesService {

  private randomCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  private cocktailByNameUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

  constructor(private http: HttpClient) {
  }

  getRandonCocktail(): Observable<Drinks> {
    return this.http.get<Drinks>(this.randomCocktailUrl);
  }

  getCocktailByName(nameOfTheCocktail: string): Observable<Drinks> {
    return this.http.get<Drinks>(this.cocktailByNameUrl + nameOfTheCocktail);
  }
}
