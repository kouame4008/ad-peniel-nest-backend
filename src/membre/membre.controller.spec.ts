import { Test, TestingModule } from '@nestjs/testing';
import { MembreController } from './membre.controller';

describe('MembreController', () => {
  let controller: MembreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MembreController],
    }).compile();

    controller = module.get<MembreController>(MembreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
