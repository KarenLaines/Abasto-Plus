import "reflect-metadata";
import { container } from "./catalog/product/infrastructure/container";
import { SaveProduct } from "./catalog/product/application/use-cases/save-product";

import { v4 as uuid } from "uuid";



async function main() {

  const saveProduct = container.get(SaveProduct);

  await saveProduct.execute({
    id: uuid(),
    name: "Lapiz de color azul marca Bic",
    unitOfMeasure: "UNIT",
    presentations: []
  });

  console.log("Producto guardado correctamente");

}

main().catch(console.error);