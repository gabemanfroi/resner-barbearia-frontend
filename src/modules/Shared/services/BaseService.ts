import { AxiosResponse } from 'axios';
import HttpClient from './HttpClient';

interface GenericObject {
  id?: number;
}

export default abstract class BaseService<T extends GenericObject> {
  private client: HttpClient;

  constructor(private baseEndpoint: string) {
    this.baseEndpoint = baseEndpoint;
    this.client = new HttpClient(process.env.REACT_APP_BACKEND_URL!);
  }

  public get(): Promise<T[]> {
    return this.client.service.get(this.baseEndpoint);
  }

  public post(data: T): Promise<T> {
    return this.client.service.post(this.baseEndpoint, data);
  }

  public put(data: T): Promise<T> {
    return this.client.service.put(`${this.baseEndpoint}/${data.id}`, data);
  }

  public delete(id: number): Promise<AxiosResponse> {
    return this.client.service.delete(`${this.baseEndpoint}/${id}`);
  }
}
