import { OrderStatus } from './order-status';

export class Order {
  private constructor(
    public readonly customerId: string,
    public readonly status: OrderStatus,
    public readonly items: any[]
  ) {}

  static create(customerId: string): Order {
    return new Order(customerId, OrderStatus.Draft, []);
  }
}