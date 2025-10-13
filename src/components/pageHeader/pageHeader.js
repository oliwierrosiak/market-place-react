import styles from './pageHeader.module.css'
import cryptoImg from '../../assets/img/crypto.jpg'
import { useContext, useState } from 'react'
import LangContext from '../context/langContext'
import langValuesSetter from '../helpers/langValuesSetter'

function PageHeader(props)
{
    const setPageState = () =>{
        switch(props.page)
        {
            case 'crypto':
                return {img:cryptoImg,header:'cryptoHeader',p:'cryptoDescription'}
        }
    }

    const [state,setState] = useState(setPageState)

    const lang = useContext(LangContext)

    return(
        <header className={styles.header}>
            <img src={state.img} className={styles.bg}/>
            <h1>{langValuesSetter(state.header,lang.lang)}</h1>
            <p>{langValuesSetter(state.p,lang.lang)}</p>
            <div className={styles.shadow}></div>
        </header>
    )
}

export default PageHeader