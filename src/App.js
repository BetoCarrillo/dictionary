
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
import Registration from './Views/Registration';
import NaNLogIn from './Views/NaNLogIn';
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
                <Route path='/login' element={<Login />} /> 
                 <Route path='/register' element={<Registration/>} /> 
                <Route path='/about' element={<About />} /> 
                 <Route path='/loginfailed' element={<NaNLogIn/>} /> 
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
