export interface TranslatorService {
    translate(text: string, targetLang: string): Promise<string>;
}