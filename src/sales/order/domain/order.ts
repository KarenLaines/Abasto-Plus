import { OrderStatus } from './order-status';

export class Order {
  private constructor(
    public readonly customerId: string,
    public readonly status: OrderStatus,
    public readonly items: any[]
  ) {}

  // 👇 Este es el "create" del que habla el docente
  static create(customerId: string): Order {
    return new Order(customerId, OrderStatus.Draft, []);
  }
}