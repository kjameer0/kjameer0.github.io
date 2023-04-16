import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar';
function App() {
  return (
    <div className="main-container">
      <div className="App">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
