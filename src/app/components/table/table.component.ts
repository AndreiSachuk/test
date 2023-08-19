import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Element } from '@interfaces';
import { WorkerService } from '@/app/shared/services/worker/worker.service';
import { map, Observable } from 'rxjs';
import { AdditionalDataService } from '@/app/shared/services/additional-data/additional-data.service';

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

  ids$ = this.additionalDataService.ids$;

  constructor(
    private workerService: WorkerService,
    private additionalDataService: AdditionalDataService
  ) {}
}
