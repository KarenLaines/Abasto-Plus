import { MongoClient, Db } from 'mongodb';

export class MongoConnection {

  private client?: MongoClient;
  private db?: Db;

  constructor(
    private uri: string,
    private dbName: string
  ) {}

  async connect(): Promise<Db> {
    if (!this.client) {
      this.client = new MongoClient(this.uri);
      await this.client.connect();
      this.db = this.client.db(this.dbName);
    }

    return this.db!;
  }
}