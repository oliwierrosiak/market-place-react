import { useContext, useEffect, useRef } from 'react'
import langValuesSetter from '../helpers/langValuesSetter'
import styles from './home.module.css'
import LangContext from '../context/langContext'
import bg from '../../assets/img/graph-8898188_1280.jpg'
import CryptoIcon from '../../assets/svg/crypto'
import StockIcon from '../../assets/svg/stock'
import CurrencyNavIcon from '../../assets/svg/currencyNav'
import GoldIcon from '../../assets/svg/gold'
import ETFIcon from '../../assets/svg/etfIcon'
import { useNavigate } from 'react-router-dom'

function Home()
{
    const lang = useContext(LangContext)

    const navigation = useNavigate()

    const links = useRef([])

    useEffect(()=>{
        const localLinks = [...langValuesSetter('nav','en')]
        links.current = localLinks.map(x=>x.toLowerCase())
    },[])

    return(
        <>
        <header className={styles.header}>
            <img src={bg} className={styles.background}/>
            <h1 className={styles.h1}>{langValuesSetter('homeHeader',lang.lang)}</h1>
            <div className={styles.bottomShadow}></div>
        <nav className={styles.nav}>
            <ul className={styles.navUl}>
                {langValuesSetter('nav',lang.lang).map((x,idx)=>{
                    return <li onClick={e=>navigation(`/${links.current[idx]}`)}>
                        {idx===0?<StockIcon class={styles.navIcon}/>:(idx===1?<ETFIcon class={styles.navIcon}/>:(idx===2?<CryptoIcon class={styles.navIcon}/>:(idx===3?<GoldIcon class={styles.navIcon}/>:<CurrencyNavIcon class={styles.navIcon}/>)))}
                        {x}
                    </li>
                })}
            </ul>
        </nav>
        </header>
        <div className={styles.test}></div>
        </>

    )
}

export default Home