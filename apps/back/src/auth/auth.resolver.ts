import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { AuthPayload } from 'types/schema'

import { AuthService } from './auth.service'

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('login')
  login(@Args('email') email: string, @Args('password') password: string): AuthPayload {
    return this.authService.login({ email, password })
  }

  @Mutation('logout')
  logout(@Args('email') email: string, @Args('id') id: string): boolean {
    return this.authService.logout({ email, id })
  }
}
