import { SayHelloUseCase } from '@/domain/hello/application/use-cases/say-hello/say-hello.use-case'
import { Controller, Get } from '@nestjs/common'

@Controller()
export class SayHelloController {
  constructor(readonly sayHelloUseCase: SayHelloUseCase) {}

  @Get()
  async handle() {
    const result = await this.sayHelloUseCase.execute()

    if (result.isOk()) {
      return result.value.message
    }

    throw result.value
  }
}
