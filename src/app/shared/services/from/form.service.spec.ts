import { TestBed } from '@angular/core/testing';
import { FormService } from './form.service';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should set ids correctly', () => {
    const ids = 'id1, id2, id3';
    service.setIds(ids);

    service.ids$.subscribe(updatedIds => {
      expect(updatedIds).toEqual(['id1', 'id2', 'id3']);
    });
  });

  it('should set ids correctly', () => {
    const ids = 'id1,id2,id3';
    service.setIds(ids);

    service.ids$.subscribe(updatedIds => {
      expect(updatedIds).toEqual(['id1', 'id2', 'id3']);
    });
  });
});
