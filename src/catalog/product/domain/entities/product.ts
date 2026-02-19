import { ProductId } from '../value-objects/product-id';
import { ProductName } from '../value-objects/product-name';
import { ProductBaseUnit } from '../value-objects/product-base-unit';
import { ProductPresentations } from './product-presentation';

export class Product {

  private readonly id: ProductId;
  private readonly name: ProductName;
  private readonly baseUnit: ProductBaseUnit;
  private readonly presentations: ProductPresentations;

  constructor(
    id: ProductId,
    name: ProductName,
    baseUnit: ProductBaseUnit,
    presentations: ProductPresentations
  ) {
    this.id = id;
    this.name = name;
    this.baseUnit = baseUnit;
    this.presentations = presentations;
  }

  public static build(
    id: string,
    name: string,
    baseUnit: string,
    presentations: Array<{
      id: string;
      name: string;
      type: string;
      netQuantity: number;
      unitOfMeasure: string;
    }>
  ): Product {

    return new Product(
      new ProductId(id),
      new ProductName(name),
      new ProductBaseUnit(baseUnit),
      new ProductPresentations(presentations)
    );
  }

  public toPrimitives() {
    return {
      id: this.id.getValue(),
      name: this.name.getValue(),
      baseUnit: this.baseUnit.getValue(),
      presentations: this.presentations.toPrimitives()
    };
  }
}
