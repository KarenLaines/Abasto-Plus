import { ProductRepository } from '../domain/product-repository';
import { Product } from '../domain/product';
import { MongoConnection } from './mongo-connection';

export class MongoProductRepository implements ProductRepository {
  constructor(private connection: MongoConnection) {}

  async save(data: Product): Promise<void> {
    const db = await this.connection.connect();
    const collection = db.collection('product');

    await collection.insertOne(data.toPrimitives());
  }
}