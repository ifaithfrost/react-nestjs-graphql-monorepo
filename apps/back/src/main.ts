import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { GraphqlExceptionFilter } from './middlewares/graphql-exception.filter'

const server = async () => {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalFilters(new GraphqlExceptionFilter())

  await app.listen(process.env.PORT || 3333)

  console.info(`Application is running on: ${await app.getUrl()}`)
}

server()
