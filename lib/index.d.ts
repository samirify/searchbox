import './assets/scss/search-box.scss';
export { default as SearchBox } from './SearchBox/SearchBoxWithProvider';
export { default as SearchBoxComponent } from './SearchBox/SearchBox';
export type { SearchBoxProps, AutocompleteSuggestion, AutocompleteResponse, SearchResult, SearchResponse, SearchCategory, HttpClient, FetchHttpClient, RequestConfig, SearchRequestData, AutocompleteRequestData } from './types/search-box.types';
export { useAutocomplete } from './hooks/useAutocomplete';
export { useSearch } from './hooks/useSearch';
export { AxiosHttpClient, createAxiosClientWithInterceptors, createAuthenticatedHttpClient } from './utils/httpClients';
export { CompleteExample } from './SearchBox/examples/CompleteExample';
export { AxiosExample, CustomAxiosExample, RequestConfigExample, TransformersExample } from './examples/axios-example';
export { AuthenticatedSearchBox, RoleBasedSearchBox } from './examples/authenticated-search-example';
//# sourceMappingURL=index.d.ts.map