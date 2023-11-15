import { TestBed } from '@angular/core/testing';

import { BaseService } from './basse.service';

describe('GetTaskService', () => {
  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
