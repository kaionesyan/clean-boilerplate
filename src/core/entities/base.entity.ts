import { randomUUID } from 'crypto'

import { UniqueId } from './unique-id.value-object'

export abstract class BaseEntity<Props> {
  private _id: UniqueId

  get id() {
    return this._id
  }

  protected constructor(
    protected props: Props,
    _id?: UniqueId,
  ) {
    this._id = _id ?? UniqueId.create(randomUUID())
  }
}
