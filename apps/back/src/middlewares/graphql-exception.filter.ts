import { ArgumentsHost, Catch, HttpException } from '@nestjs/common'
import { GqlArgumentsHost, GqlContextType, GqlExceptionFilter } from '@nestjs/graphql'
import { ApolloError } from 'apollo-server-errors'

@Catch(HttpException)
export class GraphqlExceptionFilter implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host)
    const type = gqlHost.getType<GqlContextType>()

    if (type === 'graphql') {
      throw new ApolloError(exception.message, `${exception.getStatus()}`)
    }

    return exception
  }
}
