import styles from './pageHeader.module.css'
import cryptoImg from '../../../assets/img/crypto.webp'
import { useContext, useEffect, useRef, useState } from 'react'
import LangContext from '../../context/langContext'
import langValuesSetter from '../../helpers/langValuesSetter'
import metalsImg from '../../../assets/img/metals.webp'
import etfImg from '../../../assets/img/etf.webp'
import currenciesImg from '../../../assets/img/currencies.webp'
import stocksImg from '../../../assets/img/stocks.webp'

function PageHeader(props)
{
    const bgRef = useRef()

    const setPageState = () =>{
        switch(props.page)
        {
            case 'crypto':
                return {img:cryptoImg,header:'cryptoHeader',p:'cryptoDescription'}
            case 'metals':
                return {img:metalsImg,header:'metalsHeader',p:"headersDescription"}
            case 'etf':
                return {img:etfImg,header:'etfHeader',p:"etfDescription"}
            case 'stock':
                return {img:stocksImg,header:'stockHeader',p:"stockDescription"}
            case 'currencies':
                return {img:currenciesImg,header:'currenciesHeader',p:"currenciesDescription"}
        }
    }

    const [state,setState] = useState(setPageState)

    const lang = useContext(LangContext)

    useEffect(()=>{
        window.scrollTo(0,0)
        if(bgRef.current)
        {
            bgRef.current.classList.add(styles.bgDisplay)
        }
        return()=>{
            bgRef.current?.classList.remove(styles.bgDisplay)
        }
    },[])

    return(
        <header className={styles.header} id='header'>
            <img src={state.img} className={styles.bg} ref={bgRef}/>
            <h1>{langValuesSetter(state.header,lang.lang)}</h1>
            <p>{langValuesSetter(state.p,lang.lang)}</p>
            <div className={styles.shadow}></div>
        </header>
    )
}

export default PageHeader