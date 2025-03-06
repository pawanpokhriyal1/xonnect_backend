import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('🚀 Server running on http://localhost:3000');
  console.log("new change");
  console.log("new change 2");
  
}
bootstrap();
