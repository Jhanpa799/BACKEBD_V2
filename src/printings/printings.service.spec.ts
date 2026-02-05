import { Test, TestingModule } from '@nestjs/testing';
import { PrintingsService } from './printings.service';

describe('PrintingsService', () => {
  let service: PrintingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrintingsService],
    }).compile();

    service = module.get<PrintingsService>(PrintingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
