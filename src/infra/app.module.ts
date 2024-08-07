import { SayHelloUseCase } from '@/domain/hello/application/use-cases/say-hello/say-hello.use-case'
import { Module } from '@nestjs/common'

import { SayHelloController } from './say-hello.controller'

@Module({
  providers: [SayHelloUseCase],
  controllers: [SayHelloController],
})
export class AppModule {}
