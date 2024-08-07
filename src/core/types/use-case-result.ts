import { AppError } from '../errors/app-error'
import { Result } from './result'

export type UseCaseResult<T = void> = Result<AppError, T>
