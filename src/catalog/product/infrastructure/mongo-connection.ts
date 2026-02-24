import { MongoClient, Db } from 'mongodb';

export class MongoConnection {

  private static client: MongoClient;
  private static db: Db;

  static async connect(): Promise<Db> {
    if (!this.db) {
      this.client = new MongoClient('mongodb://localhost:27017/');
      await this.client.connect();
      this.db = this.client.db('practicaI');
    }

    return this.db;
  }
}