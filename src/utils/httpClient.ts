import axios from 'axios';

export const httpClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'api-key': import.meta.env.VITE_API_KEY,
  },
});
