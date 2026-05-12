import { describe, it, expect } from 'vitest';
import { OrderMother } from './order.mother';
import { CreateDraftOrder } from '../../../domain/create-draft-order';
import { OrderStatus }      from '../../../domain/order-status';

describe('CreateDraftOrder', () => {

  it('should create an order with draft status', () => {
    const order = CreateDraftOrder.execute('customer-1');

    expect(order.status).toBe(OrderStatus.Draft);
  });

  it('should create an order with no items', () => {
    const order = CreateDraftOrder.execute('customer-1');

    expect(order.items).toHaveLength(0);
  });

  it('should create an order with the given customerId', () => {
    const order = CreateDraftOrder.execute('customer-99');

    expect(order.customerId).toBe('customer-99');
  });

  it('should match structure of a draft order from Mother', () => {
    const fromFactory = CreateDraftOrder.execute('customer-1');
    const fromMother  = OrderMother.draft();

    expect(fromFactory.status).toBe(fromMother.status);
    expect(fromFactory.items).toHaveLength(fromMother.items.length);
  });

});