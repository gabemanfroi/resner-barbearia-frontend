import { About, Home, Portfolio, Schedule } from 'pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from 'modules/Shared/components';
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'modules/Shared/util/theme';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/agendamento" element={<Schedule />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
