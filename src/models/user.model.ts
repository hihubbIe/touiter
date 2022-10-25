export default class User {
  _id: string = '-1';
  id: string = 'id';
  firstname: string = 'firstname';
  lastname: string = 'lastname';
  email: string = 'email';
  photo?: string;
  profileMessage: string = 'Edit this message!';
  creationDate: string = 'epoch';
  passwordHash: string = '-1';
}
