import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
const cors = require('cors');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    allowedHeaders: ['Access-Control-Allow-Origin', 'Content-Type'],
    preflightContinue: false,
  });
  await app.listen(3000);
}
bootstrap();
