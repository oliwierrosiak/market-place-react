import { useState } from 'react';
import styles from './app.module.css'
import LangContext from './components/context/langContext';
import Nav from './components/nav/nav';
import TopBar from './components/topBar/topBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyContext from './components/context/currencyContext';

function App() {

  const [lang,setLang] = useState('en')
  const [currency,setCurrency] = useState('USD')

  return (
  <>
    <LangContext.Provider value={{lang,setLang}}>
    <CurrencyContext.Provider value={{currency,setCurrency}}>
      <TopBar />

      <Nav />

      <Router>  
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/actions' element={<></>}/>
          <Route path='/etf' element={<></>}/>
          <Route path='/crypto' element={<></>}/>
          <Route path='/metals' element={<></>}/>
          <Route path='/currency' element={<></>}/>
        </Routes>
      </Router>
    </CurrencyContext.Provider>
    </LangContext.Provider>
  </>
  );
}

export default App;
