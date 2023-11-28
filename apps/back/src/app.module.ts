import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import { GraphQLModule } from '@nestjs/graphql'
import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AuthModule } from './modules'

import { ConfigModule } from '@nestjs/config'

import { PrismaModule } from './providers'

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      definitions: { path: './types/schema.ts' },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
