import { PlaceOrderHandler } from '../../../application/place-order.handler';
import { InMemoryOrderRepository } from './order-in-memory-repository';

export class TestOrderContainer {
  static getPlaceOrderHandler(): PlaceOrderHandler {
    const repository = new InMemoryOrderRepository();
    return new PlaceOrderHandler(repository);
  }
}