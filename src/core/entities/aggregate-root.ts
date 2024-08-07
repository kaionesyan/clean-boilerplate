import { BaseDomainEvent } from '../events/base.domain-event'
import { DomainEvents } from '../events/domain-events'
import { BaseEntity } from './base.entity'

export class AggregateRoot<Props> extends BaseEntity<Props> {
  private _domainEvents: BaseDomainEvent[] = []

  get domainEvents(): BaseDomainEvent[] {
    return this._domainEvents
  }

  clearEvents() {
    this._domainEvents = []
  }

  protected addDomainEvent(domainEvent: BaseDomainEvent): void {
    this._domainEvents.push(domainEvent)

    DomainEvents.markAggregateForDispatch(this)
  }
}
