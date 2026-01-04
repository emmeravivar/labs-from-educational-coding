const express = require('express');
const router = express.Router();
const contactForm = require('../models/contactFormUser.model')
const cloudinaryService = require('../services/claudinary.service');

router.post('/send-contact-form', async (req, res) => {
  
  try {

    const { name, email, country } = req.body;
    const file = req.files.file;
    const customName = `cv_${Date.now()}`;

    if (!name || !email || !country) {
      return res.status(400).send('Name, email, and country are required.');
    }

    if (!req.files || !req.files.file) {
      return res.status(400).send('No file uploaded');
    }

    if (file.mimetype !== 'application/pdf') {
      return res.status(400).send('Only PDF files are allowed');
    }

    const result = await cloudinaryService.uploadToCloudinary(file.tempFilePath, customName);

    const newContactForm = new contactForm({
      name,
      email,
      country,
      cloudinaryUrl: result.secureURL // Guardar la URL segura de Cloudinary
    });
    await newContactForm.save();
    res.send(`Send the data. URL: ${result.secureURL}, ${newContactForm}`);
    console.log('File upload:', result);

  } catch (error) {
    console.error('Error uploading file:', error.message);
    res.status(500).send(`Error uploading file: ${error.message}`);
  }
});

module.exports = router;
