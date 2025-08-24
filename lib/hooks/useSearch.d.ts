import { SearchResponse, SearchResult } from '../types/search-box.types';
interface UseSearchOptions {
    apiUrl?: string;
    onSearch?: (results: SearchResult[]) => void;
    category?: string;
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
export declare const useSearch: ({ apiUrl, onSearch, category }?: UseSearchOptions) => UseSearchReturn;
export {};
//# sourceMappingURL=useSearch.d.ts.map