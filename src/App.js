import { useEffect, useState, useRef } from 'react';
import styles from './app.module.css'
import LangContext from './components/context/langContext';
import Nav from './components/nav/nav';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyContext from './components/context/currencyContext';
import topBarStyles from './components/topBar/topBar.module.css'
import getCurrencyState from './components/helpers/getCurrencyState';
import getLangState from './components/helpers/getLangState';
import Home from './components/home/home';
import Crypto from './components/crypto/crypto';
import Metals from './components/metals/metals';
import ETF from './components/etf/etf';
import Stock from './components/stock/stock';
import Currencies from './components/currencies/currencies';
import TopBarContext from './components/context/topBarContext';

function App() {

  const [lang,setLang] = useState(getLangState())
  const [currency,setCurrency] = useState(getCurrencyState())

  const currencyListRef = useRef()
  const langListRef = useRef()

  const bodyClicked = (e) =>
  {
    if(!e.target.classList.contains('listContainer'))
    {
      currencyListRef.current.classList.remove(topBarStyles.currencyListDisplay)
      langListRef.current.classList.remove(topBarStyles.currencyListDisplay)
    }
  }

  useEffect(()=>{
    const body = document.querySelector('body')
    body.addEventListener('click',bodyClicked)
    return ()=>{
      body.removeEventListener('click',bodyClicked)
    }
  },[])

  useEffect(()=>{
    if(lang)
    {
      document.querySelector('html').lang = lang.toLowerCase()
    }
  },[lang])

  return (
  <>
    <LangContext.Provider value={{lang,setLang}}>
    <CurrencyContext.Provider value={{currency,setCurrency}}>
    <TopBarContext.Provider value={{currencyListRef:currencyListRef,langListRef:langListRef}}>
      <Router>  
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/stock' element={<Stock />}/>
          <Route path='/etf' element={<ETF />}/>
          <Route path='/crypto' element={<Crypto />}/>
          <Route path='/metals' element={<Metals />}/>
          <Route path='/currencies' element={<Currencies />}/>
        </Routes>
      </Router>
    </TopBarContext.Provider>
    </CurrencyContext.Provider>
    </LangContext.Provider>
  </>
  );
}

export default App;
