import { Args, Mutation, Resolver } from '@nestjs/graphql'

import { AuthPayload } from 'types/schema'

import { AuthService } from './auth.service'
import { LoginInput, SignUpInput } from '@/graphql'

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation('signUp')
  async signUp(@Args('signUpInput') signUp: SignUpInput): Promise<AuthPayload> {
    return await this.authService.signUp(signUp)
  }

  @Mutation('login')
  login(@Args('loginInput') loginInput: LoginInput): AuthPayload {
    return this.authService.login(loginInput)
  }
}
