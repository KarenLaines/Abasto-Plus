import { ValueObject } from './value-objects';

export abstract class StringValueObject extends ValueObject<string> {

  constructor(value: string) {
    super(value);
    this.ensureIsValidString();
  }

  protected ensureIsValidString(): void {
    if (this.value === null || this.value === undefined) {
      throw new Error('Value cannot be null or undefined.');
    }

    if (typeof this.value !== 'string') {
      throw new Error('Value must be a string.');
    }
  }
}
