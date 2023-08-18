import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { WorkerService } from '@/app/services/worker.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnDestroy {
  constructor(private workerService: WorkerService) {}

  ngOnDestroy(): void {
    this.workerService.close();
  }
}
