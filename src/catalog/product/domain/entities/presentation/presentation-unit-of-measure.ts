import { EnumValueObject } from "../../../../../share/domain/value-objects/enum-value-object";

export class PresentationUnitOfMeasure extends EnumValueObject {

  private static readonly VALID_VALUES = [
    'KG',
    'LB',
    'G',
    'ML',
    'LT',
    'UNIT'
  ];

  constructor(value: string) {
    super(value, PresentationUnitOfMeasure.VALID_VALUES);
  }
}
