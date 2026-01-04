// models/ContactForm.js
const mongoose = require('mongoose');

// Definir el esquema
const contactFormSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 25
  },
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'] // Validación de email
  },
  country: {
    type: String,
    required: true
  },
  cloudinaryUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true // Añade createdAt y updatedAt automáticamente
});

// Crear el modelo
const ContactForm = mongoose.model('contactForm', contactFormSchema);

module.exports = ContactForm;
