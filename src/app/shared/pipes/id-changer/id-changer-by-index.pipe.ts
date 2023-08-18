import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idChangerByIndex',
})
export class IdChangerByIndexPipe implements PipeTransform {
  transform(value: string, i: number, changes: string[] | null): string {
    return changes && i < changes?.length ? changes[i] ?? changes[i] : value;
  }
}
