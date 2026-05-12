import { OrderContainer } from './sales/order/infrastructure/container';
import { MongoOrderRepository } from './sales/order/infrastructure/mongoOrderRepository';
import { TestOrderContainer } from './sales/order/tests/unit/infrastructure/test-container';

const isTest = process.env.NODE_ENV === 'test';
//npx vitest run

export const container = isTest 
  ? TestOrderContainer.getPlaceOrderHandler() 
  : OrderContainer.getPlaceOrderHandler(new MongoOrderRepository());


const datosDePrueba = {
  customerId: 'prueba-123',
  items: [
    { productId: 'Switch', quantity: 1, price: 4000}
  ]
};

container.handle(datosDePrueba);
//npx ts-node src/main.ts