import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type PeliculaDocument = Pelicula & Document;

@Schema()
export class Pelicula {
  _id: mongoose.Types.ObjectId;
  @Prop()
  nombre: string;
  @Prop()
  portada: string;
  @Prop()
  estreno: string;
  @Prop()
  director: string;
  @Prop()
  sinopsis: string;
  @Prop()
  genero: string;
  @Prop()
  duración: string;
  @Prop()
  trailer: string;
}

export const PeliculaSchema = SchemaFactory.createForClass(Pelicula);
