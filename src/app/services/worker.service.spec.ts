import { TestBed } from '@angular/core/testing';
import { WorkerService } from './worker.service';
import { Element, WorkerUpdateData } from '@interfaces';

describe('WorkerService', () => {
  let service: WorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from worker', done => {
    const data: Element[] = [
      {
        id: '987',
        int: 5,
        float: '3.123456789012345678',
        color: 'red',
        child: { id: '1', color: 'blue' },
      },
      {
        id: '123',
        int: 10,
        float: '7.123456789012345678',
        color: 'green',
        child: { id: '2', color: 'yellow' },
      },
    ];

    service.getDataFromWorker().subscribe(elements => {
      expect(elements.length).toBe(data.length);

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const expected = data[i];

        expect(element.id).toBe(expected.id);
        expect(element.int).toBe(expected.int);
        expect(element.float).toBe(expected.float);
        expect(element.color).toBe(expected.color);
        expect(element.child.id).toBe(expected.child.id);
        expect(element.child.color).toBe(expected.child.color);
      }

      done();
    });

    const messageEvent = new MessageEvent('message', {
      data: data,
    });
    service.worker.dispatchEvent(messageEvent);
  });

  it('should update worker', () => {
    spyOn(service.worker, 'postMessage');

    const update: WorkerUpdateData = {
      timerInterval: 1000,
      dataArraySize: 1000,
    };

    service.updateWorker(update);

    expect(service.worker.postMessage).toHaveBeenCalledWith(update);
  });

  it('should close worker', () => {
    spyOn(service.worker, 'terminate');

    service.close();

    expect(service.worker.terminate).toHaveBeenCalled();
  });
});
