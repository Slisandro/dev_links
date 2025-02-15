import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.FRONTEND_URL, "http://localhost:5173", "https://devlinks-sl.vercel.app"],
  })
  // @ts-expect-error
  await app.listen(parseInt(process.env.PORT, '0.0.0.0') || 3000);
}

bootstrap();