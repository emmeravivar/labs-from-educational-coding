
const cloudinary = require('./../config/cloudinary.config');

const uploadToCloudinary = async (imagePath, customName) => {
  if (!imagePath || typeof imagePath !== 'string') {
    throw new Error("Ruta de imagen no válida. Por favor, proporciona una ruta válida a la imagen.");
  }

  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: 'cv',
    public_id: customName
  };

  try {
    console.log('Subiendo imagen a Cloudinary desde la ruta:', imagePath);
    const resultUpload = await cloudinary.uploader.upload(imagePath, options);
    console.log('Imagen subida con éxito a Cloudinary con el ID público:', resultUpload.public_id);
    console.log('respuesta', resultUpload);
    return { publicID:  resultUpload.public_id, secureURL: resultUpload.secure_url }
    
  } catch (error) {
    console.error('Error al subir la imagen a Cloudinary:', error.message);
    throw error;
  }
};

module.exports = { uploadToCloudinary };