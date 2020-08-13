import { TestBed } from '@angular/core/testing';

import { CardGameGeneratorService } from './card-game-generator.service';

describe('CardGameGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardGameGeneratorService = TestBed.get(CardGameGeneratorService);
    expect(service).toBeTruthy();
  });
});
