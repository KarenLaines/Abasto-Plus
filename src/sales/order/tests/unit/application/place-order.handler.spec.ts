import { describe, it, expect } from 'vitest';
import { PlaceOrderHandler } from '../../../application/place-order.handler';
import { InMemoryOrderRepository } from '../infrastructure/order-in-memory-repository';
import { PlaceOrderCommand } from '../../../application/place-order.command';

describe('PlaceOrderHandler', () => {
  const repository = new InMemoryOrderRepository();
  const handler = new PlaceOrderHandler(repository);

  it('creates order with items and saves', async () => {
    const command = new PlaceOrderCommand('cust-123', [
      { productId: 'prod-1', quantity: 2 },
      { productId: 'prod-2', quantity: 1 },
    ]);

    const orderId = await handler.handle(command);

    expect(orderId).toBeDefined();

    const savedOrder = await repository.findById(orderId);
    expect(savedOrder).not.toBeNull();
  });

  it('saves an order with the correct number of items', async () => {
    const command = new PlaceOrderCommand('cust-456', [
      { productId: 'prod-1', quantity: 2 },
      { productId: 'prod-2', quantity: 1 },
    ]);

    const orderId = await handler.handle(command);

    const savedOrder = await repository.findById(orderId);
    
    expect(savedOrder?.items).toHaveLength(2);
  });
});