import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL
  })
  // @ts-expect-error
  await app.listen(parseInt(process.env.PORT, '0.0.0.0') || 3000);
}
bootstrap();
