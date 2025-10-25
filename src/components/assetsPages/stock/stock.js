import Nav from "../nav/nav";
import PageHeader from "../pageHeader/pageHeader";
import TopBar from "../../topBar/topBar";
import styles from '../pages.module.css'
import PageArticle from "../pageArticle/pageArticle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ApiAddress from "../../../ApiAddress";
import CurrencyContext from "../../context/currencyContext";

function Stock()
{

    const dataSetter = ()=>{
        const data = JSON.parse(sessionStorage.getItem('stocks'))
        return data?data:[]
    }

    const loadingSetter = () =>
    {
        const data = JSON.parse(sessionStorage.getItem('stocks'))
        return data?false:true
    }

    const [data,setData] = useState(dataSetter())
    const [error,setError] = useState(false)
    const [loading,setLoading] = useState(loadingSetter())
    const[loadingSaver,setLoadingSaver] = useState(true)
    
    const currency = useContext(CurrencyContext)

    const getData = async()=>{
        try
        {
            const response = await axios.get(`${ApiAddress}/getStocks?currency=${currency.currency}`)
            setData(response.data)
            sessionStorage.setItem('stocks',JSON.stringify(response.data))
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
        if(loadingSaver)
        {
            setLoadingSaver(false)
        }
        else
        {
            getData()
            setLoading(true)
        }
    },[currency.currency])

    return(
        <>
            <TopBar />
            <PageHeader page="stock"/>
            <Nav />
            <main className={styles.main}>
                <PageArticle error={error} data={data?data:[]} loading={loading} stocksName={true}/>
            </main>
        </>
    )
}

export default Stock