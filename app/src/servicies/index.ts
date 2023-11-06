import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dev-links-backend.heroku.app',
});

export default api;