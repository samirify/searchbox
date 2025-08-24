# @samirify/searchbox

A powerful, customizable React search component with autocomplete, categories, and multiple themes.

> **⚠️ Alpha Version**: This package is currently in alpha and not recommended for production use. The API may change in future releases.

## Installation

> **Note**: This is an alpha version. For production use, wait for the stable release.

```bash
npm install @samirify/searchbox@alpha
```

### For SCSS Customization

If you want to customize the styles using SCSS variables, you'll also need to install `sass`:

```bash
npm install @samirify/searchbox sass
```

**Note**: Make sure your build system (webpack, vite, etc.) is configured to handle SCSS files.

## Quick Start

```jsx
import { SearchBox } from '@samirify/searchbox';

function App() {
  return (
    <SearchBox
      onSearch={(query) => console.log('Search:', query)}
      placeholder="Search anything..."
    />
  );
}
```

## Styling

### Using Compiled CSS (Default Theme)

```jsx
import '@samirify/searchbox/css';
import { SearchBox } from '@samirify/searchbox';
```

### Customizing with SCSS

Import the SCSS files to customize theme variables:

```jsx
// Note: You need to install 'sass' in your project to use SCSS imports
// npm install sass
import '@samirify/searchbox/scss';
import { SearchBox } from '@samirify/searchbox';
```

For advanced customization, you can import individual SCSS files:

```scss
// Your custom styles
@import '@samirify/searchbox/scss/variables';

// Override variables
$primary-color: #your-color;
$secondary-color: #your-secondary;
$border-color: #your-border;

// Import the main styles
@import '@samirify/searchbox/scss';
```

### Available SCSS Files

- `@samirify/searchbox/scss` - Main styles with default theme
- `@samirify/searchbox/scss/variables` - Theme variables
- `@samirify/searchbox/scss/global` - Global styles

### Theme Variables

```scss
// Colors
$primary-color: #3b82f6;    // Primary button/active states
$secondary-color: #6b7280;  // Secondary text/icons
$border-color: #e5e7eb;     // Border colors
```

## Features

- 🔍 **Autocomplete** - Real-time search suggestions
- 🏷️ **Categories** - Organize search results by category
- 🎨 **Multiple Themes** - Bootstrap, Tailwind, and custom themes
- 📱 **Responsive** - Works on all screen sizes
- ♿ **Accessible** - WCAG compliant
- 🔧 **Customizable** - Extensive theming options

## API Reference

### SearchBox Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSearch` | `function` | - | Callback when search is submitted |
| `onAutocomplete` | `function` | - | Callback for autocomplete suggestions |
| `placeholder` | `string` | "Search..." | Input placeholder text |
| `theme` | `'default' \| 'bootstrap' \| 'tailwind'` | `'default'` | Theme to use |
| `size` | `'default' \| 'large'` | `'default'` | Component size |

## Examples

### Basic Search

```jsx
<SearchBox
  onSearch={(query) => {
    console.log('Searching for:', query);
  }}
  placeholder="Search products..."
/>
```

### With Advanced Search

```jsx
import React, { useState } from 'react';

const MyComponent = () => {
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const AdvancedSearchContent = ({ onClose }) => (
    <div className="advanced-search-content">
      <div className="advanced-search-field">
        <label className="advanced-search-label">Status</label>
        <select 
          className="advanced-search-select"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="advanced-search-field">
        <label className="advanced-search-label">Date Range</label>
        <select 
          className="advanced-search-select"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="">All Dates</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
        </select>
      </div>
      <button 
        className="advanced-search-button"
        onClick={(e) => {
          e.preventDefault();
          onClose?.(); // This closes the advanced search panel
        }}
      >
        Apply Filters
      </button>
    </div>
  );

  return (
    <SearchBox
      showAdvancedSearch={true}
      advancedSearchContent={<AdvancedSearchContent />}
      statusFilter={statusFilter}
      dateFilter={dateFilter}
      onSearch={(results) => console.log('Search results:', results)}
      onSearchStart={(request) => console.log('Search request:', request)}
    />
  );
};
```

**Important**: You must pass `statusFilter` and `dateFilter` props to the SearchBox component so it can include them in the search request. The `onClose` prop is automatically passed to your `advancedSearchContent` component.

### With Bootstrap Theme

For Bootstrap theme, use Bootstrap classes in your advanced search content:

```jsx
// Note: You need to install Bootstrap CSS in your project
// npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const BootstrapAdvancedSearchContent = ({ onClose }) => (
  <div className="p-3">
    <h5 className="mb-3 fw-bold">Advanced Filters</h5>
    
    <div className="mb-3">
      <label className="form-label fw-bold">Status:</label>
      <select className="form-select form-select-sm">
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    
    <div className="d-flex gap-2 justify-content-end mt-3">
      <button className="btn btn-outline-secondary btn-sm">Reset</button>
      <button 
        className="btn btn-primary btn-sm"
        onClick={(e) => {
          e.preventDefault();
          onClose?.();
        }}
      >
        Apply Filters
      </button>
    </div>
  </div>
);

<SearchBox
  theme="bootstrap"
  showAdvancedSearch={true}
  advancedSearchContent={<BootstrapAdvancedSearchContent />}
  statusFilter={statusFilter}
  dateFilter={dateFilter}
  onSearch={(results) => console.log(results)}
/>
```

## Troubleshooting

### Dropdowns/Error Messages Appearing at Bottom of Screen

If dropdowns, error messages, or advanced search panels appear at the bottom of the screen instead of below the searchbox:

1. **Ensure proper z-index**: The component uses `z-index: 9999` for dropdowns
2. **Check container positioning**: Make sure the SearchBox container has `position: relative`
3. **Avoid CSS conflicts**: The component uses namespaced CSS classes (`.default-searchbox`)

### SCSS Import Issues

If you get errors when importing SCSS files:

1. **Install sass**: `npm install sass`
2. **Configure build system**: Ensure your bundler can handle SCSS files
3. **Use CSS fallback**: If SCSS doesn't work, use `import '@samirify/searchbox/css'`

### With Autocomplete

```jsx
<SearchBox
  onSearch={(query) => handleSearch(query)}
  onAutocomplete={(query) => handleAutocomplete(query)}
  placeholder="Search with suggestions..."
/>
```

### Custom Theme

```jsx
<SearchBox
  theme="bootstrap"
  size="large"
  onSearch={handleSearch}
/>
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## License

MIT License - see [LICENSE](LICENSE) file for details.