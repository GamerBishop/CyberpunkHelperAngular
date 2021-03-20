import { TestBed } from '@angular/core/testing';

import { HeroServService } from './hero-serv.service';

describe('HeroServService', () => {
  let service: HeroServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
