import { randomUUID } from 'crypto'

import { ValueObject } from './value-object'

export class UniqueId extends ValueObject<string> {
  get value() {
    return this.props
  }

  equals(valueObject: UniqueId): boolean {
    return this.value === valueObject.value
  }

  static create(value?: string): UniqueId {
    const uuid = value ?? randomUUID()

    const isUuid = uuid.match(/^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}$/)

    if (!isUuid) {
      throw new Error('Unique ID must be a valid UUID')
    }

    return new UniqueId(uuid)
  }
}
