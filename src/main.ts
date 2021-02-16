import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      disableErrorMessages: false,
      whitelist: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('XspeedIt Api')
    .setDescription('The XspeedIt API description')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/', app, document);
  
  await app.listen(3000);
}
bootstrap();
