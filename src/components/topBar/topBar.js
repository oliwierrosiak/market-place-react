import Search from '../search/search'
import styles from './topBar.module.css'
import LangContext from '../context/langContext'
import CurrencyContext from '../context/currencyContext'
import { useContext } from 'react'

function TopBar()
{
    const currency = useContext(CurrencyContext)
    const lang = useContext(LangContext)

    const currencyToChoose = ['PLN','USD','EUR']
    const langToChoose = ["PL","EN"]

    return(
        <div className={styles.topBar}>
            <img src='' className={styles.logo} />
            <Search />

            <div className={styles.currency}>
                {currency.currency}
                <div className={styles.currencyList}>
                    {currencyToChoose.map(x=><div className={styles.listItem}>{x}</div>)}
                </div>
                </div>
            <div className={styles.lang}>PL</div>

            <div className={styles.login}>
                <button className={`${styles.button} ${styles.register}`}>Zarejestruj się</button>
                <div className={styles.line}></div>
                <button className={`${styles.button} ${styles.login}`}>Zaloguj się</button>
            </div>
        </div>
    )
}

export default TopBar