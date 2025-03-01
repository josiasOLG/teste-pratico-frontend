import axios from 'axios';
import { API_URL } from '@/infrastructure/config/env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
