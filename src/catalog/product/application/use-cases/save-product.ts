

import { Product } from "../../domain/product";
import { ProductRepository } from "../product-repository";

export class SaveProduct {

    constructor(
        private repository: ProductRepository
    ) {}

    async execute(data: {
        id: string;
        name: string;
        unitOfMeasure: string;
        presentations: {
        id: string;
        name: string;
        type: string;
        netQuantity: number;
        unitOfMeasure: string;
        }[];
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