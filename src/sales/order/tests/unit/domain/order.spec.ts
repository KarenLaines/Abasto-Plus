import { describe, it, expect } from 'vitest';
import { Order, InvalidOrderStateError, InvalidQuantityError } from '../../../domain/order';
import { OrderStatus } from '../../../domain/order-status';
import { OrderMother } from './order.mother';

const ProductId = { from: (id: string) => ({ value: id, toEqual: (other: any) => id === other.value }) };
const Quantity = { create: (n: number) => ({ value: n, toEqual: (other: any) => n === other.value }) };
const Money = { create: (a: number, c: string) => ({ amount: a, currency: c }) };
const CustomerId = { from: (id: string) => ({ value: id }) };

describe('Order', () => {

  function createDraftOrder(): Order {
    return Order.create(CustomerId.from('cust-123'));
  }

  function createCancelledOrder(): Order {
    const order = createDraftOrder();
    order.cancel();
    return order;
  }

  describe('addItem', () => {
    it('adds item to order', () => {
      const order = createDraftOrder();
      const productId = ProductId.from('prod-123');
      const quantity = Quantity.create(2);
      const price = Money.create(10.00, 'USD');

      order.addItem(productId, quantity, price);

      expect(order.items).toHaveLength(1);
      expect(order.items[0].productId.toEqual(productId)).toBe(true);
    });

    it('increases quantity for existing product', () => {
      const order = createDraftOrder();
      const productId = ProductId.from('prod-123');
      const price = Money.create(10.00, 'USD');

      order.addItem(productId, Quantity.create(2), price);
      order.addItem(productId, Quantity.create(3), price);

      expect(order.items).toHaveLength(1);
      expect(order.items[0].quantity.value).toBe(5);
    });

    it('throws when order is cancelled', () => {
      const order = createCancelledOrder();

      expect(() => {
        order.addItem(ProductId.from('prod-123'), Quantity.create(1), Money.create(10, 'USD'));
      }).toThrow(InvalidOrderStateError);
    });

    it('throws when quantity is zero', () => {
      const order = createDraftOrder();

      expect(() => {
        order.addItem(ProductId.from('prod-123'), Quantity.create(0), Money.create(10, 'USD'));
      }).toThrow(InvalidQuantityError);
    });
  });

  describe('total', () => {
    it('is zero when no items', () => {
      const order = createDraftOrder();
      expect(order.total.amount).toBe(0);
    });
  });

  describe('confirm', () => {
    it('changes status to confirmed', () => {
      const order = createDraftOrder();
      order.confirm();
      expect(order.status).toBe(OrderStatus.Confirmed);
    });
  });

});