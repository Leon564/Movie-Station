import * as mongoose from 'mongoose';
export const Administrador = new mongoose.Schema({
  idAdministrado: Number,
  nombre: String,
  email: String,
  usuario: String,
  contraseña: String,
});
