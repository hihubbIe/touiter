import http from '../http-common';
import CreateUser from '../models/createUser.model';
import User from '../models/user.model';

function findAll() {
  return http.get('/user');
}

function findOne(id: string) {
  return http.get(`/user/${id}`);
}

function post(user: CreateUser) {
  return http.post('/user', user);
}

function put(user: User) {
  return http.put(`/user/${user.id}`, user);
}

export const userService = {
  findAll,
  findOne,
  post,
  put,
}

export default userService;
