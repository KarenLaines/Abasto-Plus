import { Order } from "../domain/order";

export interface OrderRepository {
  save(order: Order): Promise<void>;
  findById(id: any): Promise<Order | null>;
  nextId(): string | Promise<string>;
}