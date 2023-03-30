import axios from 'axios';
import authHeader from './auth-header';
import Config from 'react-native-config';
const API_URL = `${Config.REACT_APP_API_IP}/api/auth/register`;

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
