import BaseService from '../services/BaseService';
import { ServiceType } from '../types/ServiceType';

class ServiceService extends BaseService<ServiceType> {
  constructor() {
    super('shared/servicos');
  }
}

export default new ServiceService();
