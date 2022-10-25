import http from '../http-common';

function findAll() {
  return http.get('/tweet');
}

export const touitService = {
  findAll,
}

export default touitService;
