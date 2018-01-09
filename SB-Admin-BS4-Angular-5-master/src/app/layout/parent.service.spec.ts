import { TestBed, inject } from '@angular/core/testing';

import { parentService } from './parent.service';

describe('parentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [parentService]
    });
  });

  it('should be created', inject([parentService], (service: parentService) => {
    expect(service).toBeTruthy();
  }));
});
