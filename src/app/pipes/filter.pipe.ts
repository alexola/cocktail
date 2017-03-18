import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(cocktails: any[], filters: any){

    return cocktails.filter(cocktail => cocktail.flavors[0]+ cocktail.flavors[1] === filters[0] + filters[1])

    // cocktails.forEach(function(cocktail){
    //   filters.forEach(function(filter){
    //     (cocktail.flavors).forEach(function(flavors){
    //       if(flavors === filter){
    //
    //       }
    //     })
    //   })
    // })
  }
}
