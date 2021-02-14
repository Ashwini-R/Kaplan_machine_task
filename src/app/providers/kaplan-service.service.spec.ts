import { TestBed } from '@angular/core/testing';

import { KaplanServiceService } from './kaplan-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('KaplanServiceService', () => {
  let service: KaplanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(KaplanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
