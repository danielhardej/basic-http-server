# Basic HTTP Server 🚀

A simple Node.js HTTP server project demonstrating various server implementations and API interactions.

Inspired by the exercises from Codecademy's course on [Setting up a Server with HTTP](https://www.codecademy.com/enrolled/courses/learn-node-js).

## 📁 Project Structure

- **`app.js`** - Main server with local database integration
- **`app2.js`** - Server that proxies requests to external APIs
- **`app3.js`** - Enhanced server with query parameter handling
- **`requestHandler.js`** - GET request handling logic
- **`databaseHandler.js`** - Local JSON database operations
- **`database.json`** - Sample user data

## 🛠️ Setup

1. Clone the repository
2. Navigate to the project directory
3. Run one of the server files:

```bash
node app.js     # Local database server
node app2.js    # External API proxy
node app3.js    # Enhanced server with query params
```

## 🌐 API Endpoints

### Main Server (`app.js`)

- **GET `/users`** - Retrieve all users
- **GET `/users/{id}`** - Retrieve specific user by ID

### Examples

```bash
# Get all users
curl http://localhost:4001/users

# Get user by ID
curl http://localhost:4001/users/1

# Response example
{
  "id": 1,
  "firstName": "Arnold",
  "lastName": "Schwarzeneggar",
  "created": "01-07-1985",
  "updated": "05-07-2021"
}
```

## 💡 Features

- ✅ RESTful API design
- ✅ JSON file-based database
- ✅ Input validation
- ✅ Error handling
- ✅ External API integration
- ✅ Query parameter support

## 🚦 Server Status

All servers run on `http://localhost:4001`

Choose the appropriate server file based on your needs:
- Use `app.js` for local data operations
- Use `app2.js` for external API testing
- Use `app3.js` for advanced query handling
