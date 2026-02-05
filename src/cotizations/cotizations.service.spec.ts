import { Test, TestingModule } from '@nestjs/testing';
import { CotizationsService } from './cotizations.service';

describe('CotizationsService', () => {
  let service: CotizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotizationsService],
    }).compile();

    service = module.get<CotizationsService>(CotizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
