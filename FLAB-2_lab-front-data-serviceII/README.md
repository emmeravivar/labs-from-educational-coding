
# W19-lab-data-service

This lab is designed to help you understand and practice how to perform CRUD operations (GET, POST, PUT, DELETE) against a public REST API using React. The focus is on learning how to handle asynchronous data, HTTP requests, and responses using different approaches (Axios, Fetch, then/catch, async/await) and custom hooks.

## Objective

The main goal is to teach how to:
- Make HTTP requests to a REST API from React
- Use both Axios and Fetch for data fetching
- Compare promise handling with then/catch vs async/await
- Implement and reuse custom hooks for each operation
- Handle responses, errors, and loading states
- See the results in the browser console (not in the UI by default)

## Features

- React 18 + Vite setup
- Custom hooks for GET, POST, PUT, DELETE using Axios (then/catch and async/await)
- Helper for custom Fetch requests
- Example API: [JSONPlaceholder](https://jsonplaceholder.typicode.com)

## Project Structure

```
src/
	App.jsx            # Main React component (try different hooks and methods)
	useThenCatch.js    # Custom hooks using Axios with then/catch
	useAsyncAwait.js   # Custom hooks using Axios with async/await
	helpers/api.js     # Helper for custom fetch requests
	assets/            # Images and SVGs
	App.css            # Styles
	index.css          # Global styles
	main.jsx           # Entry point
public/
	vite.svg           # Static asset
```

## Getting Started

1. **Install dependencies:**
	 ```bash
	 npm install
	 ```

2. **Run the development server:**
	 ```bash
	 npm run dev
	 ```

3. **Open your browser:**
	 Visit the local URL shown in the terminal (usually http://localhost:5173/).

## How it works

- In `App.jsx`, you can switch between different hooks and methods to test GET, POST, PUT, and DELETE requests.
- The results and responses are logged in the browser console for you to analyze.
- The UI is minimal; the focus is on understanding the logic and flow of data.

## Custom Hooks & Helper

- **useThenCatch.js**: Hooks for GET, POST, PUT, DELETE using Axios and then/catch.
- **useAsyncAwait.js**: Hooks for GET, POST, PUT, DELETE using Axios and async/await.
- **helpers/api.js**: Helper for custom fetch requests with configuration and error handling.

## API Used

- [JSONPlaceholder](https://jsonplaceholder.typicode.com): Free fake REST API for testing and prototyping.
	- Example endpoint: `https://jsonplaceholder.typicode.com/posts/`

## Credits

- Eva María Mera Vivar
- Learning Facilitator | 06/2023 | Emeritus | MiT

## License

This project is for educational purposes only.
