
# W22-lab-models-routing-controllers

This project demonstrates a basic Node.js backend using Express, MongoDB (Mongoose), and a simple MVC structure (models, controllers, routes).

## Objective

To teach how to:
- Set up an Express server
- Connect to MongoDB with Mongoose
- Organize code using models, controllers, and routes
- Use environment variables for configuration

## Example .env file

Create a `.env` file in the root of the project with the following content (replace with your real credentials if needed):

```env
MONGO_URI=mongodb+srv://user:password@cluster0.mongodb.net/test?retryWrites=true&w=majority
PORT=4000
```

## Project Structure

```
config/
	connectDb.js      # MongoDB connection logic
controllers/
	Usuario.controllers.js # User controller functions
models/
	Usuario.model.js  # User schema/model
routes/
	Usuarios.routes.js # User routes
index.js            # Main server file
package.json        # Project metadata and dependencies
```

## Usage

1. **Install dependencies:**
	 ```bash
	 npm install
	 ```
2. **Create your .env file** (see above).
3. **Run the server:**
	 ```bash
	 npm run dev
	 ```

4. **Test endpoints:**
	- GET  `/api/usuarios`  → returns a test message
	- POST `/api/usuarios`  → returns a test message

## Testing endpoints with Thunder Client (VS Code)

You can use the Thunder Client extension in VS Code to test the API endpoints easily:

1. Open the Thunder Client tab in VS Code (look for the thunder icon on the sidebar).
2. Click "New Request".
3. For GET: Set method to `GET` and enter `http://localhost:4000/api/usuarios` as the URL, then click "Send".
4. For POST: Set method to `POST` and enter `http://localhost:4000/api/usuarios` as the URL. In the "Body" tab, select `JSON` and provide the user data (e.g., `{ "name": "Test User" }`), then click "Send".
5. View the response directly in the Thunder Client panel.

This is a quick way to test your API without leaving VS Code.

## Notes

- The user model is ready for extension (name, password, email, token, confirmed).
- Controller logic is minimal and should be expanded for real use cases.

## Credits

- Eva María Mera Vivar
- Learning Facilitator | 06/2023 | Emeritus | MiT

## License

This project is for educational purposes only.