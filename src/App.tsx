import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { ReactComponent as Logo } from 'assets/favicon.svg';
import { StrictMode } from 'react';

function App() {
  return (
    <StrictMode>
      <div className="App">
        <Header title="hola" />
        <Logo height={100} width={100} />
        <Button onClick={() => alert('hola')}>Heyo</Button>
      </div>
    </StrictMode>
  );
}

export default App;
