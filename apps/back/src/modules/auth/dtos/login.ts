import { LoginInput } from '@/graphql'
import { Matches } from 'class-validator'

export class LoginInputDTO extends LoginInput {
  @Matches(/^[a-zA-Z0-9]+$/)
  email: string
}
