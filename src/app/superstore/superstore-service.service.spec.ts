/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuperStoreService } from './superstore-service.service';

describe('SharepointServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperStoreService]
    });
  });

  it('should ...', inject([SuperStoreService], (service: SuperStoreService) => {
    expect(service).toBeTruthy();
  }));
});
