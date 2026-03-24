import { ValueObject } from "./value-objects";

export abstract class IntValueObject extends ValueObject<number> {

  constructor(value: number) {
    super(value);
    this.ensureValueIsInt();
  }

  protected ensureValueIsInt(): void {
    if (!Number.isInteger(this.value)) {
      throw new Error(`Value must be an integer. Received: ${this.value}`);
    }
  }
}
