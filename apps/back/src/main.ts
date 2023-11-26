import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.API_PORT || 3001)

  // eslint-disable-next-line no-console
  console.log(`Application is running on: ${await app.getUrl()}`)
}

bootstrap()
