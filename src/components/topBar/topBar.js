import Search from '../search/search'
import styles from './topBar.module.css'
import LangContext from '../context/langContext'
import CurrencyContext from '../context/currencyContext'
import { useContext, useRef } from 'react'
import logo from '../../assets/img/voxalogo1.png'
import LangIcon from '../../assets/svg/lang'
import CurrencyIcon from '../../assets/svg/currency'
import langValuesSetter from '../helpers/langValuesSetter'
import TopBarContext from '../context/topBarContext'
import { useNavigate } from 'react-router-dom'

function TopBar(props)
{
    const currency = useContext(CurrencyContext)
    const lang = useContext(LangContext)
    const topBarContext = useContext(TopBarContext)

    const currencyToChoose = ['EUR','PLN','USD']
    const langToChoose = ["EN","PL"]

    const navigate = useNavigate()

    const listContainerClicked = (e) =>
    {
        if(e.target.classList.contains(styles.listContainer))
        {
            topBarContext.currencyListRef.current.classList.remove(styles.currencyListDisplay)
            topBarContext.langListRef.current.classList.remove(styles.currencyListDisplay)
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
            <img src={logo} className={styles.logo} onClick={e=>navigate('/')}/>
            <Search />

        <div className={styles.loginContainer}>

                <div className={styles.langAndCurrency}>
                    <div className={styles.item}>
                        <CurrencyIcon class={styles.iconSVG} />
                        <div className={`${styles.listContainer} listContainer`} onClick={listContainerClicked} >
                            {currency.currency}
                            <ul className={styles.list} ref={topBarContext.currencyListRef}>
                                {currencyToChoose.map(x=><li className={styles.listItem} onClick={e=>listClicked(e,x,'currency')}>{x}</li>)}
                            </ul>
                        </div>

                    </div>
               
                    <div className={styles.item}>
                        <LangIcon class={styles.iconSVG}/>

                        <div className={`${styles.listContainer} listContainer`} onClick={listContainerClicked} >
                            {lang.lang}
                            <ul className={styles.list} ref={topBarContext.langListRef}>
                                {langToChoose.map(x=><li className={styles.listItem} onClick={e=>listClicked(e,x,'lang')}>{x}</li>)}
                            </ul>
                        </div>
                    </div>

                </div>


                <button className={`${styles.button} ${styles.register}`} onClick={e=>navigate('/register')}>{langValuesSetter('register',lang.lang)}</button>
                <div className={styles.line}></div>
                <button className={`${styles.button} ${styles.login}`} onClick={e=>navigate('/login')}>{langValuesSetter('login',lang.lang)}</button>
            </div>
        </div>
    )
}

export default TopBar