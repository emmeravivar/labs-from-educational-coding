const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Configurar Multer para gestionar la subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Filtro para validar el tipo de archivo
const fileFilter = (req, file, cb) => {
  // Aceptar solo archivos con extensión .jpg, .jpeg, .png, .gif
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF file types are allowed!'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

app.use((err, req, res, next) => {
  if (err) {
    res.status(400).send(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
