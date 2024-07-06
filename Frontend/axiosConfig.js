import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Aqui você define a URL base do seu backend Django
  // Pode adicionar mais configurações aqui, como headers, interceptors, etc.
});

export default instance;
