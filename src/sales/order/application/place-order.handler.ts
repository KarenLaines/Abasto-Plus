import { Order }             from '../domain/order';
import { PlaceOrderCommand } from './place-order.command';
import { OrderRepository } from '../infrastructure/order-repository';

export class PlaceOrderHandler {
  constructor(private readonly orderRepository: OrderRepository) {}

  async handle(command: PlaceOrderCommand): Promise<string> {
    const orderId = await this.orderRepository.nextId();
    const order = Order.create(command.customerId, orderId);

    for (const item of command.items) {
      order.addItem(
        { value: item.productId },   
        { value: item.quantity },   
        { amount: 0 }                
      );
    }

    await this.orderRepository.save(order);

    return orderId;
  }
}