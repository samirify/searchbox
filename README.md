# SearchBox

<div style="background-color: #fee2e2; border: 3px solid #dc2626; border-radius: 8px; padding: 20px; margin: 20px 0; box-shadow: 0 4px 6px rgba(220, 38, 38, 0.1); color: #000000;">

⚠️ **ALPHA VERSION WARNING** ⚠️

**This package is currently in alpha and not recommended for production use. The API may change in future releases.**

</div>

A powerful, customizable React search component with autocomplete, categories, and multiple themes.

## 🚀 Compatibility

<div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 20px 0;">
  <img src="https://img.shields.io/badge/React-18%20%7C%2019-61dafb?logo=react&logoColor=white" alt="React 18 & 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4+-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3.4+" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3+-7952b3?logo=bootstrap&logoColor=white" alt="Bootstrap 5.3+" />
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178c6?logo=typescript&logoColor=white" alt="TypeScript 5.0+" />
  <img src="https://img.shields.io/badge/Next.js-15%20%7C%2016-000000?logo=next.js&logoColor=white" alt="Next.js 15 & 16" />
</div>

**Fully tested and compatible with:**
- ✅ **React 18.x & 19.x** - Works seamlessly with both versions
- ✅ **Tailwind CSS 3.4+** - Full support for Tailwind theming
- ✅ **Bootstrap 5.3+** - Complete Bootstrap theme integration
- ✅ **Next.js 15 & 16** - Server and client components
- ✅ **TypeScript 5.0+** - Full type definitions included

## Features

- 🔍 **Smart Search**: Full-text search with customizable API endpoints
- 🤖 **AI Search**: AI-powered search with OpenAI, Claude, and Gemini
- 🎯 **Autocomplete**: Real-time suggestions with keyboard navigation
- 📂 **Categories**: Organize search results by categories
- 🎨 **Multiple Themes**: Default, Tailwind CSS, and Bootstrap themes
- 🌙 **Dark Mode**: Built-in dark mode support
- 🔧 **Customizable**: Extensive customization options
- 📱 **Responsive**: Mobile-friendly design
- ⚡ **TypeScript**: Full TypeScript support

## Quick Install

```bash
npm install @samirify/searchbox
```

## Basic Usage

```jsx
import { SearchBox } from '@samirify/searchbox';

function App() {
  return (
    <SearchBox
      apiUrl="/api/search"
      autocompleteApiUrl="/api/autocomplete"
      placeholder="Search for anything..."
      onSearch={(results) => console.log('Search results:', results)}
    />
  );
}
```

## Advanced Usage

### With Autocomplete

```jsx
<SearchBox
  apiUrl="/api/search"
  autocompleteApiUrl="/api/autocomplete"
  autocomplete={true}
  placeholder="Search with autocomplete..."
  onSearch={(results) => console.log('Search results:', results)}
  onAutocomplete={(suggestions) => console.log('Suggestions:', suggestions)}
/>
```

### With Categories

```jsx
<SearchBox
  apiUrl="/api/search"
  autocompleteApiUrl="/api/autocomplete"
  searchCategories={[
    { value: 'all', label: 'All' },
    { value: 'documents', label: 'Documents' },
    { value: 'users', label: 'Users' },
    { value: 'projects', label: 'Projects' }
  ]}
  placeholder="Search by category..."
  onSearch={(results) => console.log('Search results:', results)}
/>
```

### With Different Themes

```jsx
// Default theme
<SearchBox theme="default" />

// Tailwind CSS theme
<SearchBox theme="tailwind" />

// Bootstrap theme
<SearchBox theme="bootstrap" />
```

### With Different Sizes

```jsx
// Extra small - compact for navigation bars (32px height)
<SearchBox size="xs" placeholder="Search..." />

// Small - default size (40px height)
<SearchBox size="sm" placeholder="Search..." />

// Medium - same as small (40px height)
<SearchBox size="md" placeholder="Search..." />

// Large - standalone search areas (56px height)
<SearchBox size="lg" placeholder="Search..." />
```

### With AI Search

```jsx
<SearchBox
  aiConfig={{
    provider: 'openai',
    apiKey: 'your-openai-api-key',
    model: 'gpt-4o',
    enabled: true,
    showToggle: true
  }}
  placeholder="Ask me anything..."
  onAISearch={(results, aiResponse) => {
    console.log('AI Results:', results);
    console.log('AI Explanation:', aiResponse?.aiExplanation);
  }}
  onAISearchError={(error) => console.error('AI Search Error:', error)}
/>
```

### With Advanced Search

```jsx
<SearchBox
  apiUrl="/api/search"
  showAdvancedSearch={true}
  advancedSearchContent={
    <div>
      <input type="date" placeholder="Date range" />
      <select>
        <option>Filter by type</option>
      </select>
    </div>
  }
  placeholder="Search with advanced options..."
  onSearch={(results) => console.log('Search results:', results)}
/>
```

### With Custom Error Handling

```jsx
<SearchBox
  apiUrl="/api/search"
  errorPosition="relative"
  errorClassName="my-custom-error"
  renderError={(error) => (
    <div className="custom-error-message">
      <span>⚠️ {error}</span>
    </div>
  )}
  onSearchError={() => console.log('Search failed')}
  placeholder="Search with custom error handling..."
/>
```

