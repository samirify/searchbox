import './assets/scss/search-box.scss';
export { default as SearchBox } from './SearchBox/SearchBoxWithProvider';
export { default as SearchBoxComponent } from './SearchBox/SearchBox';
export type { SearchBoxProps, AutocompleteSuggestion, AutocompleteResponse, SearchResult, SearchResponse, SearchCategory, HttpClient, FetchHttpClient, RequestConfig, SearchRequestData, AutocompleteRequestData, AIConfig, AISearchRequest, AISearchResponse, AIProvider } from './types/search-box.types';
export { useAutocomplete } from './hooks/useAutocomplete';
export { useSearch } from './hooks/useSearch';
export { useAISearch } from './hooks/useAISearch';
export { AxiosHttpClient, createAxiosClientWithInterceptors, createAuthenticatedHttpClient } from './utils/httpClients';
export { OpenAIProvider, ClaudeProvider, GeminiProvider, CustomAIProvider, getAIProvider, AI_PROVIDERS } from './utils/aiProviders';
export { CompleteExample } from './SearchBox/examples/CompleteExample';
//# sourceMappingURL=index.d.ts.map