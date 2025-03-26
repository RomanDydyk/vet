# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Overview

This project is a dashboard application built with React, TypeScript, and Vite. It features customer management with sortable tables, activity tracking, and responsive design.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

### Running the Project

To start the development server:

```
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is already in use).

### Building for Production

To create a production build:

```
npm run build
# or
yarn build
```

To preview the production build locally:

```
npm run preview
# or
yarn preview
```

## Project Structure

The project is organized into the following key directories:

- `src/components`: Reusable React components
- `src/pages`: Page components
- `src/layouts`: Layout components
- `src/assets`: Static assets
- `src/hooks`: Custom hooks
- `src/App.tsx`: Main application component

## Styling

The project uses CSS Modules for styling components. This approach provides local scoping of CSS classes to avoid naming conflicts and improves maintainability. CSS Module files use the naming convention `ComponentName.module.css`.
