import { TestBed } from '@angular/core/testing';

import { UicomponentsService } from './uicomponents.service';

describe('UicomponentsService', () => {
  let service: UicomponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UicomponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
