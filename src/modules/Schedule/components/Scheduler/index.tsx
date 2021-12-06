import {
  Button,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from '@material-ui/core';
import { CalendarPicker } from '@material-ui/lab';
import ServiceService from 'modules/Shared/api/ServiceService';
import { ServiceType } from 'modules/Shared/types';
import AppointmentService from 'modules/Schedule/api/AppointmentService';
import { AppointmentType } from 'modules/Schedule/types/AppointmentType';
import React, { useEffect, useState } from 'react';
import {
  SchedulerTextField,
  SchedulerContainer,
  SchedulerFormControl,
} from './style';

const Scheduler = () => {
  const newAppointment = {
    customerName: '',
    contactNumber: '',
    time: new Date(),
    services: [],
  };

  const [appointment, setAppointment] =
    useState<AppointmentType>(newAppointment);

  const [value, setValue] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [servicesOptions, setServicesOptions] = useState<ServiceType[]>([]);

  useEffect(() => {
    ServiceService.get().then((response: ServiceType[]) =>
      setServicesOptions(response)
    );
  }, []);

  const sendAppointment = (): void => {
    if (value && selectedTime) {
      const year = value.getFullYear();
      const month = value.getMonth();
      const day = value.getDate();

      appointment.time = new Date(year, month, day, selectedTime, 0, 0);
      AppointmentService.post(appointment);
    }
  };

  const onServiceSelection = (index: number): void => {
    const newServicesOptions = [...servicesOptions];
    const selectedService = newServicesOptions.splice(index, 1)[0];
    setServicesOptions(newServicesOptions);
    setAppointment({
      ...appointment,
      services: [...appointment.services, selectedService.id],
    });
  };

  return (
    <SchedulerContainer elevation={3}>
      <div className="inputs-container">
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
                    key={o.id}
                    value={o.id}
                    onClick={() => {
                      onServiceSelection(index);
                    }}
                  >
                    {o.title}
                  </MenuItem>
                ))}
            </Select>
            {appointment.services.map((service) => (
              <Button
                onClick={() => {
                  console.log(`removes serve ${service}`);
                }}
              >
                {service}
              </Button>
            ))}
          </div>
        </SchedulerFormControl>
        <CalendarPicker
          date={value}
          onChange={(newDate) => setValue(newDate)}
        />
        <div className="times-container">
          <ToggleButtonGroup
            orientation="vertical"
            exclusive
            className="times-column"
            value={selectedTime}
            onChange={(event: React.MouseEvent<HTMLElement>, time: number) => {
              setSelectedTime(time);
            }}
          >
            <ToggleButton size="small" value="8">
              08:00
            </ToggleButton>
            <ToggleButton size="small" value="9">
              09:00
            </ToggleButton>
            <ToggleButton size="small" value="10">
              10:00
            </ToggleButton>
            <ToggleButton size="small" value="11">
              11:00
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            orientation="vertical"
            exclusive
            className="times-column"
            value={selectedTime}
            onChange={(event: React.MouseEvent<HTMLElement>, time: number) => {
              setSelectedTime(time);
            }}
          >
            <ToggleButton size="small" value="13">
              13:00
            </ToggleButton>
            <ToggleButton size="small" value="14">
              14:00
            </ToggleButton>
            <ToggleButton size="small" value="15">
              15:00
            </ToggleButton>
            <ToggleButton size="small" value="16">
              16:00
            </ToggleButton>
          </ToggleButtonGroup>
          <ToggleButtonGroup
            orientation="vertical"
            exclusive
            className="times-column"
            value={selectedTime}
            onChange={(event: React.MouseEvent<HTMLElement>, time: number) => {
              setSelectedTime(time);
            }}
          >
            <ToggleButton size="small" value="17">
              17:00
            </ToggleButton>
            <ToggleButton size="small" value="18">
              18:00
            </ToggleButton>
            <ToggleButton size="small" value="19">
              19:00
            </ToggleButton>
            <ToggleButton size="small" value="20">
              20:00
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <Button
        onClick={sendAppointment}
        variant="contained"
        size="large"
        className="schedule-button"
      >
        Agendar
      </Button>
    </SchedulerContainer>
  );
};

export default Scheduler;
