import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': import.meta.env.VITE_API_KEY,
  },
});
