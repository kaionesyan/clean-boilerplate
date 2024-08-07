/* eslint-disable @typescript-eslint/no-namespace */

export class Err<T> {
  constructor(readonly value: T) {}

  isOk(): this is Ok<never> {
    return false
  }

  isErr(): this is Err<T> {
    return true
  }
}

export class Ok<T> {
  constructor(readonly value: T) {}

  isOk(): this is Ok<T> {
    return true
  }

  isErr(): this is Err<never> {
    return false
  }
}
export type Result<E, O> = Err<E> | Ok<O>

export namespace Result {
  export const err = <E, O>(value: E): Result<E, O> => {
    return new Err(value)
  }

  export const ok = <E, O>(value: O): Result<E, O> => {
    return new Ok(value)
  }
}
