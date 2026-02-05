import { Test, TestingModule } from '@nestjs/testing';
import { CotizationsController } from './cotizations.controller';
import { CotizationsService } from './cotizations.service';

describe('CotizationsController', () => {
  let controller: CotizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotizationsController],
      providers: [CotizationsService],
    }).compile();

    controller = module.get<CotizationsController>(CotizationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
