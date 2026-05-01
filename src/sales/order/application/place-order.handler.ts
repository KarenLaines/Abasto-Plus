import { Order }             from '../domain/order';
import { PlaceOrderCommand } from './place-order.command';


export interface OrderRepository {
  save(order: Order): Promise<void>;
  nextId(): Promise<string>;
}

export class PlaceOrderHandler {
  constructor(private readonly orderRepository: OrderRepository) {}

  async handle(command: PlaceOrderCommand): Promise<string> {
    // 1. Generamos un ID para la orden
    const orderId = await this.orderRepository.nextId();

    // 2. Creamos el borrador usando nuestro Factory Method
    const order = Order.create(command.customerId);

    // 3. Agregamos cada ítem del command
    for (const item of command.items) {
      order.addItem(
        { value: item.productId },   
        { value: item.quantity },   
        { amount: 0 }                
      );
    }

    // 4. Guardamos
    await this.orderRepository.save(order);

    return orderId;
  }
}