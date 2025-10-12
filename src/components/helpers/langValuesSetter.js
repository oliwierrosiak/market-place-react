const texts = {
    register:{
        pl:'Zarejestruj się',
        en:'Sign up'
    },
    login:{
        pl:'zaloguj się',
        en:'Sign in'
    },
    searchPlaceholder:{
        pl:'Wyszukaj aktywo...',
        en:'Search asset...'
    },
    homeHeader:{
        pl:"Śledź, sprawdzaj ceny i bądź na bieżąco ze swoimi aktywami",
        en:'Track, check prices and stay up to date with your assets'
    },
    nav:{
        pl:['Akcje','ETF','Kryptowaluty','Metale','Waluty'],
        en:['Stock','ETF','Crypto','Metals','Currencies']
    }
}

function langValuesSetter(field,lang)
{
    const localLang = lang.toLowerCase()
    return texts[field][localLang]
}

export default langValuesSetter