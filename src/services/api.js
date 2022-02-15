/* eslint-disable dot-notation */
import axios from "axios";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

export const setAuthToken = (token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// export const deleteAuthToken = () => {
//   delete api.defaults.headers.common["Authorization"];
// };

// export const getToken = () => {
//   return api.defaults.headers.common.Authorization;
// };

export default api;
