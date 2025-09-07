import React from 'react';
export interface SearchResult {
    id: number;
    title: string;
    description?: string;
    type: string;
    category?: string;
    url: string;
}
export interface SearchResponse {
    results: SearchResult[];
    total: number;
    query: string;
    message: string;
}
export interface AutocompleteSuggestion {
    id: string | number;
    text: string;
    title?: string;
    type?: string;
    url?: string;
    category?: string;
    [key: string]: any;
}
export interface AutocompleteResponse {
    suggestions: AutocompleteSuggestion[];
    results?: AutocompleteSuggestion[];
    query: string;
}
export interface SearchCategory {
    value: string;
    label: string;
}
export interface RequestConfig {
    headers?: Record<string, string>;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    timeout?: number;
    credentials?: 'omit' | 'same-origin' | 'include';
    mode?: 'cors' | 'no-cors' | 'same-origin';
    cache?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';
    redirect?: 'follow' | 'error' | 'manual';
    referrer?: string;
    referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
}
export interface SearchRequestData {
    query: string;
    category?: string;
    timestamp: string;
    filters?: Record<string, any>;
}
export interface AutocompleteRequestData {
    query: string;
    timestamp: string;
    category?: string;
}
export interface HttpClient {
    request<T = any>(config: {
        url: string;
        method?: string;
        headers?: Record<string, string>;
        data?: any;
        params?: Record<string, any>;
        timeout?: number;
        signal?: AbortSignal;
    }): Promise<{
        data: T;
        status: number;
        statusText: string;
    }>;
}
export declare class FetchHttpClient implements HttpClient {
    request<T = any>(config: {
        url: string;
        method?: string;
        headers?: Record<string, string>;
        data?: any;
        params?: Record<string, any>;
        timeout?: number;
        signal?: AbortSignal;
    }): Promise<{
        data: T;
        status: number;
        statusText: string;
    }>;
}
export interface AIConfig {
    provider: 'openai' | 'claude' | 'gemini' | 'custom';
    apiKey: string;
    model?: string;
    baseUrl?: string;
    temperature?: number;
    maxTokens?: number;
    systemPrompt?: string;
    enabled?: boolean;
    showToggle?: boolean;
    toggleLabel?: string;
    customHeaders?: Record<string, string>;
}
export interface AISearchRequest {
    query: string;
    context?: string;
    category?: string;
    filters?: Record<string, any>;
    timestamp: string;
}
export interface AISearchResponse {
    results: SearchResult[];
    total: number;
    query: string;
    message: string;
    aiGenerated?: boolean;
    aiExplanation?: string;
    originalQuery?: string;
}
export interface AIProvider {
    name: string;
    search: (config: AIConfig, request: AISearchRequest) => Promise<AISearchResponse>;
}
export interface SearchBoxProps {
    apiUrl?: string;
    placeholder?: string;
    searchButtonLabel?: string;
    className?: string;
    theme?: 'auto' | 'default' | 'bootstrap' | 'tailwind';
    mode?: 'light' | 'dark';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    onSearch?: (results: SearchResult[]) => void;
    onSearchStart?: (requestData?: any) => void;
    onSearchError?: () => void;
    onDropdownToggle?: (isOpen: boolean) => void;
    disabled?: boolean;
    autocomplete?: boolean;
    onSuggestionSelect?: (suggestion: AutocompleteSuggestion) => void;
    onSuggestionSelectAndSearch?: (suggestion: AutocompleteSuggestion) => void;
    minQueryLength?: number;
    debounceMs?: number;
    showDropdownButton?: boolean;
    searchCategories?: SearchCategory[];
    defaultCategory?: string;
    onCategoryChange?: (category: string) => void;
    showAdvancedSearch?: boolean;
    advancedSearchContent?: React.ReactNode;
    statusFilter?: string;
    dateFilter?: string;
    errorPosition?: 'absolute' | 'relative' | 'custom';
    errorClassName?: string;
    renderError?: (error: string) => React.ReactNode;
    _onSuggestionSelectAndSearch?: (suggestion: AutocompleteSuggestion) => void;
    httpClient?: HttpClient;
    requestConfig?: RequestConfig;
    transformSearchRequest?: (data: SearchRequestData) => any;
    transformAutocompleteRequest?: (data: AutocompleteRequestData) => any;
    transformSearchResponse?: (response: any) => SearchResponse;
    transformAutocompleteResponse?: (response: any) => AutocompleteResponse;
    renderSuggestion?: (suggestion: AutocompleteSuggestion, index: number) => React.ReactNode;
    suggestionsContainerClassName?: string;
    suggestionClassName?: string;
    aiConfig?: AIConfig;
    onAISearch?: (results: SearchResult[], aiResponse?: AISearchResponse) => void;
    onAISearchStart?: (requestData?: AISearchRequest) => void;
    onAISearchError?: (error: string) => void;
    transformAISearchRequest?: (data: AISearchRequest) => any;
    transformAISearchResponse?: (response: any) => AISearchResponse;
    initialAIMode?: boolean;
}
//# sourceMappingURL=search-box.types.d.ts.map