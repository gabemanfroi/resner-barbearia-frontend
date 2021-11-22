import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

export default class HttpClient {
  public service: AxiosInstance;

  constructor(baseUrl: string) {
    const service = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    service.interceptors.response.use(
      (response: AxiosResponse) => camelizeKeys(response.data),
      (error: AxiosError) => Promise.reject(error)
    );
    service.interceptors.request.use(async (config) => {
      const newConfig = { ...config };

      if (newConfig.data) {
        newConfig.data = decamelizeKeys(newConfig.data);
      }
      return newConfig;
    });
    this.service = service;
  }
}
