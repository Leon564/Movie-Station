import { ApiProperty } from '@nestjs/swagger';

export class CreatePeliculaDto {
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  portada: string;
  @ApiProperty()
  estreno: string;
  @ApiProperty()
  director: string;
  @ApiProperty()
  sinopsis: string;
  @ApiProperty()
  genero: string;
  @ApiProperty()
  duración: string;
  @ApiProperty()
  trailer: string;
}
