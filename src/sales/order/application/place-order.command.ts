export class PlaceOrderCommand {
  constructor(
    public readonly customerId: string,
    public readonly items: {
      productId: string;
      quantity: number;
    }[]
  ) {}
}