# Social Funnel Dynamic Configuration System

This project now uses a centralized JSON configuration system to manage all agency data, making the website easily maintainable and customizable.

## Configuration File

The main configuration file is located at: `/data/agency.json`

This file contains all the dynamic content for the website including:

- Company information
- Contact details
- Hero section content
- Services
- Why Choose Us sections
- Statistics
- Testimonials
- LinkedIn posts
- Navigation menus
- Call-to-action content
- SEO metadata
- Team information
- Pricing plans

## Using the Configuration System

### 1. Custom Hook

Use the `useAgencyData` hook to access all configuration data:

```javascript
import { useAgencyData } from "@/src/hooks/useAgencyData";

const MyComponent = () => {
  const agencyData = useAgencyData();
  const { company, services, contact } = agencyData;
  
  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.description}</p>
    </div>
  );
};
```

### 2. Individual Data Access Functions

For convenience, you can also use specific functions:

```javascript
import { getCompanyInfo, getServices, getContactInfo } from "@/src/hooks/useAgencyData";

const company = getCompanyInfo();
const services = getServices();
const contact = getContactInfo();
```

### 3. Helper Functions

Get specific items by ID:

```javascript
import { getServiceById, getTestimonialById } from "@/src/hooks/useAgencyData";

const service = getServiceById(1);
const testimonial = getTestimonialById(2);
```

## Dynamic Components

Several dynamic components have been created to automatically render content from the JSON:

### DynamicServices

- **File**: `/src/components/DynamicServices.js`
- **Purpose**: Renders service cards from the services array
- **Usage**: `<DynamicServices />`

### DynamicWhyChooseUs

- **File**: `/src/components/DynamicWhyChooseUs.js`
- **Purpose**: Renders "Why Choose Us" section items
- **Usage**: `<DynamicWhyChooseUs />`

### DynamicStatistics

- **File**: `/src/components/DynamicStatistics.js`
- **Purpose**: Renders statistics counters
- **Usage**: `<DynamicStatistics />`

## Updated Pages

The following pages have been updated to use the JSON configuration:

- **Homepage** (`/pages/index.jsx`): Hero section, about section, contact links
- **Footer** (`/src/layout/footer/DefaultFooter.js`): Contact information, company name
- **Insights** (`/pages/insights.jsx`): LinkedIn posts, CTA section

## JSON Structure Overview

```json
{
  "company": {
    "name": "Social Funnel",
    "tagline": "Client Acquisition Systems for High-Ticket Businesses",
    "description": "...",
    "mission": "...",
    "location": {...}
  },
  "contact": {
    "phone": "+254 721634183",
    "email": "info@socialfunnel.agency",
    "website": "www.socialfunnel.agency",
    "social": {...}
  },
  "hero": {
    "title": {...},
    "subtitle": "...",
    "description": "...",
    "cta": {...}
  },
  "services": [...],
  "whyChooseUs": [...],
  "statistics": [...],
  "testimonials": [...],
  "linkedinPosts": [...],
  "navigation": {...},
  "cta": {...},
  "seo": {...},
  "team": [...],
  "pricing": {...}
}
```

## Customization Guide

### Adding New Services

1. Open `/data/agency.json`
2. Add a new service object to the `services` array:

```json
{
  "id": 7,
  "title": "New Service",
  "shortDescription": "Brief description",
  "fullDescription": "Detailed description",
  "features": ["Feature 1", "Feature 2"],
  "result": "Expected outcome",
  "icon": "path/to/icon.png"
}
```

### Updating Contact Information

1. Open `/data/agency.json`
2. Modify the `contact` section:

```json
{
  "contact": {
    "phone": "+254 XXX XXX XXX",
    "email": "new@email.com",
    "website": "www.newwebsite.com",
    "social": {
      "linkedin": "https://linkedin.com/company/new-company"
    }
  }
}
```

### Modifying Company Information

Update the `company` section in the JSON file to change:

- Company name
- Tagline
- Description
- Mission statement
- Location details

## Benefits of This System

1. **Centralized Management**: All content in one file
2. **Easy Updates**: No need to edit multiple React components
3. **Consistency**: Ensures consistent data across all pages
4. **Maintainability**: Simple to update company information
5. **Flexibility**: Easy to add new data fields
6. **Type Safety**: Can be extended with TypeScript interfaces
7. **Performance**: Data loaded once and reused

## Future Enhancements

- Add TypeScript interfaces for better type safety
- Create an admin interface for non-technical users
- Add data validation schemas
- Implement environment-specific configurations
- Add multi-language support capabilities

## File Structure

```
/data/
  └── agency.json                    # Main configuration file

/src/hooks/
  └── useAgencyData.js              # Custom hook and helper functions

/src/components/
  ├── DynamicServices.js            # Dynamic services component
  ├── DynamicWhyChooseUs.js         # Dynamic why choose us component
  └── DynamicStatistics.js          # Dynamic statistics component

/pages/
  ├── index.jsx                     # Updated homepage
  └── insights.jsx                  # Updated insights page

/src/layout/footer/
  └── DefaultFooter.js              # Updated footer
```

This system makes the Social Funnel website highly maintainable and allows for quick updates without touching the React components directly.
