import { Result } from './result.type'

describe('Result Type', () => {
  const doSomething = (shouldSucceed: boolean): Result<string, number> => {
    if (shouldSucceed) {
      return Result.ok(10)
    } else {
      return Result.err('oops...')
    }
  }

  it('should return an ok result', () => {
    const result = doSomething(true)

    expect(result.isOk()).toBe(true)
    expect(result.isErr()).toBe(false)
    assert(result.isOk())
    expect(result.value).toBe(10)
  })

  it('should return an err result', () => {
    const result = doSomething(false)

    expect(result.isOk()).toBe(false)
    expect(result.isErr()).toBe(true)
    assert(result.isErr())
    expect(result.value).toBe('oops...')
  })
})
