import { describe, it, expect } from 'vitest';
import { Order } from '../../../domain/order';
import { OrderStatus } from '../../../domain/order-status';

describe('Order', () => {
  describe('create', () => {
    it('creates order with draft status', () => {
      const customerId = 'cust-123';
      const order = Order.create(customerId);

      expect(order.status).toBe(OrderStatus.Draft);
      expect(order.customerId).toEqual(customerId);
      expect(order.items).toHaveLength(0);
    });
  });
});