import { ProductRepository } from '../application/product-repository';
import { Product } from '../domain/product';
import { MongoConnection } from './mongo-connection';

export class MongoProductRepository implements ProductRepository {

  async save(data: Product): Promise<void> {
    const db = await MongoConnection.connect();
    const collection = db.collection('product');

    await collection.insertOne(data.toPrimitives());
  }
}