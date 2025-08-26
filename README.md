# SearchBox

A powerful, customizable React search component with autocomplete, categories, and multiple themes.

⚠️ **Alpha Version**: This package is currently in alpha and not recommended for production use. The API may change in future releases.

## Features

- 🔍 **Smart Search**: Full-text search with customizable API endpoints
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
| `theme` | `'default' \| 'tailwind' \| 'bootstrap'` | `'default'` | Visual theme |
| `placeholder` | `string` | `'Search...'` | Input placeholder text |
| `searchCategories` | `SearchCategory[]` | - | Available search categories |
| `advancedSearch` | `boolean` | `false` | Enable advanced search panel |
| `advancedSearchContent` | `ReactNode` | - | Custom advanced search content |
| `onSearch` | `(results: SearchResult[]) => void` | - | Search results callback |
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

## Support

- 📖 [Documentation](https://searchbox.samirify.net/docs)
- 🐛 [Issues](https://github.com/samirify/searchbox/issues)