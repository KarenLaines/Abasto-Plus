import { MongoProductRepository } from './catalog/product/infrastructure/mongo-product-repository';
import { SaveProduct } from './catalog/product/application/use-cases/save-product';

async function main() {

  const repository = new MongoProductRepository();

  const saveProduct = new SaveProduct(repository);

  await saveProduct.execute({
    id: '150e8400-e29b-41d4-a716-446655440000',
    name: 'Fideos Ina Guatemala',
    unitOfMeasure: 'UNIT',
    presentations: [
      {
        id: '151e7852-e35b-14d9-a674-558877660000',
        name: 'Fideos de Spaguetti',
        type: 'BAG',
        netQuantity: 500,
        unitOfMeasure: 'G'
      },
      {
        id: '161e7852-e35b-14d9-a674-558877660000',
        name: 'Caja de fideos de caracol',
        type: 'BOX',
        netQuantity: 500,
        unitOfMeasure: 'LB'
      }
    ]
  });

  console.log('Producto guardado correctamente');
}

main().catch(console.error);