import { Test, TestingModule } from '@nestjs/testing';
import { PrintingsController } from './printings.controller';
import { PrintingsService } from './printings.service';

describe('PrintingsController', () => {
  let controller: PrintingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrintingsController],
      providers: [PrintingsService],
    }).compile();

    controller = module.get<PrintingsController>(PrintingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
