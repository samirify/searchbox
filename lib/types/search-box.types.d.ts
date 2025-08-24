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
    type?: string;
    url?: string;
    category?: string;
}
export interface AutocompleteResponse {
    suggestions: AutocompleteSuggestion[];
    query: string;
}
export interface SearchCategory {
    value: string;
    label: string;
}
export interface SearchBoxProps {
    apiUrl?: string;
    placeholder?: string;
    searchButtonLabel?: string;
    className?: string;
    theme?: 'auto' | 'default' | 'bootstrap' | 'tailwind';
    mode?: 'light' | 'dark';
    size?: 'compact' | 'medium' | 'large';
    onSearch?: (results: SearchResult[]) => void;
    onSearchStart?: (requestData?: any) => void;
    onSearchError?: () => void;
    onDropdownToggle?: (isOpen: boolean) => void;
    disabled?: boolean;
    autocomplete?: boolean;
    autocompleteApiUrl?: string;
    onSuggestionSelect?: (suggestion: AutocompleteSuggestion) => void;
    onSuggestionSelectAndSearch?: (suggestion: AutocompleteSuggestion) => void;
    autoSearchOnSelect?: boolean;
    minQueryLength?: number;
    debounceMs?: number;
    showDropdownButton?: boolean;
    searchCategories?: SearchCategory[];
    defaultCategory?: string;
    onCategoryChange?: (category: string) => void;
    showAdvancedSearch?: boolean;
    advancedSearchContent?: React.ReactNode;
    hideSearchButton?: boolean;
    statusFilter?: string;
    dateFilter?: string;
    errorPosition?: 'absolute' | 'relative' | 'custom';
    errorClassName?: string;
    renderError?: (error: string) => React.ReactNode;
    _onSuggestionSelectAndSearch?: (suggestion: AutocompleteSuggestion) => void;
}
//# sourceMappingURL=search-box.types.d.ts.map