import { useContext, useEffect, useRef, useState } from 'react'
import styles from './nav.module.css'
import langValuesSetter from '../../helpers/langValuesSetter'
import LangContext from '../../context/langContext'
import { useHref, useNavigate, useParams } from 'react-router-dom'
import StockIcon from '../../../assets/svg/stock'
import ETFIcon from '../../../assets/svg/etfIcon'
import CryptoIcon from '../../../assets/svg/crypto'
import GoldIcon from '../../../assets/svg/gold'
import CurrencyNavIcon from '../../../assets/svg/currencyNav'

function Nav()
{
    const lang = useContext(LangContext)
    const navigation = useNavigate()
    const links = useRef()
    const href = useHref()

    const [currentPage,setCurrentPage] = useState(-1)

    const nav = useRef()

    let navSticked = false

    const windowScroll = () =>{
        const topBar = document.querySelector('#topBar')
        if(!nav.current || !topBar)
            return
        if(nav.current.getBoundingClientRect().top*0.9<topBar.clientHeight && !navSticked)
        {
            navSticked = true
            nav.current.classList.add(styles.navSticked)
        }
        else if(nav.current.getBoundingClientRect().top*0.9>topBar.clientHeight && navSticked)
        {
            navSticked = false
            nav.current.classList.remove(styles.navSticked)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",windowScroll)
        const localLinks = [...langValuesSetter('nav','en')]
        const hrefModulated = href.split('/')[1]
        const idx = localLinks.findIndex(x=>x.toLowerCase()==hrefModulated)
        setCurrentPage(idx)
        links.current = localLinks.map(x=>x.toLowerCase())
        return()=>{
            window.removeEventListener("scroll",windowScroll)
        }
    },[])

    return(
        <nav className={styles.nav} ref={nav}>
            <ul className={styles.ul}>
                {langValuesSetter('nav',lang.lang).map((x,idx)=>{
                    return <li className={`${styles.li} ${currentPage === idx?styles.currentPage:''}`} onClick={e=>navigation(`/${links.current[idx].toLowerCase()}`)}>
                        {idx===0?<StockIcon class={styles.navIcon}/>:(idx===1?<ETFIcon class={styles.navIcon}/>:(idx===2?<CryptoIcon class={styles.navIcon}/>:(idx===3?<GoldIcon class={styles.navIcon}/>:<CurrencyNavIcon class={styles.navIcon}/>)))}
                        {x}
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Nav