# Plan: Scaffold Server-Side TypeScript Project

1. Project foundation
   1. create `package.json` with TypeScript, Express, and SQLite dependencies
   2. add `tsconfig.json` and `nodemon` or equivalent dev tooling
   3. create repository structure for server and specs

2. Runtime and framework setup
   1. initialize Express app entrypoint
   2. add TypeScript compile and run scripts
   3. configure environment-based settings for development

3. Minimal home page
   1. add a simple AgentClinic home page route
   2. render a minimal page or JSON response with site name and status
   3. confirm the home page loads in a browser or HTTP client

4. Persistence and data access
   1. add SQLite database setup and migrations or schema initialization
   2. create a simple data access layer or repository pattern
   3. verify database connectivity from the app

5. Layout component and static assets
   1. add a `public/` static directory to serve frontend assets
   2. create a minimal `index.html` landing page
   3. implement a main layout component that mounts three subcomponents: `Header`, `Main`, `Footer`
   4. place `Header`, `Main`, and `Footer` in their own source files under `public/js/`
   5. add `public/js/layout.js` as the entrypoint that imports the subcomponents
   6. use Pico CSS via a CDN or local asset and link it from the page
   7. ensure the layout and styles are responsive on mobile and desktop
   8. verify the home page renders the layout and assets are served correctly

6. Initial documentation and validation
   1. add SQLite database setup and migrations or schema initialization
   2. create a simple data access layer or repository pattern
   3. verify database connectivity from the app

4. Initial documentation and validation
   1. document setup commands and project structure
   2. create basic smoke tests for startup and database access
   3. ensure the project can run locally in development
