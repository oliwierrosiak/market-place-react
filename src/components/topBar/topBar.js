import Search from '../search/search'
import styles from './topBar.module.css'
import LangContext from '../context/langContext'
import CurrencyContext from '../context/currencyContext'
import { useContext, useRef } from 'react'

function TopBar(props)
{
    const currency = useContext(CurrencyContext)
    const lang = useContext(LangContext)

    const currencyToChoose = ['EUR','PLN','USD']
    const langToChoose = ["EN","PL"]



    const listContainerClicked = (e) =>
    {
        if(e.target.classList.contains(styles.listContainer))
        {
            props.currencyListRef.current.classList.remove(styles.currencyListDisplay)
            props.langListRef.current.classList.remove(styles.currencyListDisplay)
            e.target.children[0].classList.add(styles.currencyListDisplay)
        }
    }

    const listClicked = (e,arg,action) =>
    {
        if(action === 'currency')
        {
            localStorage.setItem('currency',arg)
            currency.setCurrency(arg)
            e.target.closest('div').children[0].classList.remove(styles.currencyListDisplay)

        }
        else if(action === 'lang')
        {
            localStorage.setItem('lang',arg)
            lang.setLang(arg)
            e.target.closest('div').children[0].classList.remove(styles.currencyListDisplay)
        }
    }

    return(
        <div className={styles.topBar}>
            <img src='' className={styles.logo} />
            <Search />

            <div className={styles.langAndCurrency}>

                <div className={`${styles.listContainer} listContainer`} onClick={listContainerClicked} >
                    {currency.currency}
                    <ul className={styles.list} ref={props.currencyListRef}>
                        {currencyToChoose.map(x=><li className={styles.listItem} onClick={e=>listClicked(e,x,'currency')}>{x}</li>)}
                    </ul>
                </div>

             <div className={`${styles.listContainer} listContainer`} onClick={listContainerClicked} >
                {lang.lang}
                <ul className={styles.list} ref={props.langListRef}>
                        {langToChoose.map(x=><li className={styles.listItem} onClick={e=>listClicked(e,x,'lang')}>{x}</li>)}
                </ul>
             </div>

            </div>

           

            <div className={styles.login}>
                <button className={`${styles.button} ${styles.register}`}>Zarejestruj się</button>
                <div className={styles.line}></div>
                <button className={`${styles.button} ${styles.login}`}>Zaloguj się</button>
            </div>
        </div>
    )
}

export default TopBar