import { ApiProperty } from '@nestjs/swagger';

export class CreateAdministradorDto {
  @ApiProperty()
  nombre: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  usuario: string;
  @ApiProperty()
  contraseña: string;
}
