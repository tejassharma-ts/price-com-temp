import axios, { AxiosInstance } from "axios";

import { create } from "zustand";

// Zustand store
interface State {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useApiStore = create<State>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));

interface ApiConfig {
  baseURL: string;
}

export const createApi = ({ baseURL }: ApiConfig): AxiosInstance => {
  const api = axios.create({
    baseURL: baseURL,
  });

  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      useApiStore.getState().setLoading(true);
      return config;
    },
    (error) => {
      useApiStore.getState().setLoading(false);
      return Promise.reject(error);
    },
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => {
      useApiStore.getState().setLoading(false);
      return response;
    },
    (error) => {
      useApiStore.getState().setLoading(false);
      return Promise.reject(error);
    },
  );

  return api;
};

export const api = createApi({ baseURL: "http://13.201.184.96" });
