import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';
import { WorkerService } from '@/app/shared/services/worker/worker.service';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '@/app/components/header/header.module';
import { TableModule } from '@/app/components/table/table.module';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let workerService: WorkerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, HeaderModule, TableModule],
      declarations: [MainPageComponent],
      providers: [WorkerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    workerService = TestBed.inject(WorkerService);
  });

  it('should create  ', () => {
    expect(component).toBeTruthy();
  });

  it('should has worker', () => {
    expect(workerService.worker).toBeTruthy();
  });
});
