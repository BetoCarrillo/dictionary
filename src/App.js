/* TO DO
.context
.more definitions
.replace use navigate in login
.random word break
.add lang 
.usesearchparams with searched word in card&modal
.NaN for no words
.About
.Animation buttons
*/

import './App.css';
import Dictionary from './Views/Dictionary';
import Login from './Views/Login';
import Vocabulary from './Views/Vocabulary';
import About from './Views/About';
import NavBar from './Components /NavBar';
import { Routes, Route, Link } from "react-router-dom";
import NaN from './Views/NaN';
/* import MoreDef from './Components /MoreDef'; */


function App() {
  return (
    <div className='appbackground'>
          <div className="App ">
      <header className="App-header ">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Dictionary />} />
     {/*      <Route path='/:word' element={<MoreDef/>} /> */}
          <Route path='/vocabulary' element={<Vocabulary />} /> 
          <Route path='/login' element={<Login/>} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='*' element={<NaN/>} /> 
        </Routes>
      </header>
    </div>
    </div>


  );
}

export default App;
