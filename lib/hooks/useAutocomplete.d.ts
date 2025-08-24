import { AutocompleteSuggestion } from '../types/search-box.types';
interface UseAutocompleteOptions {
    apiUrl?: string;
    minQueryLength?: number;
    debounceMs?: number;
    onSuggestionSelect?: (suggestion: AutocompleteSuggestion) => void;
    category?: string;
    onAutocompleteRequest?: (requestData: any, exampleName?: string, theme?: string) => void;
    debugTheme?: string;
    debugExampleName?: string;
}
interface UseAutocompleteReturn {
    suggestions: AutocompleteSuggestion[];
    isLoading: boolean;
    error: string | null;
    handleInputChange: (value: string) => void;
    clearSuggestions: () => void;
}
export declare const useAutocomplete: ({ apiUrl, minQueryLength, debounceMs, onSuggestionSelect: _onSuggestionSelect, category, onAutocompleteRequest, debugTheme, debugExampleName, }?: UseAutocompleteOptions) => UseAutocompleteReturn;
export {};
//# sourceMappingURL=useAutocomplete.d.ts.map