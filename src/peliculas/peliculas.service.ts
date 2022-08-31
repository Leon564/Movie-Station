import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { Pelicula, PeliculaDocument } from './entities/pelicula.entity';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectModel('pelicula')
    private readonly peliculaModel: Model<PeliculaDocument>,
  ) {}
  async createPelicula(
    nombre: string,
    portada: string,
    estreno: string,
    director: string,
    sinopsis: string,
    genero: string,
    duracion: string,
    trailer: string,
  ): Promise<Pelicula> {
    const nuevo = new this.peliculaModel(CreatePeliculaDto);
    return await nuevo.save();
  }

  findAll() {
    return `This action returns all peliculas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pelicula`;
  }

  update(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return `This action updates a #${id} pelicula`;
  }

  remove(id: number) {
    return `This action removes a #${id} pelicula`;
  }
}
