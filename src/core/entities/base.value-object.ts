export abstract class BaseValueObject<Props> {
  protected constructor(protected props: Props) {}

  abstract equals(valueObject: BaseValueObject<Props>): boolean
}
