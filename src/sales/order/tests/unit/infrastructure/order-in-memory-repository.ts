import { Order } from "../../../domain/order";
import { OrderRepository } from "../../../infrastructure/order-repository";

export class InMemoryOrderRepository implements OrderRepository {
  private orders: Map<string, Order> = new Map();

  nextId(): string {
    return Math.random().toString(36).substring(2, 15); 
  }

  async save(order: Order): Promise<void> {
    const key = order.id.toString();
    this.orders.set(key, order);
  }

  async findById(id: any): Promise<Order | null> {
    const found = this.orders.get(id.toString());
    return found || null;
  }

  async searchAll(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }
}