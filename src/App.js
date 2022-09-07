/* TO DO
.custom fetch hook. OTT
.review filter code. OTT
.Register view
.usesearchparams (router spike2) with searched word in card&modal/Use search params NaN working
.About brief
.add lang?
.theme?
.add a word/sentence
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
import { AuthContextProvider } from './Context/authcontext';
import ProtectedRoute from './Components /ProtectedRoute';
/* import MoreDef from './Components /MoreDef'; */


function App({words}) {
  return (
    <div className='appbackground'>
          <div className="App ">
        <header className="App-header ">
          <AuthContextProvider>
              <NavBar />
          <DictionaryContextProvider>
            <Routes>
                <Route path='/' element={<Dictionary />} state={words} />
     {/*      <Route path='/:word' element={<MoreDef/>} /> */}
                <Route path='/vocabulary' element={
                  <ProtectedRoute>
                    <Vocabulary />
                  </ProtectedRoute>} /> 
          <Route path='/login' element={<Login/>} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='*' element={<NaN/>} /> 
        </Routes>
          </DictionaryContextProvider>
          </AuthContextProvider>
      </header>
    </div>
    </div>


  );
}

export default App;
