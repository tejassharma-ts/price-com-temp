import axios, { AxiosInstance } from "axios";

interface ApiConfig {
  baseURL: string;
}

export const createApi = ({ baseURL }: ApiConfig): AxiosInstance => {
  const api = axios.create({
    baseURL: baseURL,
  });

  return api;
};

export const api = createApi({ baseURL: "http://13.201.184.96" });
