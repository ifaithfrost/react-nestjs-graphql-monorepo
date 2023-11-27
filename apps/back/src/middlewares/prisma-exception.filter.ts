import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import type { Response } from 'express'

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    // const request = ctx.getRequest<Request>()
    const response = ctx.getResponse<Response>()

    response.status(HttpStatus.BAD_REQUEST).json({ ...exception, type: 'toast' })
  }
}
