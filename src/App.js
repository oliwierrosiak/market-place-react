import { useEffect, useState, useRef } from 'react';
import styles from './app.module.css'
import LangContext from './components/context/langContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyContext from './components/context/currencyContext';
import topBarStyles from './components/topBar/topBar.module.css'
import getCurrencyState from './components/helpers/getCurrencyState';
import getLangState from './components/helpers/getLangState';
import Home from './components/home/home';
import Crypto from './components/assetsPages/crypto/crypto';
import Metals from './components/assetsPages/metals/metals';
import ETF from './components/assetsPages/etf/etf';
import Stock from './components/assetsPages/stock/stock';
import Currencies from './components/assetsPages/currencies/currencies';
import TopBarContext from './components/context/topBarContext';
import axios from 'axios';
import ApiAddress from './ApiAddress';

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

  const getStocks = async() =>{
    try
    {
      const response = await axios.get(`${ApiAddress}/getStocks?currency=${currency}`)
      sessionStorage.setItem('stocks',JSON.stringify(response.data))
    }
    catch(ex){}
  }

  const getEtf = async() =>{
    try
    {
      const response = await axios.get(`${ApiAddress}/getEtf?currency=${currency}`)
      sessionStorage.setItem('etf',JSON.stringify(response.data))

    }
    catch(ex){}
  }

  const getCrypto = async() =>
  {
    try
    {
      const response = await axios.get(`${ApiAddress}/getCrypto?currency=${currency}`)
      sessionStorage.setItem('crypto',JSON.stringify(response.data))
    }
    catch(ex){}
  }

  const getCurrencies = async() =>
  {
    try
    {
      const response = await axios.get(`${ApiAddress}/getCurrencies?currency=${currency}`)
      sessionStorage.setItem('currencies',JSON.stringify(response.data))
    }
    catch(ex){}
  }

  useEffect(()=>{
    getStocks()
    getEtf()
    getCrypto()
    getCurrencies()
  },[currency])

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
