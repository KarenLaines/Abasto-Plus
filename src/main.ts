import "reflect-metadata";
import { container } from "./catalog/product/infrastructure/container";
import { SaveProduct } from "./catalog/product/application/use-cases/save-product";
import { EventBus } from "./sharecl/event-bus";
import "./sharecl/handlers";

import { v4 as uuid } from "uuid";



async function main() {

  const saveProduct = container.get(SaveProduct);
  const eventBus = container.get(EventBus);

  await saveProduct.execute({
    id: uuid(),
    name: "Lapiz de color azul marca Bic",
    unitOfMeasure: "UNIT",
    presentations: [
       {
        id: '111e8400-e29b-41d4-a716-446655440000',
        name: 'Botella 1L',
        type: 'BOTTLE',
        netQuantity: 1,
        unitOfMeasure: 'LT'
      }
    ]
  });
  console.log("Producto guardado correctamente");

  await saveProduct.execute({
    id: uuid(),
    name: "Lapiz",
    unitOfMeasure: "UNIT",
    presentations: [
       {
        id: '111e8400-e29b-41d4-a716-446655440000',
        name: 'Botella 1L',
        type: 'BOTTLE',
        netQuantity: 1,
        unitOfMeasure: 'LT'
      }
    ]
  });
  console.log("Producto guardado correctamente");

  await saveProduct.execute({
    id: uuid(),
    name: "Lapiz de color azul marca Bic",
    unitOfMeasure: "UNIT",
    presentations: [
       {
        id: '111e8400-e29b-41d4-a716-446655440000',
        name: 'Botella 1L',
        type: 'BOTTLE',
        netQuantity: 1,
        unitOfMeasure: 'LT'
      }
    ]
  });
  console.log("Producto guardado correctamente");

  await eventBus.consume();
}

main().catch(console.error);