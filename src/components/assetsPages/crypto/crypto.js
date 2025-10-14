import { useContext, useEffect, useState } from 'react'
import styles from '../pages.module.css'
import axios from 'axios'
import ApiAddress from '../../../ApiAddress'
import CurrencyContext from '../../context/currencyContext'
import LangContext from '../../context/langContext'
import PageHeader from '../pageHeader/pageHeader'
import Nav from '../nav/nav'
import TopBar from '../../topBar/topBar'
import PageArticle from '../pageArticle/pageArticle'

const dataSetterTest = () =>{
    return [{
        currentPrice:99980,
        id:"bitcoin",
        image:"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        name:"Bitcoin",
        percentPriceChange:0.61012,
        priceChange:606.3,
        rank:1,
        sprakline:[125465.7344354104, 124773.50823074432, 124435.48715295873, 124553.84142326003, 121268.19143320463, 121518.75593575071, 121275.38370398917, 122885.17354571314, 123966.00923012884, 123352.50487523204, 122119.51212540246, 122799.10512899117, 120776.57159636542, 121698.03066778315, 121599.35874025906, 121625.77040228223, 117715.62522661283, 113043.67586321975, 112551.01870262809, 112323.71307768454, 112032.04769637782, 110655.26975977031, 111804.41628579248, 111881.97093087486, 113916.48201637086, 115189.5714637257, 114704.85275678411, 114188.711669866]},
        {
        currentPrice:99980,
        id:"bitcoin",
        image:"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        name:"Bitcoin",
        percentPriceChange:0.61012,
        priceChange:606.3,
        rank:1,
        sprakline:[125465.7344354104, 124773.50823074432, 124435.48715295873, 124553.84142326003, 121268.19143320463, 121518.75593575071, 121275.38370398917, 122885.17354571314, 123966.00923012884, 123352.50487523204, 122119.51212540246, 122799.10512899117, 120776.57159636542, 121698.03066778315, 121599.35874025906, 121625.77040228223, 117715.62522661283, 113043.67586321975, 112551.01870262809, 112323.71307768454, 112032.04769637782, 110655.26975977031, 111804.41628579248, 111881.97093087486, 113916.48201637086, 115189.5714637257, 114704.85275678411, 114188.711669866]},
        {
        currentPrice:99980,
        id:"bitcoin",
        image:"https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
        name:"Bitcoin",
        percentPriceChange:0.61012,
        priceChange:606.3,
        rank:1,
        sprakline:[125465.7344354104, 124773.50823074432, 124435.48715295873, 124553.84142326003, 121268.19143320463, 121518.75593575071, 121275.38370398917, 122885.17354571314, 123966.00923012884, 123352.50487523204, 122119.51212540246, 122799.10512899117, 120776.57159636542, 121698.03066778315, 121599.35874025906, 121625.77040228223, 117715.62522661283, 113043.67586321975, 112551.01870262809, 112323.71307768454, 112032.04769637782, 110655.26975977031, 111804.41628579248, 111881.97093087486, 113916.48201637086, 115189.5714637257, 114704.85275678411, 114188.711669866]}
        
    ]
}

function Crypto()
{
    const [data,setData] = useState(dataSetterTest)
    const [error,setError] = useState(false)

    const currency = useContext(CurrencyContext)
    const lang = useContext(LangContext)

    const getCrypto = async() =>{
        try
        {
            const response = await axios.get(`${ApiAddress}/getCrypto?currency=${currency.currency}`)
            setData(response.data)
        }
        catch(ex)
        {
            setError(true)
        }
    }

   

    useEffect(()=>{
        getCrypto()
    },[])

    useEffect(()=>{
        getCrypto()
    },[currency.currency])

    return(
        <>
            <TopBar/>
            <PageHeader page="crypto" />
            <Nav />
            <main className={styles.main}>
                <PageArticle error={error} data={data}/>
            </main>
        </>
    )
}

export default Crypto