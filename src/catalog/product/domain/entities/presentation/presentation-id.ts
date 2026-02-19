import { IdentifierValueObject } from '../../../../../sharecl/domain/value-objects/identifier-value-object';

export class PresentationId extends IdentifierValueObject {
  constructor(value: string) {
    super(value);
  }
}
