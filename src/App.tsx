import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { StrictMode } from 'react';
import { AppBar } from '@mui/material';
function App() {
  return (
    <StrictMode>
      <div className="App">
        <Outlet />
      </div>
    </StrictMode>
  );
}

export default App;
