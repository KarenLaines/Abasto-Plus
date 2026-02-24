import { MongoProductRepository } from './catalog/product/infrastructure/mongo-product-repository';
import { Product } from './catalog/product/domain/product';

async function main() {

  const repository = new MongoProductRepository();

  const product = Product.build(
    '550e8400-e29b-41d4-a716-446655440000',
    'Agua Salvavidas',
    'L',
    [
      {
        id: '111e8400-e29b-41d4-a716-446655440000',
        name: 'Botella 1L',
        type: 'BOTTLE',
        netQuantity: 1,
        unitOfMeasure: 'LT'
      }
    ]
  );

  await repository.save(product);

  console.log('Producto guardado correctamente 🚀');
}

main().catch(console.error);