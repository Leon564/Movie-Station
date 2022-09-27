import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  NotFoundException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Pelicula } from './entities/pelicula.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Peliculas')
@ApiBearerAuth('JWT-auth')
@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(
    @Res() res,
    @Body() CreatePeliculaDto: CreatePeliculaDto,
  ): Promise<Pelicula> {
    const result = await this.peliculasService.Create(CreatePeliculaDto);
    return res.status(HttpStatus.OK).json({
      mensaje: 'Pelicula creada correctamente',
      result,
    });
  }

  @Get('/')
  async findAll(@Res() res) {
    const GetAll = await this.peliculasService.getAll();
    return res.status(HttpStatus.OK).json({
      mensaje: 'Listado de todos las Peliculas',
      GetAll,
    });
  }
  @Get('find/:name')
  async getByName(@Res() res, @Param('name') name: string) {
    const pelicula = await this.peliculasService.getByName(name);
    if (!pelicula) throw new NotFoundException('La pelicula no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Pelicula encontrada con exito',
      pelicula,
    });
  }


  @Get('/:id')
  async getOne(@Res() res, @Param('id') id: string): Promise<Pelicula> {
    const obtener = await this.peliculasService.getOne(id);
    if (!obtener) throw new NotFoundException('La Pelicula no existe');
    return res.status(HttpStatus.OK).json({
      mensaje: 'Pelicula obtenida por id',
      obtener,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Res() res,
    @Param('id') id: string,
    @Body() UpdatePeliculaDto: UpdatePeliculaDto,
  ): Promise<Pelicula> {
    const updatePelicula = await this.peliculasService.update(
      id,
      UpdatePeliculaDto,
    );
    if (!updatePelicula)
      throw new NotFoundException('El administrador no existe');
    return res.status(HttpStatus.OK).json({
      mensaje: 'Pelicula editada con exito',
      updatePelicula,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Res() res, @Param('id') id: string) {
    const borrar = await this.peliculasService.delete(id);
    if (!borrar) throw new NotFoundException('La pelicula no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Pelicula borrada con exito',
      borrar,
    });
  }
}
