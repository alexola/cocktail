import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {


  searchMethod : string = 'flavors';
  initialFilters = ['acid','sour','sweet','bitter'];
  customFilters = [] ;
  filterActive = false
  filters:  Array<Object> = []
  // flavor: Array<string> = [];
  cocktails= [
    {
    name: 'Whisky Sour',
    image:'../assets/public/images/whiskey-sour.jpg',
    flavors: ['sour','acid' ],
    ingredients: ['4.5 cl Bourbon Whiskey','1.5 cl Sugar syrup', '3cl Fresh Lemon Juice'],
    preparation: "Shake with ice. Strain into ice-filled old-fashioned glass to serve on the rocks."
    },
    {
    name: 'Long Island Ice Tea',
    image:'../assets/public/images/long.jpg',
    flavors: ['sweet', 'bitter'],
    ingredients: ['1,5cl Tequila', '1,5cl Gin', '1,5cl Rum',  '1,5cl Vodka',  '1,5cl Triple Sec', '1cl Lemon juice', '3cl Syrup', 'Dash of Cola'],
    preparation: "Shake with ice. Strain into ice-filled old-fashioned glass to serve on the rocks."
    },
    {
    name: 'Lynchburg Lemonade',
    image:'../assets/public/images/lynchburg.jpg',
    flavors: ['sour', 'bitter'],
    ingredients: ['6cl Jack Daniels', '3cl Triple sec', '2cl Sour Mix'],
    preparation: "Add all ingredients into highball glass filled with ice. Stir gently. Garnish with lemon spiral."
    },
    {

    name: 'Daiquiri ',
    image:'../assets/public/images/daiquiri.jpg',
    flavors: ['sweet', 'acid'],
    ingredients: ['4,5cl Rum', '2,5cl Lime juice', '1,5cl Syrup '],
    preparation: "Shake with ice. Strain into the glass previously cold, and put a lime slice on the side."
    },
    {

    name: 'Charlie Margarita Wey ',
    image:'../assets/public/images/margarita.jpg',
    flavors: ['sweet', 'acid'],
    ingredients: ['3,5cl Tequila', '1,5cl Lime Juice', '2cl Contreau'],
    preparation: "You arent man enough to do it or even drinking it"
    },
    {
    name:'Mai Tai',
    image:'../assets/public/images/maitai.jpg',
    flavors: ['sweet', 'acid'],
    ingredients: ['4cl White Rum', '2cl Dark Rum', '1,5cl Contreau', '1,5cl Orgeat syrup', '1cl Lime Juice'],
    preparation: "Shake and strain into highball glass. Garnish with pineapple spear, mint leaves."
    },
    {
    name:'White Lady',
    image:'../assets/public/images/whitey.jpg',
    flavors: ['sour', 'acid'],
    ingredients: ['4cl Gin', '3cl Triple Sec', '2cl Lime Juice '],
    preparation: "Add all ingredients into cocktail shaker filled with ice."
    },
    {
    name:'Americano',
    image:'../assets/public/images/americano.jpg',
    flavors: ['sour', 'bitter'],
    ingredients: ['3cl Campari', '3cl Red Vermouth', 'Splash of soda water'],
    preparation: "Mix the ingredients directly in an old-fashioned glass filled with ice-cubes, add a splash of soda water and garnish with half orange slice."
    },
    {
    name:'Old Fashioned',
    image:'../assets/public/images/oldfashion.jpg',
    flavors: ['sweet', 'bitter'],
    ingredients: ['4,5cl Bourbon or Rye Whiskey', '2 Dashes of Angostura', '1 Sugar Cube' ,'Splash of still water'],
    preparation: "Place sugar cube in old-fashioned glass and saturate with bitters, add a dash of plain water. Muddle until dissolve. Fill the glass with ice cubes and add whiskey. Garnish with orange slice and a cocktail cherry."
    },
    {
    name:'Clover Club',
    image:'../assets/public/images/clover.jpg',
    flavors: ['sour', 'bitter'],
    ingredients: ['4,5cl Gin', '1,5cl Raspberry Syrup', '1,5cl Fresh Lemon Juice', '2cl Eggwhite '],
    preparation: "Pour all ingredients into cocktail shaker filled with ice. Shake well.Strain into cocktail glass."
    },
    {
    name:'Sidecar',
    image:'../assets/public/images/sidecar.jpg',
    flavors: ['sour', 'acid'],
    ingredients: ['5cl Cognac', '3cl Triple Sec', '2cl Fresh Lemon Juice'],
    preparation: "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass."
    },
    {
    name:'Bramble',
    image:'../assets/public/images/bramble.jpg',
    flavors: ['sweet', 'bitter'],
    ingredients: ['4cl Gin', '1cl Syrup', '1,5cl Blackberry Liquer', '1,5cl Fresh Lemon Juice'],
    preparation: "Pour all ingredients into cocktail shaker filled with ice. Shake well and strain into cocktail glass."
    },
  ]

  constructor() { }

  ngOnInit() {
    console.log(this.cocktails)


  }

  addFilters(event){
  this.filterActive = true
  this.customFilters.push(event.target.value)
  this.filters = this.customFilters
  console.log("added " + this.filters)
  console.log(this.cocktails);


}

showDetails(event, preparation){
  this.filters=this.customFilters
  console.log("hey im alive", preparation)
};

removeFilters(event){
  this.filterActive = false;
  let index = event.target.value.indexOf(this.customFilters)
  this.customFilters.splice(index, 1)
  if(this.customFilters.length == 0){
  this.filters = this.initialFilters}
  console.log("erase"+ this.filters)

}


}
