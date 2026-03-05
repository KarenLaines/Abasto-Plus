import "reflect-metadata";
import { container } from "./catalog/product/infrastructure/container";
import { SaveProduct } from "./catalog/product/application/use-cases/save-product";

async function main() {

  const saveProduct = container.get(SaveProduct);

  await saveProduct.execute({
    id: "150e8400-e29b-41d4-a716-446655440000",
    name: "Fideos Ina Guatemala",
    unitOfMeasure: "UNIT",
    presentations: []
  });

  console.log("Producto guardado correctamente");

}

main().catch(console.error);