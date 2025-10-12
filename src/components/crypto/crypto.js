import { useEffect, useState } from 'react'
import styles from './crypto.module.css'
import axios from 'axios'
import { CartesianGrid, LineChart, YAxis, XAxis, Tooltip, Line, ResponsiveContainer, Brush, BarChart } from 'recharts'

function Crypto()
{
    const [data,setData] = useState([])

    const getBTC = async()=>{
        try
        {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10')
            const formattedData = response.data.prices.map(x=>{return{time:new Date(x[0]).toLocaleTimeString('pl-PL'),price:x[1]}})
            setData(formattedData)
        }
        catch(ex)
        {
            console.log(ex)
        }
    }

    useEffect(()=>{
        console.log('dfsdf')
        getBTC()
    },[])

    return(
        <div className={styles.con}>
            <ResponsiveContainer>
        <LineChart data={data} margin={{top:20,left:20,right:20,bottom:20}}>
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="time" tick={{ fontSize: 12 }} />
          <YAxis domain={["auto", "auto"]} tickFormatter={(val) => `$${val.toLocaleString()}`} />
          <Tooltip formatter={(val,name) => [`Cena: ${val.toFixed(2)}$`]} itemStyle={{background:"black"}} contentStyle={{background:'black'}} />
          <Line type="monotone" dataKey="price" stroke="#ff0000ff" strokeWidth={5} dot={false} />
          {/* <Brush dataKey="price"/> */}
        </LineChart>
        </ResponsiveContainer>
        </div>
    )
}

export default Crypto