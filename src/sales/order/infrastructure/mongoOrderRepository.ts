import { MongoClient, Db } from 'mongodb';
import { Order } from '../domain/order';
import { OrderRepository } from './order-repository';

export class MongoOrderRepository implements OrderRepository {
  private url = 'mongodb://localhost:27017/';
  private dbName = 'practicaI';

  nextId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  async save(order: Order): Promise<void> {
    const client = new MongoClient(this.url);
    try {
      await client.connect();
      const db = client.db(this.dbName);
      const collection = db.collection('orders');

      await collection.insertOne({
        _id: order.id as any,
        customerId: order.customerId,
        status: order.status,
        items: order.items
      });
    } catch (error) {
      console.error('Error', error);
    } finally {
      await client.close();
    }
  }

  async findById(id: any): Promise<Order | null> {
    return null; 
  }
}