import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailRecipesComponent } from './cocktail-recipes/cocktail-recipes.component';
import { CocktailRecipesService } from './cocktail-recipes/cocktail-recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    CocktailRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
