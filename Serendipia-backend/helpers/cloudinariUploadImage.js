import fs from 'fs';
import cloudinary from '../api/cloudinary.js';


export const cloudinariUploadImage = async (file) => {
  
  const { tempFilePath } = file;
  try {
    const result = await cloudinary.uploader.upload(tempFilePath, {
      folder: 'serendipia',
    });
    fs.unlinkSync(tempFilePath);
    return { url: result.secure_url, public_id: result.public_id };
  } catch (error) {
    fs.unlinkSync(tempFilePath); // Asegura limpieza si hay error
    throw new Error('Error al subir imagen a Cloudinary');
  }

};
