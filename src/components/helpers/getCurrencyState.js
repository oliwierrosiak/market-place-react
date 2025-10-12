function getCurrencyState()
{
    const currency = localStorage.getItem('currency')
    return currency || "USD"
}

export default getCurrencyState