### With Custom Suggestion Rendering

```jsx
<SearchBox
  apiUrl="/api/search"
  autocomplete={true}
  renderSuggestion={(suggestion, index) => (
    <div className="custom-suggestion">
      <span className="suggestion-text">{suggestion.text}</span>
      {suggestion.category && (
        <span className="suggestion-category">{suggestion.category}</span>
      )}
    </div>
  )}
  suggestionsContainerClassName="my-suggestions"
  suggestionClassName="my-suggestion-item"
  placeholder="Search with custom suggestions..."
/>
```

### With Request/Response Transformers

```jsx
<SearchBox
  apiUrl="/api/search"
  transformSearchRequest={(data) => ({
    ...data,
    customField: 'customValue',
    timestamp: Date.now()
  })}
  transformSearchResponse={(response) => ({
    results: response.data.items.map(item => ({
      id: item.id,
      title: item.name,
      description: item.summary,
      url: item.link
    })),
    total: response.data.totalCount,
    query: response.query
  })}
  placeholder="Search with custom transformers..."
/>
```

### With Dark Mode

```jsx
<SearchBox
  apiUrl="/api/search"
  mode="dark"
  theme="default"
  placeholder="Search in dark mode..."
  onSearch={(results) => console.log('Search results:', results)}
/>
```

### With Custom Loading Indicator

```jsx
<SearchBox
  apiUrl="/api/search"
  autocomplete={true}
  loadingIndicator={
    <div className="custom-loader">
      <div className="spinner"></div>
      <span>Searching...</span>
    </div>
  }
  placeholder="Search with custom loading..."
/>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiUrl` | `string` | - | URL for search API endpoint |
| `placeholder` | `string` | `'Search...'` | Input placeholder text |
| `searchButtonLabel` | `string` | - | Custom label for search button |
| `className` | `string` | - | Additional CSS classes |
| `theme` | `'auto' \| 'default' \| 'bootstrap' \| 'tailwind'` | `'default'` | Visual theme |
| `mode` | `'light' \| 'dark'` | `'light'` | Color mode |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Component size variant |
| `disabled` | `boolean` | `false` | Disable the search input |
| `onSearch` | `(results: SearchResult[]) => void` | - | Search results callback |
| `onSearchStart` | `(requestData?: any) => void` | - | Search start callback |
| `onSearchError` | `() => void` | - | Search error callback |
| `onDropdownToggle` | `(isOpen: boolean) => void` | - | Dropdown toggle callback |
| **Autocomplete Props** |
| `autocomplete` | `boolean` | `false` | Enable autocomplete suggestions |
| `onSuggestionSelect` | `(suggestion: AutocompleteSuggestion) => void` | - | Suggestion selection callback |
| `onSuggestionSelectAndSearch` | `(suggestion: AutocompleteSuggestion) => void` | - | Suggestion selection with search callback |
| `minQueryLength` | `number` | - | Minimum query length for autocomplete |
| `debounceMs` | `number` | - | Debounce delay for autocomplete requests |
| `showDropdownButton` | `boolean` | - | Show dropdown button for categories |
| **Category Props** |
| `searchCategories` | `SearchCategory[]` | - | Available search categories |
| `defaultCategory` | `string` | - | Default selected category |
| `onCategoryChange` | `(category: string) => void` | - | Category change callback |
| **Advanced Search Props** |
| `showAdvancedSearch` | `boolean` | `false` | Enable advanced search panel |
| `advancedSearchContent` | `ReactNode` | - | Custom advanced search content |
| **Filter Props** |
| `statusFilter` | `string` | - | Status filter value |
| `dateFilter` | `string` | - | Date filter value |
| **Error Handling Props** |
| `errorPosition` | `'absolute' \| 'relative' \| 'custom'` | `'absolute'` | Error message position |
| `errorClassName` | `string` | - | Custom error message CSS classes |
| `renderError` | `(error: string) => ReactNode` | - | Custom error renderer |
| **HTTP Client Props** |
| `httpClient` | `HttpClient` | - | Custom HTTP client instance |
| `requestConfig` | `RequestConfig` | - | Request configuration options |
| **Transform Props** |
| `transformSearchRequest` | `(data: SearchRequestData) => any` | - | Transform search request data |
| `transformAutocompleteRequest` | `(data: AutocompleteRequestData) => any` | - | Transform autocomplete request data |
| `transformSearchResponse` | `(response: any) => SearchResponse` | - | Transform search response |
| `transformAutocompleteResponse` | `(response: any) => AutocompleteResponse` | - | Transform autocomplete response |
| **Suggestion Customization Props** |
| `renderSuggestion` | `(suggestion: AutocompleteSuggestion, index: number) => ReactNode` | - | Custom suggestion renderer |
| `suggestionsContainerClassName` | `string` | - | Suggestions container CSS classes |
| `suggestionClassName` | `string` | - | Individual suggestion CSS classes |
| **AI Search Props** |
| `aiConfig` | `AIConfig` | - | AI search configuration |
| `onAISearch` | `(results: SearchResult[], aiResponse?: AISearchResponse) => void` | - | AI search results callback |
| `onAISearchStart` | `(requestData?: AISearchRequest) => void` | - | AI search start callback |
| `onAISearchError` | `(error: string) => void` | - | AI search error callback |
| `transformAISearchRequest` | `(data: AISearchRequest) => any` | - | Transform AI search request |
| `transformAISearchResponse` | `(response: any) => AISearchResponse` | - | Transform AI search response |
| `initialAIMode` | `boolean` | - | Start in AI mode by default |
| **Loading Props** |
| `loadingIndicator` | `ReactNode` | - | Custom loading indicator for autocomplete |
| **Custom CSS Props** |
| `customCssClasses` | `CustomCssClasses` | - | Custom CSS classes for specific components |

