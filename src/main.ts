import "reflect-metadata";
import { container } from "./catalog/product/infrastructure/container";
import { SaveProduct } from "./catalog/product/application/use-cases/save-product";
import { EventBus } from "./share/event-bus";
import "./share/handlers";

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
        id: uuid(),
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
    name: "Coca-Cola Retornable",
    unitOfMeasure: "UNIT",
    presentations: [
       {
        id: uuid(),
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
        id: uuid(),
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