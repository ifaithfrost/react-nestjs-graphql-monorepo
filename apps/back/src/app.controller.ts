import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('/')
  root(): string {
    return 'alive'
  }

  @Get('/health')
  health(): string {
    return 'health check'
  }
}
