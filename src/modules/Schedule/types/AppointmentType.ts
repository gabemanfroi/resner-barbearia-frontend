export interface AppointmentType {
  id?: number;
  customerName: string;
  contactNumber: string;
  dateTime: Date;
  services: string[];
}
