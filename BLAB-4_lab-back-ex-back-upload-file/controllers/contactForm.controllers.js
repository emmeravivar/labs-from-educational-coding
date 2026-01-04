// import DataContactUserForm from '../models/DataContactUserForm.model.js';
const cloudinaryService = require('../services/claudinary.service');

export const createDataContactUserForm = async (req, res) => {
    try {
      if (!req.files || !req.files.file) {
        return res.status(400).send('No file uploaded');
      }
  
      const file = req.files.file;
      const customName = `cv_${Date.now()}`;
  
      if (file.mimetype !== 'application/pdf') {
        return res.status(400).send('Only PDF files are allowed');
      }
  
      const result = await cloudinaryService.uploadToCloudinary(file.tempFilePath, customName);
  
      res.send(`File uploaded successfully. URL: ${result}`);
      console.log('Archivo subido con éxito:', result);
  
    } catch (error) {
      console.error('Error uploading file:', error.message);
      res.status(500).send(`Error uploading file: ${error.message}`);
    }
  }

