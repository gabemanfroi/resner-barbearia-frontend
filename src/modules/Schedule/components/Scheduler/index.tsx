import { Button, MenuItem, Select } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/lab';
import { AppointmentType } from 'modules/Schedule/types/AppointmentType';
import React, { useState } from 'react';
import {
  SchedulerTextField,
  SchedulerContainer,
  SchedulerFormControl,
} from './style';

const Scheduler = () => {
  const newAppointment = {
    customerName: '',
    contactNumber: '',
    dateTime: new Date(),
    services: [],
  };
  const [appointment, setAppointment] =
    useState<AppointmentType>(newAppointment);

  const [servicesOptions, setServicesOptions] = useState([
    { value: 'Serviço 00', description: 'Serviço 00' },
    { value: 'Serviço 01', description: 'Serviço 01' },
    { value: 'Serviço 02', description: 'Serviço 02' },
    { value: 'Serviço 03', description: 'Serviço 03' },
  ]);

  const sendAppointment = (): void => {
    console.log(appointment);
  };

  const onServiceSelection = (index: number): void => {
    const newServicesOptions = [...servicesOptions];
    const selectedService = newServicesOptions.splice(index, 1)[0];
    setServicesOptions(newServicesOptions);
    setAppointment({
      ...appointment,
      services: [...appointment.services, selectedService.description],
    });
  };

  return (
    <SchedulerContainer elevation={3}>
      <SchedulerFormControl>
        <div className="fields-container">
          <SchedulerTextField
            value={appointment.customerName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAppointment({
                ...appointment,
                customerName: e.target.value,
              });
            }}
            required
            color="primary"
            label="Nome Completo"
          />
          <SchedulerTextField
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAppointment({
                ...appointment,
                contactNumber: e.target.value,
              });
            }}
            value={appointment.contactNumber}
            color="primary"
            label="Telefone Para Contato"
          />
          <DateTimePicker
            renderInput={(props) => (
              <SchedulerTextField color="primary" {...props} />
            )}
            label="Data e Hora"
            value={appointment?.dateTime}
            onChange={(newValue) => {
              setAppointment({
                ...appointment,
                dateTime: new Date(),
              });
            }}
          />
          <Select
            placeholder="Selecione O Serviço"
            sx={{
              boxShadow:
                '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)',
            }}
          >
            {servicesOptions &&
              servicesOptions.map((o, index) => (
                <MenuItem
                  key={o.value}
                  value={o.value}
                  onClick={() => {
                    onServiceSelection(index);
                  }}
                >
                  {o.description}
                </MenuItem>
              ))}
          </Select>
        </div>
        <Button onClick={sendAppointment} variant="contained">
          Agendar
        </Button>
      </SchedulerFormControl>
    </SchedulerContainer>
  );
};

export default Scheduler;
