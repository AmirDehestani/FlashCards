import axios from 'axios';
const url = 'http://localhost:5000/users';

const createUser = (newUser) => {
  return axios.post(url, newUser).then((res) => res);
};

const usersService = { createUser };
export default usersService;
