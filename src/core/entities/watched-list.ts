export abstract class WatchedList<T> {
  currentItems: T[]
  private initialItems: T[]
  private newItems: T[]
  private removedItems: T[]

  abstract compare(a: T, b: T): boolean

  constructor(initialItems?: T[]) {
    this.currentItems = initialItems || []
    this.initialItems = initialItems || []
    this.newItems = []
    this.removedItems = []
  }

  public getNewItems() {
    return this.newItems
  }

  public getRemovedItems() {
    return this.removedItems
  }

  public contains(item: T) {
    return this.isCurrentItem(item)
  }

  public add(item: T): void {
    if (this.isRemovedItem(item)) {
      this.removeFromRemovedItems(item)
    }

    if (!this.isNewItem(item) && !this.isInitialItem(item)) {
      this.newItems.push(item)
    }

    if (!this.isCurrentItem(item)) {
      this.currentItems.push(item)
    }
  }

  public remove(item: T): void {
    this.removeFromCurrentItems(item)

    if (this.isNewItem(item)) {
      this.removeFromNewItems(item)

      return
    }

    if (!this.isRemovedItem(item)) {
      this.removedItems.push(item)
    }
  }

  public update(items: T[]): void {
    const newItems = items.filter((a) => {
      return !this.currentItems.some((b) => this.compare(a, b))
    })

    const removedItems = this.currentItems.filter((a) => {
      return !items.some((b) => this.compare(a, b))
    })

    this.currentItems = items
    this.newItems = newItems
    this.removedItems = removedItems
  }

  private isInitialItem(item: T): boolean {
    return this.initialItems.filter((v: T) => this.compare(item, v)).length !== 0
  }

  private isCurrentItem(item: T) {
    return this.currentItems.filter((v: T) => this.compare(item, v)).length !== 0
  }

  private isNewItem(item: T): boolean {
    return this.newItems.filter((v: T) => this.compare(item, v)).length !== 0
  }

  private isRemovedItem(item: T): boolean {
    return this.removedItems.filter((v: T) => this.compare(item, v)).length !== 0
  }

  private removeFromCurrentItems(item: T): void {
    this.currentItems = this.currentItems.filter((v) => !this.compare(item, v))
  }

  private removeFromNewItems(item: T): void {
    this.newItems = this.newItems.filter((v) => !this.compare(item, v))
  }

  private removeFromRemovedItems(item: T): void {
    this.removedItems = this.removedItems.filter((v) => !this.compare(item, v))
  }
}
