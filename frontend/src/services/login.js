import axios from 'axios';
const url = 'http://localhost:5000/login';

const loginUser = (user) => {
  return axios.post(url, user).then((res) => {
    try {
      if (res.status === 200) {
        const { accessToken } = res.data;
        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
      }
    } catch (err) {
      console.log(err.message);
    }
  });
};

const loginServices = { loginUser };
export default loginServices;
