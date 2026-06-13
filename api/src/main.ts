import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true, // Permite cualquier origen
    credentials: true,
  });
  // @ts-expect-error
  await app.listen(parseInt(process.env.PORT, '0.0.0.0') || 3000);
}

bootstrap();
