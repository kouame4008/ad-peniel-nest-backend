import { Test, TestingModule } from '@nestjs/testing';
import { NiveauetudeController } from './niveauetude.controller';

describe('NiveauetudeController', () => {
  let controller: NiveauetudeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NiveauetudeController],
    }).compile();

    controller = module.get<NiveauetudeController>(NiveauetudeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
