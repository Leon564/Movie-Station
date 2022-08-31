import { Module } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PeliculaSchema } from './entities/pelicula.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'pelicula', schema: PeliculaSchema }]),
  ],
  controllers: [PeliculasController],
  providers: [PeliculasService],
})
export class PeliculasModule {}
