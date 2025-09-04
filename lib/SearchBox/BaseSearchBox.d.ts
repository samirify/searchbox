import React from 'react';
import { SearchBoxProps, AutocompleteSuggestion } from '../types/search-box.types';
export interface BaseSearchBoxState {
    query: string;
    error: string;
    showAdvancedPanel: boolean;
    selectedCategory: string;
    selectedCategoryLabel: string;
    isSearching: boolean;
    dropdownOpen: boolean;
    suggestions: AutocompleteSuggestion[];
    isLoading: boolean;
    autocompleteError: string | null;
}
export interface BaseSearchBoxHandlers {
    handleSearch: () => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleInputFocus: () => void;
    handleKeyPress: (e: React.KeyboardEvent) => void;
    handleSuggestionSelect: (suggestion: AutocompleteSuggestion) => void;
    handleSuggestionSelectAndSearch: (suggestion: AutocompleteSuggestion) => void;
    handleCategorySelect: (categoryValue: string, categoryLabel: string) => void;
    toggleDropdown: (e: React.MouseEvent) => void;
    toggleAdvancedPanel: () => void;
    closeAdvancedPanel: () => void;
    clearSuggestions: () => void;
    renderErrorMessage: (errorMessage: string) => React.ReactNode;
    getErrorPositionClass: () => string;
    getIsDark: () => boolean;
    getCurrentSearchQuery: () => string;
}
export interface BaseSearchBoxProps extends SearchBoxProps {
    children: (state: BaseSearchBoxState, handlers: BaseSearchBoxHandlers, refs: {
        dropdownRef: React.RefObject<HTMLDivElement | null>;
        advancedSearchRef: React.RefObject<HTMLDivElement | null>;
        advancedButtonRef: React.RefObject<HTMLButtonElement | null>;
        inputRef: React.RefObject<HTMLInputElement | null>;
        suggestionsRef: React.RefObject<HTMLDivElement | null>;
    }) => React.ReactNode;
}
export declare const BaseSearchBox: React.FC<BaseSearchBoxProps>;
//# sourceMappingURL=BaseSearchBox.d.ts.map