import styles from './app.module.css'
import Nav from './components/nav/nav';
import TopBar from './components/topBar/topBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
  <>

    <TopBar />

    <Nav />

    <Router>  
        <Route path='/'/>
        <Route path='/actions'/>
        <Route path='/etf'/>
        <Route path='/crypto'/>
        <Route path='/metals'/>
        <Route path='/currency'/>
    </Router>

  </>
  );
}

export default App;
