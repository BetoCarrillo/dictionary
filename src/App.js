
import './App.css';
import Dictionary from './Views/Dictionary';
import Login from './Views/Login';
import Vocabulary from './Views/Vocabulary';
import About from './Views/About';
import NavBar from './Components /NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Dictionary/>
        <Login/>
        <Vocabulary/>
        <About/>
      </header>
    </div>
  );
}

export default App;
