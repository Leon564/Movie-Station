import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Aplicación de administración')
    .setDescription('Descripcion')
    .setVersion('1.0')
    .addTag('administrador') //después asignar el decorador en el controller
    .addTag('peliculas') //después asignar el decorador en el controller
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
