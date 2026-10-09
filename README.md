# Resource Centre

A single-page React application for browsing wellbeing resources across categories including podcasts, articles, newsletters, recipes, fitness and meditation.

## Features

- Display resources grouped by category
- Search resources by title or tag
- Sort resources by category or upload date
- View additional details for a resource
- Responsive card-based layout

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Vitest
- React Testing Library

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the tests:

```bash
npm test
```

Build the application:

```bash
npm run build
```

## Approach

I broke the requirements into small pieces of functionality and implemented them incrementally, using a Red, Green, Refactor approach where appropriate.

Filtering, sorting and grouping are derived from the resource data rather than stored as additional state:

```text
resources → filter → sort → group → render
```

Resource-specific components and helper functions are kept together, while the supplied mock data remains separate from the UI.

## Testing

Tests focus on user-facing behaviour including rendering, grouping, filtering, sorting and displaying resource details.

Pure data transformation logic, such as sorting, is also tested independently.

## If I Had More Time

I would extend the application to allow users with the appropriate permissions to:

- Add resources
- Edit resources
- Delete resources

This would introduce form validation, confirmation states, API persistence and error handling.

I would also consider replacing the mock data with an API, adding loading/error states, and expanding accessibility and edge-case test coverage.

## Design Decisions

I kept the solution intentionally simple for the size of the task. React state is used for UI state, while values that can be calculated from existing data are derived during rendering rather than stored separately.
