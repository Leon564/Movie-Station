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
  constructor(private readonly peliculasService: PeliculasService) { }

  @Post('/create')
  async create(@Res() res, @Body() CreatePeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    const result = await this.peliculasService.Create(CreatePeliculaDto);
    return res.status(HttpStatus.OK).json({
      mensaje: 'Pelicula creada correctamente',
      result
    })

  }

  @Get('/')
  async findAll(@Res() res) {
    const GetAll = await this.peliculasService.getAll();
    return res.status(HttpStatus.OK).json({
      mensaje: 'Listado de todos los administradores',
      GetAll
    });
  }

  @Get(':id')
  async getOne(@Res() res, @Param('id') id): Promise<Pelicula> {
    const obtener = await this.peliculasService.getOne(id);
    if (!obtener) throw new NotFoundException('La Pelicula no existe');
    return res.status(HttpStatus.OK).json({
      mensaje: 'Pelicula obtenida por id',
      obtener
    });
  }

  @Put(':id')
  async update(@Res() res, @Param('id') id, @Body() UpdatePeliculaDto: UpdatePeliculaDto): Promise<Pelicula> {
    const updatePelicula = await this.peliculasService.update(id, UpdatePeliculaDto);
    if (!updatePelicula) throw new NotFoundException("El administrador no existe")
    return res.status(HttpStatus.OK).json({
      mensaje: 'Pelicula editada con exito',
      updatePelicula
    })
  }

  @Delete(':id')
  async delete(@Res() res, @Param('id') id) {
    const borrar = await this.peliculasService.delete(id);
    if (!borrar) throw new NotFoundException('La pelicula no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Pelicula borrada con exito',
      borrar
    });
  }
}
