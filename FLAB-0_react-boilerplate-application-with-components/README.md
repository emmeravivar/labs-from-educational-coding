# react-boilerplate-application-with-components

## Description
This is an educational React project, created as an evolution of a basic boilerplate. Its main goal is to demonstrate how to build a modular, real-world application from scratch using React, Babel, and Webpack. The project simulates a car management system, including pages for listing cars, adding new cars, and user authentication.

## Educational Purpose
- Learn how to organize a scalable React application.
- Understand the integration of Babel and Webpack for modern JavaScript, JSX, CSS, and asset handling.
- Practice modular architecture with separation of views, components, and styles.
- Experience the build process and development workflow with npm scripts.

## Project Structure
```
react-boilerplate-application-with-components/
│
├── babel.config.json         # Babel configuration
├── package.json              # Project dependencies and scripts
├── README.md                 # Project documentation
├── webpack.config.js         # Webpack configuration
├── public/
│   └── index.html            # Main HTML template
└── src/
    ├── app.css               # Global styles
    ├── app.js                # Main App component
    ├── index.js              # React entry point
    ├── assets/
    │   └── style.css         # Additional styles
    └── views/
        ├── Index.js          # Main view (home)
        ├── layout/
        │   └── navegador/
        │       ├── navegador.css
        │       └── Navegador.js
        └── pages/
            ├── AddCar/
            │   ├── add-car.css
            │   └── AddCar.js
            ├── Auth/
            │   ├── login.css
            │   └── LoginSignup.js
            └── ListCars/
                ├── data.js
                ├── list-cars.css
                └── ListCars.js
```

## Features
- Modular architecture: clear separation of views, layout, and pages.
- Car management: list, add, and view cars.
- Authentication: login/signup page.
- Global and component-specific styles (CSS).
- Modern configuration: Babel and Webpack for JSX, CSS, SASS, and images.
- Hot Module Replacement for fast development.

## How to Use
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```
   cd react-boilerplate-application-with-components
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
   The app will be available at `http://localhost:3000`.

5. To build for production:
   ```
   npm run build
   ```
   The output will be in the `dist/` folder.

## Notes for Students
- This project is for learning purposes. Feel free to modify components, styles, or configuration files to explore how everything works.
- For modern production projects, consider using tools like Vite or Next.js, but this setup helps you understand the fundamentals.

Happy coding!
