# Causes & Contributions API

This API allows users to create, manage, and contribute to social causes. Users can add causes, update them, delete them, and make contributions.

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone  https://github.com/Ogkpos/social-causes-and-contributions.git
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure the database:

   - Create a `.env` file and add your PostgreSQL connection string:
     ```
     DATABASE_URL="postgresql://user:password@localhost:5432/causes_db"
     ```
   - Run database migrations:
     ```sh
     npx prisma migrate dev --name init
     ```

4. Start the server:
   ```sh
   npm run dev
   ```
   The API will be available at `http://localhost:3000.

## API Endpoints

### Get all causes

**GET /api/causes**  
Returns a list of all causes.

### Get a specific cause

**GET /api/causes/:id**  
Returns details of a cause by its ID.

### Create a new cause

**POST /api/causes**  
Request body (JSON):

```json
{
  "name": "Climate Change Awareness",
  "description": "Support global initiatives to combat climate change.",
  "category": "Environment"
}
```

### Update a cause

**PUT /api/causes/:id**  
Request body (JSON):

```json
{
  "name": "Updated Cause Name",
  "description": "Updated description.",
  "category": "Updated Category"
}
```

### Delete a cause

**DELETE /api/causes/:id**  
Deletes a cause by its ID.

### Contribute to a cause

**POST /api/causes/:id/contribute**  
Request body (JSON):

```json
{
  "userId": "user123",
  "type": "Donation",
  "amount": 50.0,
  "description": "Supporting clean energy initiatives.",
  "name": "Israel",
  "email": "Israel@example.com"
}
```

## Tech Stack

- Node.js + Express + Typescript
- PostgreSQL + Prisma

## Future Enhancements

- Authentication with JWT
- Contribution tracking per user
- Filtering and sorting options

## Contributing

Feel free to fork the project, create a branch, and submit a pull request.

## Author

GitHub: [@yourusername](https://github.com/yourusername)  
Email: your@email.com

```

```
