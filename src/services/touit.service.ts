import http from '../http-common';
import Touit from '../models/touit.model';

function findAll() {
  return http.get('/tweet');
}

async function post(touit: Touit) {
  return await http.post('/tweet', touit).then(console.log);
}

function put(touit: Touit) {
  return http.put(`/tweet/${touit.id}`, touit);
}

function del(touitId: string) {
  return http.delete(`/tweet/${touitId}`);
}

export const touitService = {
  findAll,
  post,
  put,
  del
}

export default touitService;
