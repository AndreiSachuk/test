import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { WorkerService } from '@/app/shared/services/worker/worker.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WorkerService],
})
export class MainPageComponent implements OnDestroy {
  constructor(private workerService: WorkerService) {}

  ngOnDestroy(): void {
    this.workerService.close();
  }
}
