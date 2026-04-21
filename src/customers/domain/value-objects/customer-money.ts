import { FloatValueObject } from "../../../share/domain/value-objects/float-value-object";

class Amount extends FloatValueObject {
  constructor(value: number) {
    super(value);

    if (value < 0) {
      throw new Error("Amount cannot be negative");
    }
  }
}

class Money {
  readonly amount: Amount;
  readonly currency: string;

  private constructor(amount: Amount, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  static create(amount: number, currency: string): Money {
    if (!currency || currency.trim() === '') {
      throw new Error('Currency is required');
    }

    return new Money(new Amount(amount), currency);
  }

  add(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new Error('Cannot add different currencies');
    }

    return Money.create(
      this.amount.getValue() + other.amount.getValue(),
      this.currency
    );
  }
}