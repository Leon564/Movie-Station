import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type AdminDocument = Administrador & Document;

@Schema()
export class Administrador {
  _id: mongoose.Types.ObjectId;
  @Prop()
  nombre: string;
  @Prop()
  email: string;
  @Prop()
  usuario: string;
  @Prop()
  contraseña: string;
}
export const AdministradorSchema = SchemaFactory.createForClass(Administrador);
