import { injectable } from "inversify";
import { TranslatorService } from "../application/ports/translator-service";

import { translate } from "@vitalets/google-translate-api";

@injectable()
export class GoogleTranslator implements TranslatorService {

    async translate(text: string, targetLang: string): Promise<string> {
        const result = await translate(text, { to: targetLang });
        return result.text;
    }

}