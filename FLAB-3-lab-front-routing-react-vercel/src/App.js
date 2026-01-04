import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import About from './components/About';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header>
        <h1>W17 · Lab · Routing with React Router DOM V5</h1>
      </header>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <div className="page-div-load">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </main>
      <footer>
        <div className="footer">
          &copy; 2024 Eva María Mera Vivar for MiT XPro
        </div>
      </footer>
    </div>
  );
}

export default App;
