import { Result } from '@/core/types/result'
import { UseCaseResult } from '@/core/types/use-case-result'

type Response = UseCaseResult<{
  message: string
}>

export class SayHelloUseCase {
  async execute(): Promise<Response> {
    return Result.ok({
      message: 'Hello, world!',
    })
  }
}
