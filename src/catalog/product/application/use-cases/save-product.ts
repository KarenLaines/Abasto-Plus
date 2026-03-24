import { injectable, inject } from "inversify";
import { Product } from "../../domain/product";
import { ProductRepository } from "../../domain/product-repository";
import { TranslatorService } from "../ports/translator-service";
import { EventBus } from "../../../../share/event-bus";

@injectable()
export class SaveProduct {

    constructor(
        @inject("ProductRepository")
        private repository: ProductRepository,

        @inject("TranslatorService")
        private translator: TranslatorService,

        @inject(EventBus)
        private eventBus:EventBus
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
        this.eventBus.publish("product_created", product.toPrimitives());
    }
}