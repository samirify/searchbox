import { SearchResponse, SearchResult, HttpClient, RequestConfig, SearchRequestData } from '../types/search-box.types';
interface UseSearchOptions {
    apiUrl?: string;
    onSearch?: (results: SearchResult[]) => void;
    category?: string;
    httpClient?: HttpClient;
    requestConfig?: RequestConfig;
    transformSearchRequest?: (data: SearchRequestData) => any;
    transformSearchResponse?: (response: any) => SearchResponse;
}
interface UseSearchReturn {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    isSearching: boolean;
    searchResults: SearchResponse | null;
    error: string | null;
    handleSearch: () => void;
    clearResults: () => void;
}
export declare const useSearch: ({ apiUrl, onSearch, category, httpClient, requestConfig, transformSearchRequest, transformSearchResponse }?: UseSearchOptions) => UseSearchReturn;
export {};
//# sourceMappingURL=useSearch.d.ts.map