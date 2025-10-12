import { useEffect, useState, useRef } from 'react';
import styles from './app.module.css'
import LangContext from './components/context/langContext';
import Nav from './components/nav/nav';
import TopBar from './components/topBar/topBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyContext from './components/context/currencyContext';
import topBarStyles from './components/topBar/topBar.module.css'
import getCurrencyState from './components/helpers/getCurrencyState';
import getLangState from './components/helpers/getLangState';

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
      <TopBar currencyListRef={currencyListRef} langListRef={langListRef}/>

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
