import { OrderStatus } from './order-status';

export class InvalidOrderStateError extends Error {
  constructor() { super('Order is in an invalid state'); }
}
export class InvalidQuantityError extends Error {
  constructor() { super('Quantity must be greater than zero'); }
}

export class Order {
  private constructor(
    public readonly id: string,
    public readonly customerId: any,
    public status: OrderStatus,
    public items: any[] = []
  ) {}

  static create(customerId: any, id: string): Order {
    return new Order(id, customerId, OrderStatus.Draft);
  }

  addItem(productId: any, quantity: any, price: any): void {
    if (this.status === OrderStatus.Cancelled) {
      throw new InvalidOrderStateError();
    }

    if (quantity.value <= 0) {
      throw new InvalidQuantityError();
    }

    const existingItem = this.items.find(
      item => item.productId.value === productId.value
    );

    if (existingItem) {
      existingItem.quantity = { value: existingItem.quantity.value + quantity.value };
    } else {
      this.items.push({ productId, quantity, price });
    }
  }

  cancel(): void {
    this.status = OrderStatus.Cancelled;
  }

  confirm(): void {
    this.status = OrderStatus.Confirmed;
  }

  get total() {
    return { amount: 0 };
  }
}