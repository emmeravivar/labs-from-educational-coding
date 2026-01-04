
import { useAxios } from './useAxios';
import './App.css'

function App() {
  // Usamos la API de Open Brewery DB
  const { data, loading, error } = useAxios('https://api.openbrewerydb.org/v1/breweries');

  return (
    <div className='container'>
      <h2>Week 18</h2>
      <h1>Servicio de Datos I</h1>
      <h3>Eva María Mera Vivar</h3>
      <h4>Learning Facilitator | 06/2023| Emeritus | MiT</h4>
      <hr />
      <h2>Listado de Cervecerías (Open Brewery DB)</h2>
      {loading && <p>Cargando cervecerías...</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
      {data && Array.isArray(data) && (
        <ul>
          {data.map((brewery) => (
            <li key={brewery.id}>
              <strong>{brewery.name}</strong> ({brewery.brewery_type})<br />
              {brewery.city}, {brewery.state_province || brewery.state}, {brewery.country}
              {brewery.website_url && (
                <>
                  {' '}| <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">Sitio web</a>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
