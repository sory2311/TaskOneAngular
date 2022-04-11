import { TestBed } from '@angular/core/testing';

import { ArregloService } from './arreglo.service';

describe('ArregloService', () => {
  let service: ArregloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArregloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
