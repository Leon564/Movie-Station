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
  async Create(CreatePeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    const nuevo = new this.peliculaModel(CreatePeliculaDto);
    return await nuevo.save();
  }

  async getAll(): Promise<PeliculaDocument[]> {
    return await this.peliculaModel.find();
  }

  async getOne(id: string): Promise<PeliculaDocument> {
    return await this.peliculaModel.findOne({ _id: id });
  }
  async getByName(name: string): Promise<PeliculaDocument[]> {  
    return await this.peliculaModel.find({nombre: new RegExp(name, 'i')});
  }

  async update(
    id: string,
    UpdatePeliculaDto: UpdatePeliculaDto,
  ): Promise<PeliculaDocument> {
    return await this.peliculaModel.findByIdAndUpdate(id, UpdatePeliculaDto, {
      new: true,
    });
  }

  async delete(id: string): Promise<PeliculaDocument> {
    return await this.peliculaModel.findByIdAndDelete(id);
  }
}
