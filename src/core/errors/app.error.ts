export enum AppErrorCode {
  unknown = 'unknown',
}

export class AppError {
  private constructor(
    readonly code: string,
    readonly message?: string,
  ) {}

  static unknown(): AppError {
    return new AppError(AppErrorCode.unknown)
  }
}
