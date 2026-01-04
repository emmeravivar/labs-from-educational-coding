
# W18-lab-fetching-data

This lab demonstrates how to fetch data asynchronously from public APIs in a React application using three different approaches:

- Fetch API (custom hook)
- Axios (custom hook)
- Async/Await (custom hook)

The app currently displays a list of breweries using the free [Open Brewery DB API](https://www.openbrewerydb.org/).

## Features

- React 18 + Vite setup
- Custom hooks for data fetching: `useFetch`, `useAxios`, `useAsyncAwait`
- Example of consuming a public API and rendering results
- Error and loading state handling

## Project Structure

```
src/
    App.jsx           # Main React component
    useFetch.js       # Custom hook using Fetch API
    useAxios.js       # Custom hook using Axios
    useAsyncAwait.js  # Custom hook using async/await + Axios
    assets/           # Images and SVGs
    App.css           # Styles
    index.css         # Global styles
    main.jsx          # Entry point
public/
    vite.svg          # Static asset
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

- The main component (`App.jsx`) uses the `useAxios` hook to fetch a list of breweries from Open Brewery DB.
- You can easily switch to `useFetch` or `useAsyncAwait` by changing the import and usage in `App.jsx`.
- The UI displays the brewery name, type, city, country, and website if available.
- Loading and error states are handled and shown to the user.

## Custom Hooks

- **useFetch.js**: Uses the native Fetch API with `.then/.catch` for promise handling.
- **useAxios.js**: Uses Axios for HTTP requests with promise chaining.
- **useAsyncAwait.js**: Uses Axios with async/await syntax for cleaner asynchronous code.

## API Used

- [Open Brewery DB API](https://www.openbrewerydb.org/): Free, public API for brewery data.
    - Example endpoint: `https://api.openbrewerydb.org/v1/breweries`

## Credits

- Eva María Mera Vivar
- Learning Facilitator | 06/2023 | Emeritus | MiT

## License

This project is for educational purposes only.