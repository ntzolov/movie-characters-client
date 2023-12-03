# BackendService 
`Host` - https://movie-characters-server.onrender.com

This is a backend application that powers the core functionality of http://movie-characters.onrender.com webside. It handles user authentication, data processing, and serves as the API gateway for seamless communication with the frontend.

## Technology Stack

- **Node.js:** v14.17.4
- **Express:** v4.18.2 - Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose:** v7.5.3 - Elegant MongoDB object modeling for Node.js.
- **bcrypt:** v5.1.1 - Library for hashing passwords.
- **jsonwebtoken:** v9.0.2 - JSON Web Token (JWT) implementation for Node.js.
- **cors:** v2.8.5 - Cross-Origin Resource Sharing middleware for Express.
- **dotenv:** v16.3.1 - Zero-dependency module to load environment variables from a .env file.
- **nodemon:** v3.0.1 - Utility that monitors for changes in files and automatically restarts the server.

## Installation

Follow these steps to set up and run the BackendService locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.17.4 or higher)

### Clone the Repository

```bash
git clone https://github.com/ntzolov/movie-characters-backend.git
cd movie-characters-backend
```

### Install Dependencies

```bash
npm install
```

### Set Environment Variables

Create a .env file in the root of the project and add the following:

```env
SECRET = 'mG8tdLPPNJ0wpEOI0DnKz5YCEuJMbcGp'
MONGO_URL = 'mongodb+srv://ntzolov:zZYLb8iwd7rDyaac@movie-characters.vtrawke.mongodb.net/movieCharacters?retryWrites=true&w=majority'
PORT = '3030'
```

### Start the Server

```bash
npm start
```

The backend server will be running at http://localhost:3030.

## Usage

### Authentication

To use the authentication features of BackendService, you need to obtain an authentication token. Make a `POST` request to the following endpoints with valid credentials:

- #### POST /auth/register
  - Register new user.
- #### POST /auth/login
  - Login existing user.
- #### GET /auth/logout
  - Logout logged user.

### Resources

- #### GET /characters
  - Get all characters.
- #### POST /characters
  - Create a character.
- #### PUT /characters/:characterId
  - Edit character by ID.
- #### GET /characters/:characterId
  - Get character by ID.
- ####  DELETE /characters/:characterId
  - Delete character by ID.

## Database schema

### Users Collection

The `users` collection stores information about registered users.

| Field       | Type     | Description               |
|-------------|----------|---------------------------|
| _id         | ObjectId | Unique user identifier    |
| username    | String   | User's username           |
| password    | String   | Hashed user password      |
| characters  | Array    | List of user's characters |
| isAdmin     | Boolean  | Is user have admin role   |

### Resources Collection

The `resources` collection holds data about various characters.

| Field       | Type     | Description               |
|-------------|----------|---------------------------|
| _id         | ObjectId | Unique character identifier|
| name        | String   | Character name             |
| imageURL    | String   | Link with character image |
| createdBy   | String   | Character's creator       |
| performedBy | String   | Character's performers    |
| firstAppearance | String   | Character's first movie appearance |
| description | String   | Character's description   |
| famousLine  | String   | Character's famous line   |
| likes       | Number   | Character's total likes   |
| usersLiked  | [ObjectId] | List of users who liked the character |
| usersFavorited | [ObjectId] | List of users who favorited the character |
| ownerId     | ObjectId | Character's owner ID      |
| createdAt   | Date     | Date of creating the character |
| lastEdit    | Date     | Date of character's last edit |
| _ownerUsername | String   | Character's owner username |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2023 ntzolov

