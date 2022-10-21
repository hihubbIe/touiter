import http from '../http-common';

function findAll() {
  return http.get('/touits');
}

export const touitService = {
  findAll,
}

export default touitService;
