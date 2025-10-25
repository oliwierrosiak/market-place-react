import Nav from "../nav/nav";
import PageHeader from "../pageHeader/pageHeader";
import TopBar from "../../topBar/topBar";
import styles from '../pages.module.css'
import PageArticle from "../pageArticle/pageArticle";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ApiAddress from "../../../ApiAddress";
import CurrencyContext from "../../context/currencyContext";

function ETF()
{

    const dataSetter = ()=>{
        const data = JSON.parse(sessionStorage.getItem('etf'))
        return data?data:[]
    }

    const loadingSetter = () =>
    {
        const data = JSON.parse(sessionStorage.getItem('etf'))
        return data?false:true
    }

    const [data,setData] = useState(dataSetter())
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(loadingSetter())
    const currency = useContext(CurrencyContext)
    const[loadingSaver,setLoadingSaver] = useState(true)

    const getETF = async() =>{
        try
        {
            const response = await axios.get(`${ApiAddress}/getEtf?currency=${currency.currency}`)
            setData(response.data)
            sessionStorage.setItem('etf',JSON.stringify(response.data))
            setLoading(false)
        }
        catch(ex)
        {
            setError(true)
        }
    }

    useEffect(()=>{
        getETF()
    },[])

    useEffect(()=>{
        if(loadingSaver)
        {
            setLoadingSaver(false)
        }
        else
        {
            getETF()
            setLoading(true)
        }
    },[currency.currency])

    return(
        <>
            <TopBar />
            <PageHeader page='etf'/>
            <Nav />
            <main className={styles.main}>
                <PageArticle error={error} data={data?data:[]} loading={loading} withoutImg={true}/>
            </main>
        </>
    )
}

export default ETF