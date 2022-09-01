import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  Res,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';
import { NotFoundError } from 'rxjs';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post('/crear')
  async create(@Body() pelicula: Pelicula): Promise<Pelicula> {
    const result = await this.peliculasService.create(pelicula);
    return result;
  }

  @Get()
  getAll(): Promise<Pelicula[]> {
    return this.peliculasService.getAll();
  }

  @Get(':id')
  async getOne(@Res() res, @Param('id') id): Promise<Pelicula> {
    const obtener = await this.peliculasService.getOne(id);
    if (!obtener) throw new NotFoundException('Pelicula no existe');
    return res.status(HttpStatus.OK).json({
      pelicula: obtener,
    });
  }

  @Put(':id')
  update(@Param('id') id, @Body() pelicula: Pelicula): Promise<Pelicula> {
    return this.peliculasService.update(id, pelicula);
  }

  @Delete(':id')
  async delete(@Res() res, @Param('id') id): Promise<Pelicula> {
    const borrar = await this.peliculasService.delete(id);
    if (!borrar) throw new NotFoundException('Pelicula no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Pelicula borrada',
      pelicula: borrar,
    });
  }
}
