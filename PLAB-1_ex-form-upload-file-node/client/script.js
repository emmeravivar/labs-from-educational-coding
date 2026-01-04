// console.log('Leyendo....');

// const axios = require('axios').default;

// document.getElementById('uploadForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
//     // Obtener el archivo del input
//     const fileInput = document.getElementById('fileInput');
//     const file = fileInput.files[0];
  
//     // Crear un objeto FormData
//     const formData = new FormData();
//     formData.append('file', file);
  
//     // Enviar la solicitud POST con Axios
//     axios.post('/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//     .then(response => {
//       console.log('File uploaded successfully', response);
//     })
//     .catch(error => {
//       console.error('Error uploading file', error);
//     });
//   });

console.log('Leyendo....');

document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

  // Obtener el archivo del input
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  // Crear un objeto FormData
  const formData = new FormData();
  formData.append('file', file);

  // Enviar la solicitud POST con Fetch API
  fetch('http://localhost:3000/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('File uploaded successfully', data);
  })
  .catch(error => {
    console.error('Error uploading file', error);
  });
});
