import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { StrictMode } from 'react';
import NavBarTest from 'components/NavBarTest';
function App() {
  return (
    <StrictMode>
      <NavBarTest />
      <div className="App">
        <Outlet />
      </div>
    </StrictMode>
  );
}

export default App;
