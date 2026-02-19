import { randomUUID} from 'crypto';
import { IdentifierValueObject } from '../../../../sharecl/domain/value-objects/identifier-value-object';

export class ProductId extends IdentifierValueObject {

  constructor(value: string) {
    super(value);
  }

  public static create(): ProductId {
    return new ProductId(randomUUID());
  }

  public static fromString(value: string): ProductId {
    return new ProductId(value);
  }
}
