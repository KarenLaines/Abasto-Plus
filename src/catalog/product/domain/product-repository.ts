import { Product } from './product';

export interface ProductRepository {
  save(data: Product): Promise<void>;
}