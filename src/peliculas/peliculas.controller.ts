import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post('/crear')
  async createPelicula(@Body() datos: CreatePeliculaDto): Promise<Pelicula> {
    const result = await this.peliculasService.createPelicula(
      datos.nombre,
      datos.portada,
      datos.estreno,
      datos.director,
      datos.sinopsis,
      datos.genero,
      datos.duración,
      datos.trailer,
    );
    return result;
  }

  @Get()
  findAll() {
    return this.peliculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peliculasService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePeliculaDto: UpdatePeliculaDto,
  ) {
    return this.peliculasService.update(+id, updatePeliculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peliculasService.remove(+id);
  }
}
