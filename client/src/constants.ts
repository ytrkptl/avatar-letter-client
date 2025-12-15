export const API_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL // Relative path for unified deployment
  : "http://localhost:5001";
