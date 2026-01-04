
# W21-lab-server-and-bbdd

This project is a basic Node.js backend template to learn how to:
- Set up an Express server
- Load environment variables with dotenv
- Connect to a MongoDB database using Mongoose

## Objective

The main goal is to provide a minimal starting point for building REST APIs with Express and MongoDB. It demonstrates how to:
- Initialize a server
- Use environment variables for configuration
- Establish a database connection and handle errors

## Example .env file

Create a `.env` file in the root of the project with the following content (replace with your real credentials if needed):

```env
MONGO_URI=mongodb+srv://user:password@cluster0.mongodb.net/test?retryWrites=true&w=majority
PORT=4000
```

## Project Structure

```
config/
  connectDb.js      # Function to connect to MongoDB using Mongoose
index.js            # Main server file (Express setup and DB connection)
package.json        # Project metadata and dependencies
```

## Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```

2. **Set up environment variables:**
	Create a `.env` file in the root with your MongoDB URI (see example above).

3. **Run the server:**
	```bash
	npm run dev
	```
	or
	```bash
	npm start
	```

4. **Check the console:**
	You should see a message indicating the server is running and whether the database connection was successful.

## Notes

- This template does not include routes, models, or controllers. It is meant as a starting point for further backend development.

## Credits

- Eva María Mera Vivar
- Learning Facilitator | 06/2023 | Emeritus | MiT

## License

This project is for educational purposes only.