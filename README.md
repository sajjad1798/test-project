# Test Task Project

This project is a React-based application built with Webpack. It includes dependencies for styled-components, Ant Design (antd), React Router, and Tailwind CSS. The project is set up to work with TypeScript and has a robust development environment powered by Babel and Webpack.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Tools](#development-tools)

## Getting Started

Follow these steps to set up and run the project on your local machine:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd test-task
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or if you prefer yarn
   yarn install
   ```

### Running the Application

To start the development server:

```bash
npm start
# or
yarn start
```

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

## Project Structure

The project structure is as follows:

```
test-task/
├── node_modules/        # Installed dependencies
├── src/                 # Source files
│   ├── features/        # Feature-specific components and logic
│   ├── hooks/           # Custom React hooks
│   ├── layout/          # Layout components (e.g., headers, footers)
│   ├── lib/             # Utility libraries and helper functions
│   ├── routes/          # Route components and configurations
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main app entry
│   ├── index.css        # Global styles
│   └── index.tsx        # ReactDOM rendering
├── .gitignore           # Files and folders to ignore in Git
├── index.html           # HTML template
├── package-lock.json    # Lockfile for npm dependencies
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── webpack.config.js    # Webpack configuration
```

## Scripts

The following npm scripts are available:

- `start`: Runs the development server with live reloading.
- `build`: Creates a production-ready build.

## Dependencies

The project uses the following dependencies:

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [Styled Components](https://styled-components.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Development Tools

Development dependencies include:

- [TypeScript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [PostCSS](https://postcss.org/)
- [Tailwind CSS](https://tailwindcss.com/)
