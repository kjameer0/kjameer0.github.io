import { Outlet } from 'react-router-dom';
import NavBarTest from 'components/NavBarTest';
function App() {
  return (
    <>
      <div className="App">
        <NavBarTest />
        <Outlet />
      </div>
    </>
  );
}

export default App;
