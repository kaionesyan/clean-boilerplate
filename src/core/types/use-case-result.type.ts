import { AppError } from '../errors/app-error'
import { Result } from './result.type'

export type UseCaseResult<T = void> = Result<AppError, T>
