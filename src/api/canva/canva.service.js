import axios from 'axios';

const CANVA_API_URL = 'https://api.canva.com/v1/'; // URL base para la API de Canva
const API_KEY = 'YOUR_CANVA_API_KEY'; // Reemplaza con tu API Key

const canvaApi = axios.create({
  baseURL: CANVA_API_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default canvaApi;
