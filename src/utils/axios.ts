import axios from "axios";

// axios.defaults = {
//   baseURL: "dfsdf"
// };
axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});

axios.interceptors.response.use(
  respinse => {
    return respinse;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
