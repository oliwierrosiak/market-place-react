import { useContext, useEffect, useRef, useState } from 'react'
import styles from './pageArticle.module.css'
import LangContext from '../../context/langContext'
import langValuesSetter from '../../helpers/langValuesSetter'
import ErrorIcon from '../../../assets/svg/error'
import CurrencyContext from '../../context/currencyContext'
import starIcon from '../../../assets/img/star10.png'
import starIconHovered from '../../../assets/img/star20.png'
import PageChanger from '../pageChanger/pageChange'
import PageLoading from '../pageLoading/pageLoading'
import { LineChart, ResponsiveContainer, YAxis, XAxis, Line, Tooltip } from 'recharts'

function PageArticle(props)
{
    const lang = useContext(LangContext)
    const currency = useContext(CurrencyContext)

    const articleRef = useRef()

    const [page,setPage] = useState('1')
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
        localData.forEach(x=>{
            if(!x.sparkline[0].price)
            {
                x.sparkline = x.sparkline.map((x,idx)=>{return{time:idx,price:x}})

            }
        })
        setData(localData)
    }

    useEffect(()=>{
        if(props.data)
        {
            dataSetter()
        }
    },[props.data])

    useEffect(()=>{
        if(props.data)
        {
            dataSetter()
        }
        if(articleRef.current && page !== "1")
        {
            window.scrollTo(0,articleRef.current.offsetTop-window.innerHeight*0.15)

        }
    },[page])

    const fixedSetter = (val) =>{
        const str = String(val).split('.')
        if(str[1])
        {
            if(str[1].length < 5)
            {
                return str[1].length
            }
            else
            {
                return 5
            }
        }
        else
        {
            return 0
        }
    }

    const setPriceFormat = (price) =>
    {
        const array = price.split('.')[0].split('').reverse()
        const returnPrice = []
        for(let i = 0;i<array.length;i++)
        {
            if(i !== 0 && i % 3 ===0)
            {
                returnPrice.push(' ')
            }
            returnPrice.push(array[i])
        }

        const priceWithSpaces = returnPrice.reverse()
        if(price.split('.')[1])
        {
            lang.lang === "PL"?priceWithSpaces.push(','):priceWithSpaces.push('.')
            priceWithSpaces.push(price.split('.')[1])
            return priceWithSpaces.join('')
        }   
        else
        {
            return priceWithSpaces.join('')
        } 
    }

    return(
        <article className={styles.article} ref={articleRef}>
            {props.loading?<>
                {props.error?
                <div className={styles.error}>
                <ErrorIcon class={styles.errorIcon} />
                <h2>{langValuesSetter('downloadingError',lang.lang)}</h2>    
                </div>:null}
                <PageLoading />
            </>
            :
            <>
                {data.map(x=><div className={styles.item}>
                    <img src={x.image} className={styles.img}/>
                    <div className={styles.name}>{x.name}</div>
                    <div className={styles.chart}>
                        <ResponsiveContainer key={page}>
                            <LineChart data={x.sparkline}>
                                <YAxis domain={['dataMin - 0.00001', 'dataMax + 0.00001']}  hide/>
                                 <Line type="monotone" dataKey="price" stroke={x.percentPriceChange.toFixed(3) > 0 ? "#4DFF88":"#FF4D4D"} strokeWidth={5} dot={false} isAnimationActive={true}/>
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className={styles.priceContainer}>
                        <div className={styles.price}>
                            {setPriceFormat(x.currentPrice.toFixed(fixedSetter(x.currentPrice)))} {currency.currency}
                        </div>
                        <div className={`${styles.priceChange} ${x?.priceChange.toFixed(3)>0?styles.gainedColor:''} ${x?.priceChange.toFixed(3)<0?styles.loseColor:''}`}>
                            {x.priceChange.toFixed(3)} {currency.currency}
                        </div>
                        <div className={`${styles.percentPriceChange} ${x?.percentPriceChange.toFixed(3)>0?styles.gainedColor:''} ${x?.percentPriceChange.toFixed(3)<0?styles.loseColor:''}`}>
                            {x.percentPriceChange.toFixed(3)}%
                        </div>
                        <div className={styles.interval}>
                            {langValuesSetter('last24hData',lang.lang)}
                        </div>
                    </div>
                    <div className={styles.likeContainer}>
                        <img src={starIcon} onMouseOver={e=>e.target.src=starIconHovered} onMouseOut={e=>e.target.src=starIcon}/>
                    </div>
                </div>)
                }
                
                <PageChanger dataLength={props.data.length} currentPage={Number(page)} setPage={setPage}/>

            </>
            }
        </article>
    )
}

export default PageArticle