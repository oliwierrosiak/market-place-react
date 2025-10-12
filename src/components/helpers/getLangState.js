function getLangState()
{
    const lang = localStorage.getItem('lang')
    return lang || (navigator.language.includes('pl')?'PL':"EN")
}

export default getLangState