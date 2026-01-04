

# W23-user-controler-create

This project is a basic REST API with Node.js, Express, and MongoDB to manage users using the MVC pattern.

## Available Endpoints

- **GET /api/usuarios**
	- Returns a test message (you can modify it to list users).
- **POST /api/usuarios**
	- Creates a new user in the database.
	- You must send a JSON with the fields: `nombre`, `password`, `email` (token and confirmado are optional).

## Example usage with Thunder Client (VS Code)

1. Open Thunder Client in VS Code (lightning icon in the sidebar).
2. Create a new request:
	 - **GET**: Use GET method to `http://localhost:4000/api/usuarios` and click "Send".
	 - **POST**: Use POST method to `http://localhost:4000/api/usuarios`, in the "Body" tab select JSON and enter:
		 ```json
		 {
			 "nombre": "Example",
			 "password": "123456",
			 "email": "example@email.com"
		 }
		 ```
	 - Click "Send" to see the response.

## Example usage with curl

```bash
# GET
curl http://localhost:4000/api/usuarios

# POST
curl -X POST http://localhost:4000/api/usuarios \
	-H "Content-Type: application/json" \
	-d '{"nombre":"Example","password":"123456","email":"example@email.com"}'
```

## Example usage with Postman

1. Create a new request.
2. Use GET or POST method to `http://localhost:4000/api/usuarios`.
3. For POST, in "Body" select "raw" and "JSON", and enter the same example JSON.
4. Send the request and check the response.

---
Remember to have the server running (`npm run dev`) and MongoDB accessible.