### Types

```typescript
interface SearchResult {
  id: string;
  title: string;
  description?: string;
  url?: string;
  category?: string;
  metadata?: Record<string, any>;
}

interface AutocompleteSuggestion {
  id: string;
  text: string;
  category?: string;
}

interface SearchCategory {
  value: string;
  label: string;
}

interface AIConfig {
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

interface AISearchResponse {
  results: SearchResult[];
  total: number;
  query: string;
  message: string;
  aiGenerated?: boolean;
  aiExplanation?: string;
  originalQuery?: string;
}

interface CustomCssClasses {
  dropdownButtonClassName?: string;
  dropdownMaxWidth?: string;
  searchButtonClassName?: string;
  inputClassName?: string;
  containerClassName?: string;
}

interface AISearchRequest {
  query: string;
  category?: string;
  filters?: Record<string, any>;
}

interface SearchRequestData {
  query: string;
  category?: string;
  filters?: Record<string, any>;
}

interface AutocompleteRequestData {
  query: string;
  category?: string;
}

interface SearchResponse {
  results: SearchResult[];
  total: number;
  query: string;
}

interface AutocompleteResponse {
  suggestions: AutocompleteSuggestion[];
  query: string;
}

interface HttpClient {
  get: (url: string, config?: any) => Promise<any>;
  post: (url: string, data?: any, config?: any) => Promise<any>;
}

interface RequestConfig {
  timeout?: number;
  headers?: Record<string, string>;
  retries?: number;
}
```

## HTTP Client Configuration

For authenticated environments, you can use custom HTTP clients:

```jsx
import { SearchBox, createAuthenticatedHttpClient } from '@samirify/searchbox';

// With authentication
const httpClient = createAuthenticatedHttpClient({
  baseURL: 'https://api.example.com',
  headers: {
    'Authorization': 'Bearer your-token'
  },
  getAuthToken: () => localStorage.getItem('authToken'),
  onUnauthorized: () => window.location.href = '/login'
});

<SearchBox
  apiUrl="/api/search"
  httpClient={httpClient}
  placeholder="Authenticated search..."
  onSearch={(results) => console.log('Search results:', results)}
/>
```

### With Axios (requires `npm install axios`)

```jsx
import { SearchBox, createAxiosClientWithInterceptors } from '@samirify/searchbox';

const httpClient = await createAxiosClientWithInterceptors();

<SearchBox
  apiUrl="/api/search"
  httpClient={httpClient}
  placeholder="Search with axios..."
  onSearch={(results) => console.log('Search results:', results)}
/>
```

## Styling

### Default Theme
The default theme provides a clean, modern look with built-in dark mode support.

### Tailwind CSS Theme
For Tailwind CSS projects, use the `tailwind` theme:

```jsx
<SearchBox theme="tailwind" />
```

### Bootstrap Theme
For Bootstrap projects, use the `bootstrap` theme:

```jsx
<SearchBox theme="bootstrap" />
```

### Custom Styling
You can customize the appearance using CSS classes:

```jsx
<SearchBox
  className="my-custom-search-box"
  placeholder="Custom styled search..."
/>
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## AI Search Providers

The SearchBox component supports multiple AI providers:

### OpenAI
```jsx
<SearchBox
  aiConfig={{
    provider: 'openai',
    apiKey: 'your-openai-api-key',
    model: 'gpt-4o',
    enabled: true
  }}
  onAISearch={(results) => console.log('OpenAI Results:', results)}
/>
```

### Claude
```jsx
<SearchBox
  aiConfig={{
    provider: 'claude',
    apiKey: 'your-claude-api-key',
    model: 'claude-3-sonnet-20240229',
    enabled: true
  }}
  onAISearch={(results) => console.log('Claude Results:', results)}
/>
```

### Gemini
```jsx
<SearchBox
  aiConfig={{
    provider: 'gemini',
    apiKey: 'your-gemini-api-key',
    model: 'gemini-pro',
    enabled: true
  }}
  onAISearch={(results) => console.log('Gemini Results:', results)}
/>
```

## Support

- 📖 [Documentation](https://searchbox.samirify.net/docs)
- 🤖 [AI Search Documentation](https://searchbox.samirify.net/docs/ai-search)
- 🐛 [Issues](https://github.com/samirify/searchbox/issues)