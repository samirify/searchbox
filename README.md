# SearchBox

<div style="background-color: #fee2e2; border: 3px solid #dc2626; border-radius: 8px; padding: 20px; margin: 20px 0; box-shadow: 0 4px 6px rgba(220, 38, 38, 0.1); color: #000000;">

⚠️ **ALPHA VERSION WARNING** ⚠️

**This package is currently in alpha and not recommended for production use. The API may change in future releases.**

</div>

A powerful, customizable React search component with autocomplete, categories, and multiple themes.

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
  advancedSearch={true}
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

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiUrl` | `string` | - | URL for search API endpoint |
| `autocompleteApiUrl` | `string` | - | URL for autocomplete API endpoint (optional - if not provided, will be constructed from `apiUrl` + `/autocomplete`) |
| `autocomplete` | `boolean` | `false` | Enable autocomplete suggestions |
| `aiConfig` | `AIConfig` | - | AI search configuration |
| `theme` | `'default' \| 'tailwind' \| 'bootstrap'` | `'default'` | Visual theme |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Component size variant |
| `placeholder` | `string` | `'Search...'` | Input placeholder text |
| `searchCategories` | `SearchCategory[]` | - | Available search categories |
| `advancedSearch` | `boolean` | `false` | Enable advanced search panel |
| `advancedSearchContent` | `ReactNode` | - | Custom advanced search content |
| `onSearch` | `(results: SearchResult[]) => void` | - | Search results callback |
| `onAISearch` | `(results: SearchResult[], aiResponse?: AISearchResponse) => void` | - | AI search results callback |
| `onAISearchStart` | `(requestData?: AISearchRequest) => void` | - | AI search start callback |
| `onAISearchError` | `(error: string) => void` | - | AI search error callback |
| `onAutocomplete` | `(suggestions: AutocompleteSuggestion[]) => void` | - | Autocomplete suggestions callback |
| `onSearchError` | `(error: string) => void` | - | Error handling callback |

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