import './mainHome.css'
import { mainHomeHTML } from './mainHome.html.js'; // Importa el HTML
// Función que devuelve el HTML del componente homeSection
function createHomeSection() {
    return `
      ${mainHomeHTML}
      <p> Hola</p>
    `;
  }
  
  // Exportamos la función para ser utilizada en otros archivos
  export default createHomeSection();
  