import { ValueObject } from "./value-objects";

export abstract class EnumValueObject extends ValueObject<string> {
  private readonly validValues: string[];

  constructor(value: string, validValues: string[]) {
    super(value);
    this.validValues = validValues;
    this.ensureValueIsValid(value);
  }

  protected ensureValueIsValid(value: string): void {
    if (!this.validValues.includes(value)) {
      throw new Error(
        `Invalid value "${value}". Allowed values are: ${this.validValues.join(', ')}`
      );
    }
  }
}