import axios from 'axios';
const url = 'http://localhost:5000/users';

const createUser = async (newUser) => {
  return axios.post(url, newUser).then((res) => res);
};

const usersServices = { createUser };
export default usersServices;
