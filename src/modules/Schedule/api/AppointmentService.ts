import BaseService from 'modules/Shared/services/BaseService';
import { AppointmentType } from '../types/AppointmentType';

class AppointmentService extends BaseService<AppointmentType> {
  constructor() {
    super('schedule/appointment/');
  }
}

export default new AppointmentService();
