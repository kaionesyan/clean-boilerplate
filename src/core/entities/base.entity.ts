import { randomUUID } from 'crypto'

export abstract class BaseEntity<Props> {
  private _id: string

  get id() {
    return this._id
  }

  protected constructor(
    protected props: Props,
    _id?: string,
  ) {
    this._id = _id ?? randomUUID()
  }
}
