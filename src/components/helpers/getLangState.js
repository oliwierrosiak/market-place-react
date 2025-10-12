function getLangState()
{
    const lang = localStorage.getItem('lang')
    return lang || 'EN'
}

export default getLangState