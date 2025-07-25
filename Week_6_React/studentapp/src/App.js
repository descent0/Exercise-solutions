import logo from './logo.svg';
import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
