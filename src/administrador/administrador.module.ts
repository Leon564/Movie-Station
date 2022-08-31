import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AdministradorSchema } from './entities/administrador.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'administrador', schema: AdministradorSchema },
    ]),
  ],
  controllers: [AdministradorController],
  providers: [AdministradorService],
})
export class AdministradorModule {}
