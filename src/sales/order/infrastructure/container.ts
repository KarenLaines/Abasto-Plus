import { PlaceOrderHandler } from '../application/place-order.handler';
import { OrderRepository } from './order-repository';

export class OrderContainer {
  static getPlaceOrderHandler(repository: OrderRepository): PlaceOrderHandler {
    return new PlaceOrderHandler(repository);
  }
}