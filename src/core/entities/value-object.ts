export abstract class ValueObject<Props> {
  protected constructor(protected props: Props) {}

  abstract equals(valueObject: ValueObject<Props>): boolean
}
