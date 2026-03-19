import { Container } from "inversify";
import { SaveProduct } from "../application/use-cases/save-product";
import { MongoProductRepository } from "./mongo-product-repository";
import { ProductRepository } from "../domain/product-repository";
import { MongoConnection } from "./mongo-connection";
import { GoogleTranslator } from "./google-translator";
import { EventBus } from "../../../sharecl/event-bus";

const container = new Container();

const connection = new MongoConnection(
    "mongodb://localhost:27017",
    "practicaI"
    );

    container.bind<ProductRepository>("ProductRepository")
    .toDynamicValue(() => new MongoProductRepository(connection));

container.bind(SaveProduct).toSelf();
container.bind("TranslatorService").to(GoogleTranslator);

export { container };
container.bind(EventBus).toConstantValue(new EventBus());