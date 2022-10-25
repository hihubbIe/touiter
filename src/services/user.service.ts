import http from '../http-common';

function findAll() {
  return http.get('/user');
}

function findOne(id: string) {
  return http.get(`/user/${id}`);
}

export const userService = {
  findAll,
  findOne,
}

export default userService;
