import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('CVI Web API')
    .setDescription('Auto-generated Swagger API docs')
    .setVersion('1.0')
    .addBearerAuth({
      description: 'User JWT Token',
      type: 'http',
      scheme: 'bearer',
      in: 'header',
      name: 'jwt',
      bearerFormat: 'JWT',
    },
      'JWT-auth',)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT || 3002);
  Logger.log(`${await app.getUrl()}/api`);
  Logger.log(`Backend running on port ${process.env.PORT || 3002}`);
}
bootstrap();