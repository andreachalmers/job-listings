# Job Listings App

A modern, responsive job listings application built with React, TypeScript, and Vite. Filter job listings by role, level, languages, and tools with a clean, intuitive interface.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Design](#design)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [State Management](#state-management)
- [Styling](#styling)
- [Testing](#testing)
- [Build & Deployment](#build--deployment)
- [Development](#development)

## Overview

This is a Frontend Mentor challenge solution that displays job listings with filtering capabilities. Users can filter jobs by clicking on tags (role, level, languages, tools) and see the results update in real-time.

## Features

- ✅ **Responsive Design** - Mobile-first approach with tablet and desktop breakpoints
- ✅ **Job Filtering** - Filter by role, level, languages, and tools
- ✅ **Active Filter Bar** - View and remove active filters
- ✅ **Featured Jobs** - Visual distinction for featured job listings
- ✅ **New Job Badges** - Highlight recently posted jobs
- ✅ **Semantic HTML** - Accessible markup with proper ARIA labels
- ✅ **TypeScript** - Full type safety throughout the application
- ✅ **State Management** - Zustand for global filter state

## Design

### Desktop Design
![Desktop View](./design/desktop-design.jpg)

*Full desktop layout showing all job listings*

### Mobile Design
![Mobile View](./design/mobile-design.jpg)

*Mobile-optimized layout with stacked cards*

### Mobile with Filters
![Mobile with Filters](./design/mobile-with-filters.jpg)

*Mobile view with active filter bar and filtered results*

### Active States
![Active States](./design/active-states.jpg)

*Interactive states showing hover and active filter states*

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Zustand** - State management
- **SCSS** - Styling with variables and mixins
- **League Spartan** - Custom font from Google Fonts
- **Cypress** - End-to-end testing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:andreachalmers/job-listings.git
cd job-listings
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
job-listings/
├── design/              # Design mockups and reference images
│   ├── desktop-design.jpg
│   ├── mobile-design.jpg
│   ├── mobile-with-filters.jpg
│   └── active-states.jpg
├── public/
│   └── images/          # Company logos
├── src/
│   ├── assets/
│   │   └── images/      # Background images
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header/  # Header component
│   │   └── ui/
│   │       ├── Badge/   # NEW/FEATURED badges
│   │       ├── Card/    # Job listing card
│   │       ├── FilterBar/ # Active filters bar
│   │       └── Tag/     # Filterable tags
│   ├── store/
│   │   └── useJobStore.ts # Zustand store
│   ├── styles/
│   │   ├── _colors.scss    # Color variables
│   │   ├── _mixins.scss    # Media query mixins
│   │   ├── _reset.scss     # CSS reset
│   │   ├── _spacing.scss   # Spacing variables
│   │   ├── _typography.scss # Typography variables & mixins
│   │   └── _variables.scss # Main variables file
│   ├── App.tsx
│   ├── App.scss
│   ├── main.tsx
│   └── index.css
├── cypress/             # Cypress test files
│   └── e2e/
│       └── job-listings.cy.ts # E2E test suite
├── cypress.config.ts    # Cypress configuration
├── data.json            # Job listings data
├── package.json
└── vite.config.ts
```

## Key Features

### Filtering System

The app uses Zustand for state management to handle active filters:

- Click any tag (role, level, language, tool) to add it as a filter
- Multiple filters can be active simultaneously
- Jobs are filtered to show only those matching ALL active filters
- Remove individual filters or clear all at once

### Responsive Layout

- **Mobile**: Single column, cards stacked vertically
- **Tablet**: Two-column grid layout
- **Desktop**: Single column with max-width container

### Component Architecture

- **Card**: Displays individual job listing with company info, position, and tags
- **FilterBar**: Shows active filters with remove functionality
- **Tag**: Clickable filter tags that add to active filters
- **Badge**: NEW! and FEATURED indicators

## State Management

The app uses Zustand for lightweight state management:

```typescript
// Store structure
interface JobStore {
  filters: string[]
  addFilter: (filter: string) => void
  removeFilter: (filter: string) => void
  clearFilters: () => void
}
```

Filters are stored globally and components subscribe to changes automatically.

## Styling

### SCSS Architecture

- **Variables**: Colors, typography, spacing, and mixins
- **Mobile-first**: Base styles for mobile, enhanced for larger screens
- **BEM Methodology**: Block Element Modifier naming convention
- **Custom Properties**: CSS variables for theming

### Design System

- **Colors**: Teal/green palette with gray scale
- **Typography**: League Spartan font family with preset sizes
- **Spacing**: Consistent spacing scale (8px, 16px, 24px, 40px)
- **Breakpoints**: 768px (tablet), 1024px (desktop)

## Build & Deployment

### Build

```bash
npm run build
```

## Testing

This project uses Cypress for end-to-end testing. The test suite covers:

- Header and job listings display
- Job card information and structure
- Filtering functionality (adding/removing filters)
- Filter bar interactions
- Featured jobs and badges
- Responsive design (mobile and tablet viewports)

### Running Tests

**Open Cypress Test Runner (Interactive Mode):**
```bash
npm run cypress:open
```
This opens the Cypress Test Runner where you can select and run tests interactively.

**Run Tests Headlessly:**
```bash
npm run cypress:run
```
or
```bash
npm run test:e2e
```
This runs all tests in headless mode (useful for CI/CD).

**Before running tests:**
Make sure your development server is running:
```bash
npm run dev
```

The tests are configured to run against `http://localhost:5173` by default.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run cypress:open` - Open Cypress Test Runner (interactive)
- `npm run cypress:run` - Run Cypress tests headlessly
- `npm run test:e2e` - Alias for running E2E tests

## License

This project is a solution to a [Frontend Mentor](https://www.frontendmentor.io) challenge.

## Acknowledgments

- Design from [Frontend Mentor](https://www.frontendmentor.io)
- League Spartan font from Google Fonts
- Icons and logos from the challenge assets
- Design mockups included in the `design/` folder
