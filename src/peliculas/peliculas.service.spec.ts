import { Test, TestingModule } from '@nestjs/testing';
import { PeliculasService } from './peliculas.service';

describe('PeliculasService', () => {
  let service: PeliculasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeliculasService],
    }).compile();

    service = module.get<PeliculasService>(PeliculasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
