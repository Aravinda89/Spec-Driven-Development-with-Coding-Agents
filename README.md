# AgentClinic

## Input from stakeholders

- Mary in engineering wants a reliable site with a popular stack based on TypeScript, giving agents and staff a dashboard for easy access.
- Susan in product has a set of features about agents and their ailments, therapies, and booking appointments.
- Steve in marketing wants an attractive site that works well with a modern browser.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open the home page in your browser:
   ```bash
   http://localhost:3000/
   ```
4. Verify setup with the built-in verification script:
   ```bash
   npm run verify
   ```

## Project Structure

- `src/` - backend source code for the Express server and SQLite persistence
- `data/` - runtime SQLite database file location
- `specs/` - mission, tech stack, roadmap, and feature specs

## Notes

- Uses Node.js, TypeScript, Express, and SQLite.
- Includes a minimal AgentClinic home page and health route for initial validation.
