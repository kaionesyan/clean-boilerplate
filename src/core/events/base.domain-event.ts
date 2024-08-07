export abstract class BaseDomainEvent {
  readonly createdAt: Date

  public abstract getAggregateId(): string

  protected constructor() {
    this.createdAt = new Date()
  }
}
