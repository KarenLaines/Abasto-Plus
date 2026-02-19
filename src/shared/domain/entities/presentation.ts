import { PresentationId } from './presentation/presentation-id';
import { PresentationName } from './presentation/presentation-name';
import { PresentationType } from './presentation/presentation-type';
import { PresentationNetQuantity } from './presentation/presentation-net-quantity';
import { PresentationUnitOfMeasure } from './presentation/presentation-unit-of-measure';

export class Presentation {

  private readonly id: PresentationId;
  private readonly name: PresentationName;
  private readonly type: PresentationType;
  private readonly netQuantity: PresentationNetQuantity;
  private readonly unitOfMeasure: PresentationUnitOfMeasure;

  constructor(
    id: PresentationId,
    name: PresentationName,
    type: PresentationType,
    netQuantity: PresentationNetQuantity,
    unitOfMeasure: PresentationUnitOfMeasure
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.netQuantity = netQuantity;
    this.unitOfMeasure = unitOfMeasure;
  }

  public getId(): string {
    return this.id.getValue();
  }

  public getName(): string {
    return this.name.getValue();
  }

  public getType(): string {
    return this.type.getValue();
  }

  public getNetQuantity(): number {
    return this.netQuantity.getValue();
  }

  public getUnitOfMeasure(): string {
    return this.unitOfMeasure.getValue();
  }

  public toPrimitives() {
    return {
      id: this.getId(),
      name: this.getName(),
      type: this.getType(),
      netQuantity: this.getNetQuantity(),
      unitOfMeasure: this.getUnitOfMeasure(),
    };
  }
}
