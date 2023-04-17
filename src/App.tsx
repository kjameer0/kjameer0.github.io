import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
theme.typography.h6 = {
  fontSize: '1.6rem',
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="main-container">
        <div className="App">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
