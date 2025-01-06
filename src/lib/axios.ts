import Axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export const axios = Axios.create({
  baseURL: "https://677bf06620824100c07b51a2.mockapi.io/api/v1",
  headers: {
    Accept: "application/json",
  },
});
