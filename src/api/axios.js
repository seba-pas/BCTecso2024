import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:8001/api/Mascoteros/registro',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default instance;