import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty()
  usuario: string;
  @ApiProperty()
  contraseña: string;
}
