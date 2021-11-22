import { FormControl, Paper } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { variables } from 'modules/Shared/style';

export const SchedulerContainer = styled(Paper)`
  height: 100%;
  padding: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1a1a1a !important;
  backdrop-filter: blur(35px);
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
