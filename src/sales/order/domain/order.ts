import { OrderStatus } from './order-status';

export class InvalidOrderStateError extends Error {
  constructor() { super('Order is in an invalid state'); }
}
export class InvalidQuantityError extends Error {
  constructor() { super('Quantity must be greater than zero'); }
}

export class Order {
  private constructor(
    public readonly customerId: any, // CustomerId Value Object
    public status: OrderStatus,
    public items: any[] = []
  ) {}

  static create(customerId: any): Order {
    return new Order(customerId, OrderStatus.Draft);
  }

  addItem(productId: any, quantity: any, price: any): void {
    if (this.status === OrderStatus.Cancelled) {
      throw new InvalidOrderStateError();
    }

    if (quantity.value <= 0) {
      throw new InvalidQuantityError();
    }

    const existingItem = this.items.find(item => item.productId.toEqual(productId));
    
    if (existingItem) {
      existingItem.quantity = existingItem.quantity.add(quantity);
    } else {
      this.items.push({ productId, quantity, price });
    }
  }

  cancel(): void {
    this.status = OrderStatus.Cancelled;
  }

  get total() {
    return { amount: 0 }; 
  }
}