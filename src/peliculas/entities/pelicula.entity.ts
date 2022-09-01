import mongoose from 'mongoose';

export const Pelicula = new mongoose.Schema({
  id: Number,
  Nombre: String,
  PortadaOficial: String,
  FechaEstreno: String,
  Director: String,
  Sinopsis: String,
  Género: String,
  TiempoDuración: String,
  Trailer: String,
});
