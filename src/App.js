/* TO DO
.more definitions component #same as searchbar
.replace use navigate in login
.function to clean results
.closing navbar in media
.random word function
.add lang
*/



import './App.css';
import Dictionary from './Views/Dictionary';
import Login from './Views/Login';
import Vocabulary from './Views/Vocabulary';
import About from './Views/About';
import NavBar from './Components /NavBar';
import { Routes, Route, Link } from "react-router-dom";
import NaN from './Views/NaN';
import MoreDef from './Components /MoreDef';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Dictionary />} />
          <Route path='/vocabulary' element={<Vocabulary />} /> 
          <Route path='/:word' element={<MoreDef/>} />
          <Route path='/login' element={<Login/>} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='*' element={<NaN/>} /> 
        </Routes>
      </header>
    </div>
  );
}

export default App;
