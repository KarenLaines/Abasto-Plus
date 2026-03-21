import { container } from "../../catalog/product/infrastructure/container";
import { EventBus } from "../event-bus";
import { notifyBoss } from "./notify-boss";
import { sendSMS } from "./send-sms";

const eventBus = container.get(EventBus);

eventBus.subscribe("product_created", notifyBoss);
eventBus.subscribe("product_created", sendSMS);