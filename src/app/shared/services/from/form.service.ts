import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private ids: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public readonly ids$: Observable<string[]> = this.ids.asObservable();

  setIds(ids: string) {
    this.ids.next(
      ids
        .split(',')
        .map(el => el.trim())
        .filter(Boolean)
    );
  }
}
