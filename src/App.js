/* TO DO
.second random word issue
.login spike
.replace use navigate in login
.usesearchparams (router spike2) with searched word in card&modal/Use search params NaN working
.NaN for no words?
.About brief
.add lang?
.theme?
*/

import './App.css';
import Dictionary from './Views/Dictionary';
import Login from './Views/Login';
import Vocabulary from './Views/Vocabulary';
import About from './Views/About';
import NavBar from './Components /NavBar';
import { Routes, Route, Link } from "react-router-dom";
import NaN from './Views/NaN';
import { DictionaryContextProvider } from './Context/dictionarycontext';
/* import MoreDef from './Components /MoreDef'; */


function App(setIsNavExpanded) {
  return (
    <div className='appbackground'>
          <div className="App ">
      <header className="App-header ">
           <NavBar />
          <DictionaryContextProvider>
            <Routes>
          <Route path='/' element={<Dictionary />} />
     {/*      <Route path='/:word' element={<MoreDef/>} /> */}
          <Route path='/vocabulary' element={<Vocabulary />} /> 
          <Route path='/login' element={<Login/>} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='*' element={<NaN/>} /> 
        </Routes>
          </DictionaryContextProvider>
        
      </header>
    </div>
    </div>


  );
}

export default App;
