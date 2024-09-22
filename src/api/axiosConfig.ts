import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:9999/api', // Your API base URL
  timeout: 20 * 1000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Set default content type
  },
});

instance.interceptors.request.use(
  function (config) {
    const user = localStorage.getItem('user') as string;
    if (user) {
      const { state: {data} } = JSON.parse(user);
      if (data?.access_token) {
        config.headers.Authorization = data.access_token;
      }
    }
    return config;
  },
  async function (error) {
    return Promise.reject(error);
  }
);
