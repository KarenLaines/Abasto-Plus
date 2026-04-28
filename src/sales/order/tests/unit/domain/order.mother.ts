import { Order } from '../../../domain/order';
import { OrderStatus } from '../../../domain/order-status';

export class OrderMother {

  static create(): Order {
    return Order.create('customer-1');
  }

  static draft(): Order {
    return Order.create('customer-1');
  }

  static withItems(n: number = 1): Order {
    const order = Order.create('customer-1');
    // por ahora retorna la order vacía hasta que
    // implementes addItem() en tu clase Order
    return order;
  }
}