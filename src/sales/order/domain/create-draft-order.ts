import { Order } from './order';

export class CreateDraftOrder {
  static execute(customerId: string): Order {
    const tempId = Math.random().toString(36).substring(2, 15);
    return Order.create(customerId, tempId);
  }
}