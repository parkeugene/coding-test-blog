import axios from 'axios';

const isProduction = import.meta.env.MODE === 'production';

export const httpClient = axios.create({
  baseURL: isProduction ? import.meta.env.VITE_SERVER_URI : '',
  headers: {
    'Content-Type': 'application/json',
    'api-key': import.meta.env.VITE_API_KEY,
  },
});
