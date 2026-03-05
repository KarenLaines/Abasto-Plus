import { injectable, inject } from "inversify";
import { Product } from "../../domain/product";
import { ProductRepository } from "../../domain/product-repository";

@injectable()
export class SaveProduct {

    constructor(
        @inject("ProductRepository")
        private repository: ProductRepository
    ) {}

    async execute(data: {
        id: string;
        name: string;
        unitOfMeasure: string;
        presentations: any[];
    }): Promise<void> {

        const product = Product.build(
        data.id,
        data.name,
        data.unitOfMeasure,
        data.presentations
        );

        await this.repository.save(product);
    }
}