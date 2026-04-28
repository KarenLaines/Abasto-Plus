import { Order } from './order';

export class CreateDraftOrder {
  static execute(customerId: string): Order {
    return Order.create(customerId);
  }
}