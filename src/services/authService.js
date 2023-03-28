import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://10.0.2.2:3001/api/auth/register';

export async function registerUser(formData) {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error.toJSON());
  }
}
