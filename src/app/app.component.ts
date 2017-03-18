import { Component } from '@angular/core';
import { CocktailComponent } from './cocktail/cocktail.component';
import { cocktails } from './cocktails';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cocktails are coming!';
  cocktails = cocktails;
  sabor = {
    acid : true,
    bitter :true,
    sour : true,
    sweet : true
  };


  performSearch(arg: string, arg1: string): void {
    console.log("arg ", arg);
    console.log("arg1 ", arg1);

    if(arg === "Sweet" ){
      this.cocktails =  [{
          name: 'Charlie',
          flavor: 'acid, sour',
          ingredients: '4.5 cl Bourbon Whiskey, 1.5 cl Sugar syrup , 3cl Fresh lemon juice.',
          preparation: "Shake with ice. Strain into ice-filled old-fashioned glass to serve on the rocks."

        }];
    }
  }
}
