import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasModule } from './peliculas/peliculas.module';
import { AdministradorModule } from './administrador/administrador.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config()

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_STRING_CONECTION),PeliculasModule, AdministradorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
