class InvalidMoneyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidMoneyError';
  }
}

class Money {
  // Propiedades readonly = inmutabilidad
  readonly amount: number;
  readonly currency: string;

  // Constructor privado — solo se crea via Money.create()
  private constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  // Factory method con validación
  static create(amount: number, currency: string): Money {
    if (amount < 0) {
      throw new InvalidMoneyError('Amount cannot be negative');
    }
    if (!currency || currency.trim() === '') {
      throw new InvalidMoneyError('Currency is required');
    }
    return new Money(amount, currency);
  }

  // Lógica del dominio: sumar
  add(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new InvalidMoneyError('Cannot add different currencies');
    }
    // Retorna un NUEVO objeto (inmutabilidad)
    return Money.create(this.amount + other.amount, this.currency);
  }

  // Igualdad por VALOR, no por referencia
  equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }
}