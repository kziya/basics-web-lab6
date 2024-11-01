import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Lab6 example app')
    .setDescription('Lab6 API description')
    .setVersion('1.0')
    .addTag('Lab6')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3000;

  await app.listen(port);
}

bootstrap();
