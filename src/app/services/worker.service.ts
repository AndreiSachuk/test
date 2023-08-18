import { Injectable } from '@angular/core';
import { Child, Element, WorkerUpdateData } from '@interfaces';
import { fromEvent, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  worker: Worker = new Worker(new URL('../worker/app.worker', import.meta.url));

  getDataFromWorker(): Observable<Element[]> {
    return fromEvent<MessageEvent<Element[]>>(this.worker, 'message').pipe(
      map((event: MessageEvent<Element[]>) =>
        event.data.map(
          el =>
            new Element(
              el.id,
              el.int,
              el.float,
              el.color,
              new Child(el.child.id, el.child.color)
            )
        )
      )
    );
  }

  updateWorker(update: WorkerUpdateData): void {
    this.worker.postMessage(update);
  }

  close(): void {
    this.worker.terminate();
  }
}
