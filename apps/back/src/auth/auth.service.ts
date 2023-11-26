import { Injectable } from '@nestjs/common'

import { AuthPayload } from '@/graphql'
import { LoginVariables } from './types'

@Injectable()
export class AuthService {
  login({ email, password }: LoginVariables): AuthPayload {
    return {
      token: 'token',
      refreshToken: 'refreshToken',
      user: {
        email: email,
        id: 'id',
        name: password,
      },
    }
  }

  logout({ email, id }): boolean {
    return email === 'email' && id === 'id' ? true : false
  }
}
