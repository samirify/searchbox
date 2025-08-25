# SearchBox Component

A flexible and customizable search box component for React applications with autocomplete support, multiple themes, and authentication integration.

## Features

- 🔍 **Advanced Search**: Full-text search with categories and filters
- 🔄 **Autocomplete**: Real-time suggestions with debouncing
- 🎨 **Multiple Themes**: Default, Bootstrap, and Tailwind CSS support
- 🔐 **Authentication Ready**: Built-in support for authenticated APIs
- 🚀 **HTTP Client Flexible**: Use with fetch, axios, or custom HTTP clients
- 🔧 **Request/Response Transformers**: Customize API request/response formats
- 👥 **Role-Based Access**: Support for different user roles and permissions
- 📱 **Responsive Design**: Works on all screen sizes
- ♿ **Accessible**: WCAG compliant with keyboard navigation
- 🎯 **TypeScript Support**: Full type safety
- 🔧 **Highly Customizable**: Extensive configuration options

## Quick Start

### Basic Usage

```tsx
import { SearchBox } from 'searchbox';

function App() {
  return (
    <SearchBox
      apiUrl="/api/search"
      autocompleteApiUrl="/api/autocomplete"
      autocomplete={true}
      placeholder="Search..."
      onSearch={(results) => console.log('Search results:', results)}
    />
  );
}
```

### With Authentication

```tsx
import { SearchBox, createAuthenticatedHttpClient } from 'searchbox';

function AuthenticatedSearch() {
  const httpClient = createAuthenticatedHttpClient({
    baseURL: 'https://api.example.com',
    getAuthToken: () => localStorage.getItem('authToken'),
    onUnauthorized: () => window.location.href = '/login',
  });

  return (
    <SearchBox
      apiUrl="/api/search"
      autocompleteApiUrl="/api/autocomplete"
      autocomplete={true}
      httpClient={httpClient}
      placeholder="Search with authentication..."
      onSearch={(results) => console.log('Results:', results)}
    />
  );
}
```

### With Axios

**Note**: To use axios with SearchBox, you need to install axios in your project:
```bash
npm install axios
```

The SearchBox component uses dynamic imports for axios, so it will only load axios when needed and won't increase your bundle size if you don't use it.

```tsx
import { SearchBox, AxiosHttpClient } from 'searchbox';

function AxiosSearch() {
  const [httpClient, setHttpClient] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const initializeClient = async () => {
      try {
        const axios = await import('axios');
        const axiosInstance = axios.default.create({
          baseURL: 'https://api.example.com',
          timeout: 10000,
        });

        // Add your interceptors
        axiosInstance.interceptors.request.use((config) => {
          const token = localStorage.getItem('authToken');
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
          }
          return config;
        });

        const client = new AxiosHttpClient(axiosInstance);
        setHttpClient(client);
      } catch (error) {
        console.error('Failed to initialize axios client:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeClient();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!httpClient) {
    return <div>Failed to initialize axios client. Please install axios.</div>;
  }

  return (
    <SearchBox
      apiUrl="/api/search"
      autocompleteApiUrl="/api/autocomplete"
      autocomplete={true}
      httpClient={httpClient}
      placeholder="Search with axios..."
      onSearch={(results) => console.log('Results:', results)}
    />
  );
}
```

## Installation

```bash
npm install searchbox
# or
yarn add searchbox
```

## API Reference

### SearchBox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiUrl` | `string` | - | URL for search API endpoint |
| `autocompleteApiUrl` | `string` | - | URL for autocomplete API endpoint |
| `autocomplete` | `boolean` | `false` | Enable autocomplete functionality |
| `placeholder` | `string` | `'Search...'` | Placeholder text for input |
| `theme` | `'auto' \| 'default' \| 'bootstrap' \| 'tailwind'` | `'auto'` | UI theme |
| `mode` | `'light' \| 'dark'` | `'light'` | Color mode |
| `size` | `'compact' \| 'medium' \| 'large'` | `'medium'` | Component size |
| `httpClient` | `HttpClient` | `FetchHttpClient` | Custom HTTP client |
| `requestConfig` | `RequestConfig` | - | Search request configuration |
| `autocompleteRequestConfig` | `RequestConfig` | - | Autocomplete request configuration |
| `transformSearchRequest` | `(data: SearchRequestData) => any` | - | Transform search request data |
| `transformSearchResponse` | `(response: any) => SearchResponse` | - | Transform search response |
| `transformAutocompleteRequest` | `(data: AutocompleteRequestData) => any` | - | Transform autocomplete request |
| `transformAutocompleteResponse` | `(response: any) => AutocompleteResponse` | - | Transform autocomplete response |
| `onSearch` | `(results: SearchResult[]) => void` | - | Search results callback |
| `onSearchStart` | `(requestData?: any) => void` | - | Search start callback |
| `onSearchError` | `() => void` | - | Search error callback |
| `onSuggestionSelect` | `(suggestion: AutocompleteSuggestion) => void` | - | Suggestion selection callback |
| `searchCategories` | `SearchCategory[]` | - | Available search categories |
| `showAdvancedSearch` | `boolean` | `false` | Show advanced search panel |
| `advancedSearchContent` | `React.ReactNode` | - | Custom advanced search content |
| `disabled` | `boolean` | `false` | Disable the search box |
| `className` | `string` | - | Additional CSS classes |

