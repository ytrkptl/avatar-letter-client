export const API_URL = import.meta.env.PROD
  ? "" // Relative path for unified deployment
  : "http://localhost:8080";
