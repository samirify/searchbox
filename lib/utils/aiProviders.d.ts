import { AIConfig, AISearchRequest, AISearchResponse, AIProvider } from '../types/search-box.types';
export declare class OpenAIProvider implements AIProvider {
    name: string;
    search(config: AIConfig, request: AISearchRequest): Promise<AISearchResponse>;
}
export declare class ClaudeProvider implements AIProvider {
    name: string;
    search(config: AIConfig, request: AISearchRequest): Promise<AISearchResponse>;
}
export declare class GeminiProvider implements AIProvider {
    name: string;
    search(config: AIConfig, request: AISearchRequest): Promise<AISearchResponse>;
}
export declare class CustomAIProvider implements AIProvider {
    name: string;
    search(config: AIConfig, request: AISearchRequest): Promise<AISearchResponse>;
}
export declare const AI_PROVIDERS: Record<string, AIProvider>;
export declare const getAIProvider: (providerName: string) => AIProvider;
//# sourceMappingURL=aiProviders.d.ts.map