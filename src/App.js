
import './App.css';
import { Aside } from './Aside';
import { Main } from './Main';
import { PostAside } from './PostAside';

function App() {
  return (
    <div className="App">
      <div className="ContAside"><PostAside/></div>
      <Main/>
    </div>
  );
}

export default App;
