function getCurrencyState()
{
    const currency = localStorage.getItem('currency')
    return currency || (navigator.language.includes('PL')?"PLN":"USD")
}

export default getCurrencyState