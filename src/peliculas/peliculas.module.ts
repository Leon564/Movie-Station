import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';

@Module({
  controllers: [PeliculasController],
  providers: [PeliculasService]
})
export class PeliculasModule {}
