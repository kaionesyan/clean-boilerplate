import { AggregateRoot } from '../entities/aggregate-root'
import { UniqueId } from '../entities/unique-id.value-object'
import { BaseDomainEvent } from './base.domain-event'

type DomainEventCallback = (event: BaseDomainEvent) => void

export class DomainEvents {
  private static handlersMap: Record<string, DomainEventCallback[]> = {}
  private static markedAggregates: AggregateRoot<unknown>[] = []

  public static markAggregateForDispatch(aggregate: AggregateRoot<unknown>) {
    const aggregateFound = !!this.findMarkedAggregateById(aggregate.id)

    if (!aggregateFound) {
      this.markedAggregates.push(aggregate)
    }
  }

  private static findMarkedAggregateById(id: UniqueId): AggregateRoot<unknown> | undefined {
    return this.markedAggregates.find((aggregate) => aggregate.id.equals(id))
  }
}
