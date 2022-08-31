import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type AdminDocument = Administrador & Document;

@Schema()
export class Administrador {
  _id: mongoose.Types.ObjectId;
  @Prop()
  nombre: String;
  @Prop()
  email: String;
  @Prop()
  usuario: String;
  @Prop()
  contraseña: String;
}
export const AdministradorSchema = SchemaFactory.createForClass(Administrador);
