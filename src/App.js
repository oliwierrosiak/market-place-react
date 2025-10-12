import { useEffect, useState, useRef } from 'react';
import styles from './app.module.css'
import LangContext from './components/context/langContext';
import Nav from './components/nav/nav';
import TopBar from './components/topBar/topBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CurrencyContext from './components/context/currencyContext';
import topBarStyles from './components/topBar/topBar.module.css'

function App() {

  const [lang,setLang] = useState('en')
  const [currency,setCurrency] = useState('USD')

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
