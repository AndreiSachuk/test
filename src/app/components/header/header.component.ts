import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  startWith,
} from 'rxjs/operators';
import { WorkerService } from '@/app/services/worker.service';
import { WorkerUpdateData } from '@interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormService } from '@/app/shared/services/from/form.service';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  workerForm: FormGroup = this.formBuilder.group({
    timerInterval: [1000, [Validators.required, Validators.min(1)]],
    dataArraySize: [100, [Validators.required, Validators.min(1)]],
  });

  idsForm: FormControl<string> = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    private workerService: WorkerService,
    private formService: FormService
  ) {}

  ngOnInit() {
    this.workerForm.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
        startWith(this.workerForm.value),
        filter(() => this.workerForm.valid),
        untilDestroyed(this)
      )
      .subscribe((formValues: WorkerUpdateData) => {
        this.workerService.updateWorker(formValues);
      });

    this.idsForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), untilDestroyed(this))
      .subscribe((formValue: string) => {
        this.formService.setIds(formValue);
      });
  }
}
