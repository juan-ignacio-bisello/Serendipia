import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FirebaseStorage } from '../DB/firebaseConfig';

export const uploadImage = async (file) => {
  const fileRef = ref( FirebaseStorage, `productos/${file.name}`);
  await uploadBytes(fileRef, file);
  return await getDownloadURL(fileRef);
};