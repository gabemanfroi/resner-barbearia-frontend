import { FormControl, Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { variables } from 'modules/Shared/style';

export const SchedulerContainer = styled(Paper)`
  height: 100%;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #1a1a1a !important;
  backdrop-filter: blur(35px);

  .inputs-container {
    display: flex;
    flex: 1;
  }

  .schedule-button {
    width: 250px;
  }

  .times-container {
    height: 100%;
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    justify-items: space-evenly;
    justify-content: space-around;
    align-items: center;

    .times-column {
      margin: 0 6px;
    }
  }
`;

export const SchedulerTextField = styled(TextField)`
  color: white !important;
  input,
  label {
    color: white !important;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${variables.main};
    box-shadow: ${variables.mainBoxShadow};
  }
`;

export const SchedulerFormControl = styled(FormControl)`
  height: 100% !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  * {
    margin: 8px 0;
    color: ${variables.white} !important;
    border-color: ${variables.main} !important;
  }

  .fields-container {
    display: flex;
    flex-direction: column;
  }

  button {
    color: black !important;
  }
`;
