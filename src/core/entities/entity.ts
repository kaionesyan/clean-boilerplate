import { randomUUID } from 'crypto'

import { UniqueId } from './unique-id.value-object'

export abstract class Entity<Props> {
  get id() {
    return this._id
  }

  protected constructor(
    protected props: Props,
    private _id?: UniqueId,
  ) {
    this._id = _id ?? UniqueId.create(randomUUID())
  }
}
