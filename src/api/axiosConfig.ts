import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://apiv1.vidieu.net", // Your API base URL
  timeout: 20*1000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json", // Set default content type
  },
});

