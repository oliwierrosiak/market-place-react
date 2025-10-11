import React from "react";

const CurrencyContext = React.createContext({
    currency:'',
    setCurrency:()=>{}
})

export default CurrencyContext