import { EnumValueObject } from "../../../../share/domain/value-objects/enum-value-object";

export class ProductBaseUnit extends EnumValueObject {

  private static readonly VALID_UNITS = [
    'UNIT',
    'KG',
    'GRAM',
    'LITER',
    'ML',
    'L'
  ];

  constructor(value: string) {
    const normalizedValue = value.trim().toUpperCase();

    ProductBaseUnit.ensureNotEmpty(normalizedValue);

    super(normalizedValue, ProductBaseUnit.VALID_UNITS);
  }

  private static ensureNotEmpty(value: string): void {
    if (!value) {
      throw new Error('Product base unit cannot be empty.');
    }
  }
}
