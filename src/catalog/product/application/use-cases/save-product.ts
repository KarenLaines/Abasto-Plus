import { injectable, inject } from "inversify";
import { Product } from "../../domain/product";
import { ProductRepository } from "../../domain/product-repository";
import { TranslatorService } from "../ports/translator-service";

@injectable()
export class SaveProduct {

    constructor(
        @inject("ProductRepository")
        private repository: ProductRepository,

        @inject("TranslatorService")
        private translator: TranslatorService
    ) {}

    async execute(data: {
        id: string;
        name: string;
        unitOfMeasure: string;
        presentations: any[];
    }): Promise<void> {

        const translatedName = await this.translator.translate(data.name, "en");

        const product = Product.build(
            data.id,
            translatedName, //el nombre traducido
            data.unitOfMeasure,
            data.presentations
        );

        await this.repository.save(product);
    }
}