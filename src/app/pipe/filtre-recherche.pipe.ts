import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreRecherche'
})
export class FiltreRecherchePipe implements PipeTransform {

  transform(items: any[], term: string): any[] {

    if (!items || !term) {
      return items;
    }
    console.log(items)
    return items.filter(item =>
      item.Nom.toLowerCase().includes(term.toLowerCase())
    );
  }

}
