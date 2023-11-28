import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const server = async () => {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.API_PORT || 8080)

  // app.useGlobalFilters(new GraphqlExceptionFilter())

  // eslint-disable-next-line no-console
  console.log(`Application is running on: ${await app.getUrl()}`)
}

server()
