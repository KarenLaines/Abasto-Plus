import { ValueObject } from "./value-objects";

export abstract class IdentifierValueObject extends ValueObject<string> {

  constructor(value: string) {
    super(value);
    this.ensureValueIsUuid();
  }

  protected ensureValueIsUuid(): void {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    if (!uuidRegex.test(this.value)) {
      throw new Error(`Value "${this.value}" is not a valid UUID.`);
    }
  }
}
