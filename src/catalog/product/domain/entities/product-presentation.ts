import { Presentation } from "./presentation";
import { PresentationId } from './presentation/presentation-id';
import { PresentationName } from './presentation/presentation-name';
import { PresentationType } from './presentation/presentation-type';
import { PresentationNetQuantity } from './presentation/presentation-net-quantity';
import { PresentationUnitOfMeasure } from './presentation/presentation-unit-of-measure';

type PresentationPrimitives = {
  id: string;
  name: string;
  type: string;
  netQuantity: number;
  unitOfMeasure: string;
};

export class ProductPresentations {

  private readonly value: Presentation[];

  constructor(presentations: Array<PresentationPrimitives>) {
    this.ensureMaxFive(presentations);

    this.value = presentations.map(p =>
      new Presentation(
        new PresentationId(p.id),
        new PresentationName(p.name),
        new PresentationType(p.type),
        new PresentationNetQuantity(p.netQuantity),
        new PresentationUnitOfMeasure(p.unitOfMeasure)
      )
    );
  }

  private ensureMaxFive(presentations: Array<PresentationPrimitives>): void {
    if (presentations.length > 5) {
      throw new Error('A product cannot have more than 5 presentations.');
    }
  }

  public getValue(): Presentation[] {
    return this.value;
  }

  public toPrimitives(): PresentationPrimitives[] {
    return this.value.map(p => p.toPrimitives());
  }
}
