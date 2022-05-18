import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTag'
})
export class FilterTagPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args)
      return value;

    return value.filter(
      (item: { listOfTags: any; }) => {

        for (let tag of item.listOfTags) {

          if (tag.tag_name.toLowerCase().indexOf(args.toLowerCase()) > -1)
          {  //this.number = 1;
            return (tag.tag_name.toLowerCase().indexOf(args.toLowerCase()) > -1)
          }

        }
        return false;


      });



  }
}
