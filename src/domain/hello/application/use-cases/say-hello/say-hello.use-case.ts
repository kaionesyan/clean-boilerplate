import { AppError } from '@/core/errors/app.error'
import { Result } from '@/core/types/result.type'

type Response = Result<
  AppError,
  {
    message: string
  }
>

export class SayHelloUseCase {
  async execute(): Promise<Response> {
    return Result.ok({
      message: 'Hello, world!',
    })
  }
}
