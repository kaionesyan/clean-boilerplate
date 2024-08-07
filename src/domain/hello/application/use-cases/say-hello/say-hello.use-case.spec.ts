import { SayHelloUseCase } from './say-hello.use-case'

describe('Say Hello Use Case', () => {
  let sut: SayHelloUseCase

  beforeEach(() => {
    sut = new SayHelloUseCase()
  })

  it('should return the hello message', async () => {
    const result = await sut.execute()

    expect(result.isOk())
    assert(result.isOk())

    expect(result.value).toEqual({
      message: 'Hello, world!',
    })
  })
})
