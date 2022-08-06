import axios from 'axios';
import config from 'configs';
const axiosClient = axios.create({
  baseURL: config.api_url,
  headers: {
    'Content-Type': 'application/json',
  },

});

axiosClient.interceptors.response.use(
  (res) => res.data || res,
  (err) => Promise.reject(err)
);
export default axiosClient;
