import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

import { AuthPayload, SignUpInput } from '@/graphql'
import { PrismaService } from '@/providers'
import { LoginInput } from 'types/schema'

import { hash } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async signUp({ email, password, name }: SignUpInput): Promise<AuthPayload> {
    if (await this.prismaService.user.findUnique({ where: { email } })) {
      throw new HttpException('Email already exists', HttpStatus.CONFLICT)
    }

    const passwordHash = await hash(password, 10)

    const user = await this.prismaService.user.create({
      data: {
        email,
        name,
        password: passwordHash,
      },
    })

    return {
      refreshToken: 'refreshToken',
      token: 'token',
      user: {
        email: user.email,
        id: user.id,
        name: user.name,
      },
    }
  }

  login(loginInput: LoginInput): AuthPayload {
    return {
      token: 'token',
      refreshToken: 'refreshToken',
      user: {
        email: loginInput.email,
        id: 'id',
        name: loginInput.password,
      },
    }
  }
}
