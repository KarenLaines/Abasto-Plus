import { StringValueObject } from "../../../../sharecl/domain/value-objects/string-value-object";

export class ProductName extends StringValueObject {

  private static readonly MIN_LENGTH = 10;
  private static readonly MAX_LENGTH = 100;

  constructor(value: string) {
    const normalizedValue = value.trim();

    ProductName.ensureNotEmpty(normalizedValue);
    ProductName.ensureValidLength(normalizedValue);

    super(normalizedValue);
  }

  private static ensureNotEmpty(value: string): void {
    if (!value) {
      throw new Error('Product name cannot be empty.');
    }
  }

  private static ensureValidLength(value: string): void {
    if (
      value.length < ProductName.MIN_LENGTH ||
      value.length > ProductName.MAX_LENGTH
    ) {
      throw new Error(
        `Product name must be between ${ProductName.MIN_LENGTH} and ${ProductName.MAX_LENGTH} characters.`
      );
    }
  }
}
