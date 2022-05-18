import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {

  number: number = 0

  transform(value: any, args?: any): any {
    if (!args)
      return value;


    return value.filter( (item: { title: string; }) => item.title.toLowerCase().indexOf(args.toLowerCase()) > -1);

  }
}
