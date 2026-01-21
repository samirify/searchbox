import { AIConfig, AISearchRequest, AISearchResponse, SearchResult } from '../types/search-box.types';
interface UseAISearchOptions {
    aiConfig?: AIConfig;
    onAISearch?: (results: SearchResult[], aiResponse?: AISearchResponse) => void;
    onAISearchStart?: (requestData?: AISearchRequest) => void;
    onAISearchError?: (error: string) => void;
    transformAISearchRequest?: (data: AISearchRequest) => any;
    transformAISearchResponse?: (response: any) => AISearchResponse;
    initialAIMode?: boolean;
}
interface UseAISearchReturn {
    isAISearching: boolean;
    aiSearchResults: AISearchResponse | null;
    aiError: string | null;
    isAIEnabled: boolean;
    handleAISearch: (query: string, category?: string, context?: string) => Promise<void>;
    clearAIResults: () => void;
    toggleAI: () => void;
    isAIMode: boolean;
}
export declare const useAISearch: ({ aiConfig, onAISearch, onAISearchStart, onAISearchError, transformAISearchRequest, transformAISearchResponse, initialAIMode }?: UseAISearchOptions) => UseAISearchReturn;
export {};
//# sourceMappingURL=useAISearch.d.ts.map