import { useContext, useEffect, useState } from 'react'
import styles from './crypto.module.css'
import axios from 'axios'
import { CartesianGrid, LineChart, YAxis, XAxis, Tooltip, Line, ResponsiveContainer, Brush, BarChart } from 'recharts'
import ApiAddress from '../../ApiAddress'
import CurrencyContext from '../context/currencyContext'

import LangContext from '../context/langContext'

import PageHeader from '../pageHeader/pageHeader'
import Nav from '../nav/nav'
import TopBar from '../topBar/topBar'

function Crypto()
{
    const [data,setData] = useState([])

    const currency = useContext(CurrencyContext)
    const lang = useContext(LangContext)

    const getCrypto = async() =>{
        try
        {
            const response = await axios.get(`${ApiAddress}/getCrypto?currency=${currency.currency}`)
            console.log(response)
        }
        catch(ex)
        {
            console.log(ex)
        }
    }

   

    useEffect(()=>{
        // getCrypto()
    },[])

    return(
        <>
            <TopBar/>
            <PageHeader page="crypto" />
            <Nav />
            <div className={styles.test}>
                
            </div>
        </>
    )
}

export default Crypto