import { randomUUID } from 'crypto'

import { UniqueId } from './unique-id.value-object'

describe('Unique Id Value Object', () => {
  const createUniqueId = async (shouldSucceed: boolean): Promise<UniqueId> => {
    if (shouldSucceed) {
      return UniqueId.create(randomUUID())
    } else {
      return UniqueId.create('invalid uuid')
    }
  }

  it('should create multiple instances of a unique id', async () => {
    for (let i = 0; i < 1000; i++) {
      await expect(createUniqueId(true)).resolves.toBeTruthy()
    }
  })

  it('should throw if an invalid uuid is provided', async () => {
    await expect(createUniqueId(false)).rejects.toEqual(new Error('Unique ID must be a valid UUID'))
  })
})
