import { TestBed } from '@angular/core/testing';

import { EstadoTiempoService } from './estado-tiempo.service';

describe('EstadoTiempoService', () => {
  let service: EstadoTiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoTiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