### HTTP Client Interface

```typescript
interface HttpClient {
  request<T = any>(config: {
    url: string;
    method?: string;
    headers?: Record<string, string>;
    data?: any;
    params?: Record<string, any>;
    timeout?: number;
    signal?: AbortSignal;
  }): Promise<{ data: T; status: number; statusText: string }>;
}
```

### Request Configuration

```typescript
interface RequestConfig {
  headers?: Record<string, string>;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  timeout?: number;
  credentials?: 'omit' | 'same-origin' | 'include';
  mode?: 'cors' | 'no-cors' | 'same-origin';
  cache?: 'default' | 'no-cache' | 'reload' | 'force-cache' | 'only-if-cached';
  redirect?: 'follow' | 'error' | 'manual';
  referrer?: string;
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
}
```

## Advanced Examples

### Role-Based Search

```tsx
import { SearchBox, createAuthenticatedHttpClient } from 'searchbox';

function RoleBasedSearch() {
  const [userRole, setUserRole] = useState('user');

  const httpClient = createAuthenticatedHttpClient({
    baseURL: 'https://api.example.com',
    headers: {
      'X-User-Role': userRole,
    },
    getAuthToken: () => localStorage.getItem('authToken'),
  });

  const transformSearchRequest = (data) => {
    const baseRequest = {
      ...data,
      userContext: {
        userId: getCurrentUserId(),
        role: userRole,
      },
    };

    // Add role-specific filters
    if (userRole === 'admin') {
      baseRequest.includeDeleted = true;
      baseRequest.includePrivate = true;
    } else if (userRole === 'user') {
      baseRequest.includePrivate = false;
    } else {
      baseRequest.publicOnly = true;
    }

    return baseRequest;
  };

  return (
    <div>
      <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="guest">Guest</option>
      </select>

      <SearchBox
        apiUrl="/api/search"
        autocompleteApiUrl="/api/autocomplete"
        autocomplete={true}
        httpClient={httpClient}
        transformSearchRequest={transformSearchRequest}
        placeholder={`Search as ${userRole}...`}
        onSearch={(results) => console.log('Results:', results)}
      />
    </div>
  );
}
```

### Custom Request/Response Transformers

```tsx
import { SearchBox } from 'searchbox';

function CustomTransformersSearch() {
  const transformSearchRequest = (data) => {
    return {
      searchTerm: data.query,
      category: data.category,
      userContext: {
        userId: getCurrentUserId(),
        sessionId: getSessionId(),
      },
      ...data.filters,
    };
  };

  const transformSearchResponse = (response) => {
    if (response.success === false) {
      throw new Error(response.error || 'Search failed');
    }

    return {
      results: response.data?.results || response.results || [],
      total: response.data?.total || response.total || 0,
      query: response.data?.query || response.query || '',
      message: response.data?.message || response.message || 'Search completed',
    };
  };

  return (
    <SearchBox
      apiUrl="/api/search"
      autocompleteApiUrl="/api/autocomplete"
      autocomplete={true}
      transformSearchRequest={transformSearchRequest}
      transformSearchResponse={transformSearchResponse}
      placeholder="Search with custom transformers..."
      onSearch={(results) => console.log('Results:', results)}
    />
  );
}
```

## Available HTTP Clients

### FetchHttpClient (Default)

Uses the native `fetch` API:

```tsx
import { FetchHttpClient } from 'searchbox';

const httpClient = new FetchHttpClient();
```

### AxiosHttpClient

Wrapper around axios:

```tsx
import { AxiosHttpClient, createAxiosClientWithInterceptors } from 'searchbox';
import axios from 'axios';

// Option 1: With built-in interceptors
const httpClient = createAxiosClientWithInterceptors();

// Option 2: Custom axios instance
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

const httpClient = new AxiosHttpClient(axiosInstance);
```

### Authenticated HTTP Client

Helper for authentication:

```tsx
import { createAuthenticatedHttpClient } from 'searchbox';

const httpClient = createAuthenticatedHttpClient({
  baseURL: 'https://api.example.com',
  headers: {
    'X-Client-ID': 'your-client-id',
  },
  getAuthToken: () => localStorage.getItem('authToken'),
  onUnauthorized: async () => {
    const newToken = await refreshToken();
    if (!newToken) {
      window.location.href = '/login';
    }
  },
});
```

## Theming

### Default Theme

```tsx
<SearchBox theme="default" mode="light" />
```

### Bootstrap Theme

```tsx
<SearchBox theme="bootstrap" mode="light" />
```

### Tailwind Theme

```tsx
<SearchBox theme="tailwind" mode="light" />
```

### Dark Mode

```tsx
<SearchBox theme="default" mode="dark" />
```

## Styling

The component includes default styles, but you can customize them:

```scss
// Import default styles
@import 'searchbox/dist/styles/search-box.css';

// Or customize with SCSS
@import 'searchbox/src/assets/scss/search-box.scss';
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue on GitHub or contact us at support@example.com.