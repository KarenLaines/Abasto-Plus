import { Order } from '../../../domain/order';

export class OrderMother {
  static create(): Order {
    return Order.create({ value: 'cust-123' }, 'order-123');
  }

  static draft(): Order {
    return this.create();
  }

  static cancelled(): Order {
    const order = this.create();
    order.cancel();
    return order;
  }

  static withItems(n: number = 1): Order {
    const order = this.create();
    return order;
  }
}