import { useContext, useEffect, useState } from 'react'
import styles from './pageArticle.module.css'
import LangContext from '../../context/langContext'
import langValuesSetter from '../../helpers/langValuesSetter'
import ErrorIcon from '../../../assets/svg/error'
import CurrencyContext from '../../context/currencyContext'

function PageArticle(props)
{
    const lang = useContext(LangContext)
    const currency = useContext(CurrencyContext)

    const [page,setPage] = useState(1)
    const [data,setData] = useState([])
    
    const dataSetter = () =>{
        const localData = []
        for(let i = page*10-10;i<page*10;i++)
        {
            if(props.data[i])
            {
                localData.push(props.data[i])
            }
        }
        setData(localData)
    }

    useEffect(()=>{
        if(props.data)
        {
            dataSetter()
        }
    },[props.data])

    return(
        <article className={styles.article}>
            {props.error ? <div className={styles.error}>
                <ErrorIcon class={styles.errorIcon} />
                <h2>{langValuesSetter('downloadingError',lang.lang)}</h2>    
            </div>:
                data.map(x=><div className={styles.item}>
                    <img src={x.image} className={styles.img}/>
                    <div className={styles.name}>{x.name}</div>
                    <div className={styles.chart}></div>
                    <div className={styles.priceContainer}>
                        <div className={styles.price}>
                            {x.currentPrice} {currency.currency}
                        </div>
                        <div className={styles.priceChange}>
                            {x.priceChange.toFixed(3)} {currency.currency}
                        </div>
                        <div className={styles.percentPriceChange}>
                            {x.percentPriceChange.toFixed(3)}%
                        </div>
                    </div>
                    <div className={styles.likeContainer}>
                        
                    </div>
                </div>)
            }
        </article>
    )
}

export default PageArticle