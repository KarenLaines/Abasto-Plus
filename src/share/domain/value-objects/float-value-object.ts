import { ValueObject } from "./value-objects";

export abstract class FloatValueObject extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.ensureValueIsFloat();
  }

  protected ensureValueIsFloat(): void {
    if (typeof this.value !== "number" || isNaN(this.value)) {
      throw new Error(`Value must be a valid number. Received: ${this.value}`);
    }

    if (!isFinite(this.value)) {
      throw new Error(`Value must be finite. Received: ${this.value}`);
    }
  }
}