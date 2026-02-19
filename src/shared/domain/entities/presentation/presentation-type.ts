import { EnumValueObject } from "../../../../sharecl/domain/value-objects/enum-value-object";

export class PresentationType extends EnumValueObject {

  private static readonly VALID_VALUES = [
    'BAG',
    'SACK',
    'BOX',
    'JAR',
    'BOTTLE'
  ];

  constructor(value: string) {
    super(value, PresentationType.VALID_VALUES);
  }
}
