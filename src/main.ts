import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Movie-Station')
    .setDescription('Obtén información de miles de películas.')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // Mismo nombre a usar en el controlador cuando usemos el decorador @ApiBearerAuth() !

    )
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Administrador') //después asignar el decorador en el controller
    .addTag('Peliculas') //después asignar el decorador en el controller
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
