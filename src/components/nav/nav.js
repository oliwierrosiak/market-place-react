import { useContext, useEffect, useRef, useState } from 'react'
import styles from './nav.module.css'
import langValuesSetter from '../helpers/langValuesSetter'
import LangContext from '../context/langContext'
import { useHref, useNavigate, useParams } from 'react-router-dom'
import StockIcon from '../../assets/svg/stock'
import ETFIcon from '../../assets/svg/etfIcon'
import CryptoIcon from '../../assets/svg/crypto'
import GoldIcon from '../../assets/svg/gold'
import CurrencyNavIcon from '../../assets/svg/currencyNav'

function Nav()
{
    const lang = useContext(LangContext)
    const navigation = useNavigate()
    const links = useRef()
    const href = useHref()

    const [currentPage,setCurrentPage] = useState(-1)

    useEffect(()=>{
        const localLinks = [...langValuesSetter('nav','en')]
        const hrefModulated = href.split('/')[1]
        const idx = localLinks.findIndex(x=>x.toLowerCase()==hrefModulated)
        setCurrentPage(idx)
        links.current = localLinks.map(x=>x.toLowerCase())

    },[])

    return(
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {langValuesSetter('nav',lang.lang).map((x,idx)=>{
                    return <li className={currentPage === idx?styles.currentPage:''} onClick={e=>navigation(`/${links.current[idx].toLowerCase()}`)}>
                        {idx===0?<StockIcon class={styles.navIcon}/>:(idx===1?<ETFIcon class={styles.navIcon}/>:(idx===2?<CryptoIcon class={styles.navIcon}/>:(idx===3?<GoldIcon class={styles.navIcon}/>:<CurrencyNavIcon class={styles.navIcon}/>)))}
                        {x}
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Nav