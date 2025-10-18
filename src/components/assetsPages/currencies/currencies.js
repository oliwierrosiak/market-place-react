import Nav from "../nav/nav";
import PageHeader from "../pageHeader/pageHeader";
import TopBar from "../../topBar/topBar";
import styles from '../pages.module.css'
import PageArticle from "../pageArticle/pageArticle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ApiAddress from "../../../ApiAddress";
import CurrencyContext from "../../context/currencyContext";

function Currencies()
{

    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(true)
    
    const currency = useContext(CurrencyContext)

    const getData = async()=>
    {
        try
        {
            const response = await axios.get(`${ApiAddress}/getCurrencies?currency=${currency.currency}`)
            setData(response.data)
            setLoading(false)
        }
        catch(ex)
        {
            setError(true)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        setLoading(true)
        getData()
    },[currency.currency])

    return(
        <>
            <TopBar />
            <PageHeader page="currencies"/>
            <Nav />
            <main className={styles.main}>
                <PageArticle error={error} data={data?data:[]} loading={loading} currency={true}/>
            </main>
        </>
    )
}

export default Currencies