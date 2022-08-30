import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasModule } from './peliculas/peliculas.module';
import { AdministradorModule } from './administrador/administrador.module';

@Module({
  imports: [PeliculasModule, AdministradorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
