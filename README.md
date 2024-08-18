
# Boss Machine

Boss Machine is an API designed to manage the minions, brilliant million-dollar ideas, and meetings for the world's most accomplished (and evil) entrepreneurs. This project involves building out an Express server that will handle various routes and functionality, allowing you to fully manage these resources.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Minions](#minions)
  - [Ideas](#ideas)
  - [Meetings](#meetings)
  - [Work (Bonus)](#work-bonus)
- [Custom Middleware](#custom-middleware)
- [Testing](#testing)
- [Technologies](#technologies)
- [License](#license)

## Project Overview

Boss Machine provides a RESTful API that allows you to manage minions, ideas, and meetings. The project is designed to demonstrate proficiency in Express.js, middleware, and handling RESTful routes. The backend is powered by a simple in-memory database.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/boss-machine.git
   cd boss-machine
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm run start
   ```

   The server will be running on `http://localhost:4001`. You can access the frontend by opening the `index.html` file in your web browser.

4. **Run the tests:**
   ```bash
   npm run test
   ```

   This will run the provided test suite, which checks for functionality and edge cases.

## API Endpoints

### Minions

- **GET `/api/minions`**
  - Retrieves an array of all minions.

- **POST `/api/minions`**
  - Creates a new minion and saves it to the database.

- **GET `/api/minions/:minionId`**
  - Retrieves a single minion by ID.

- **PUT `/api/minions/:minionId`**
  - Updates a single minion by ID.

- **DELETE `/api/minions/:minionId`**
  - Deletes a single minion by ID.

### Ideas

- **GET `/api/ideas`**
  - Retrieves an array of all ideas.

- **POST `/api/ideas`**
  - Creates a new idea and saves it to the database.

- **GET `/api/ideas/:ideaId`**
  - Retrieves a single idea by ID.

- **PUT `/api/ideas/:ideaId`**
  - Updates a single idea by ID.

- **DELETE `/api/ideas/:ideaId`**
  - Deletes a single idea by ID.

### Meetings

- **GET `/api/meetings`**
  - Retrieves an array of all meetings.

- **POST `/api/meetings`**
  - Creates a new meeting. No request body is needed, as meetings are generated automatically.

- **DELETE `/api/meetings`**
  - Deletes all meetings from the database.

### Work (Bonus)

- **GET `/api/minions/:minionId/work`**
  - Retrieves an array of all work for the specified minion.

- **POST `/api/minions/:minionId/work`**
  - Creates a new work object and saves it to the database.

- **PUT `/api/minions/:minionId/work/:workId`**
  - Updates a single work object by ID.

- **DELETE `/api/minions/:minionId/work/:workId`**
  - Deletes a single work object by ID.

## Custom Middleware

### `checkMillionDollarIdea`

This custom middleware ensures that any new or updated ideas are worth at least one million dollars. The total value of an idea is calculated as the product of its `numWeeks` and `weeklyRevenue` properties.

- **File:** `server/checkMillionDollarIdea.js`
- **Usage:** Automatically used in the `/api/ideas` routes to validate idea submissions.

## Testing

The project includes a comprehensive test suite that checks for all essential functionality and edge cases. Tests automatically rerun whenever you save changes to the server files while they are open in a terminal window. To run the tests:

```bash
npm run test
```

## Technologies

- **Node.js**
- **Express.js**
- **JavaScript**
- **Mocha & Chai** (for testing)

## License

This project is open source and available under the [MIT License](LICENSE).
