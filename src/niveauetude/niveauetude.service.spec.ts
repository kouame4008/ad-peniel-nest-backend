import { Test, TestingModule } from '@nestjs/testing';
import { NiveauetudeService } from './niveauetude.service';

describe('NiveauetudeService', () => {
  let service: NiveauetudeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NiveauetudeService],
    }).compile();

    service = module.get<NiveauetudeService>(NiveauetudeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
