import axios from 'axios';
const url = 'http://localhost:5000/users';

const createUser = async (newUser) => {
  return axios.post(url, newUser).then((res) => res);
};

const loginUser = async (user) => {
  return axios.post(`${url}/login`, user).then((res) => res);
};

const usersServices = { createUser, loginUser };
export default usersServices;
