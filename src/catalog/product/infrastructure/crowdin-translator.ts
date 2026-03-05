import { TranslatorService } from "../application/ports/translator-service";

export class CrowdinTranslator implements TranslatorService {

    async translate(text: string, targetLang: string): Promise<string> {
        // simulación de traducción
        return text + " (translated)";
    }

}