import { describe, it, expect, vi } from 'vitest';
import { PlaceOrderHandler, OrderRepository } from '../../../application/place-order.handler';
import { PlaceOrderCommand }                  from '../../../application/place-order.command';

const mockRepository: OrderRepository = {
save:   vi.fn().mockResolvedValue(undefined),
nextId: vi.fn().mockResolvedValue('order-123'),
};

describe('PlaceOrderHandler', () => {

it('creates order with items and saves', async () => {
    const handler = new PlaceOrderHandler(mockRepository);

    const command = new PlaceOrderCommand('cust-123', [
    { productId: 'prod-1', quantity: 2 },
    { productId: 'prod-2', quantity: 1 },
    ]);

    const orderId = await handler.handle(command);

    expect(orderId).toBeDefined();
    expect(mockRepository.save).toHaveBeenCalled();
});

it('saves an order with the correct number of items', async () => {
    const handler = new PlaceOrderHandler(mockRepository);

    const command = new PlaceOrderCommand('cust-123', [
    { productId: 'prod-1', quantity: 2 },
    { productId: 'prod-2', quantity: 1 },
    ]);

    await handler.handle(command);

    const savedOrder = (mockRepository.save as any).mock.calls[0][0];
    expect(savedOrder.items).toHaveLength(2);
});

});