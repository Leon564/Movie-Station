import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';

@Module({
  controllers: [AdministradorController],
  providers: [AdministradorService]
})
export class AdministradorModule {}
