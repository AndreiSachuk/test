import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Element } from '@interfaces';
import { WorkerService } from '@/app/services/worker.service';
import { map, Observable } from 'rxjs';
import { FormService } from '@/app/shared/services/from/form.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  dataForShow$: Observable<Element[]> = this.workerService
    .getDataFromWorker()
    .pipe(map(elements => elements.slice(-10)));

  ids$ = this.formService.ids$;

  constructor(
    private workerService: WorkerService,
    private formService: FormService
  ) {}
}
