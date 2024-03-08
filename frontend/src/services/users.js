import axios from 'axios';
const url = 'http://localhost:5000/users';

const createUser = async (newUser) => {
  return axios.post(url, newUser);
};

const usersServices = { createUser };
export default usersServices;
