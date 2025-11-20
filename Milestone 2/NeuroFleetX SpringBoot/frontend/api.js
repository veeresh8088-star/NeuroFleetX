import axios from 'axios';
const API = axios.create({
  baseURL: 'http://localhost:8080'
});
API.interceptors.request.use(config=>{
  const t = localStorage.getItem('nf_token');
  if(t) config.headers.Authorization = 'Bearer ' + t;
  return config;
});
export default API;