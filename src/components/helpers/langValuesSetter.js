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
    },
    cryptoHeader:{
        pl:'Kryptowaluty',
        en:'Cryptocurrencies'
    },
    cryptoDescription:{
        pl:'Kryptowaluty to cyfrowe pieniądze działające w oparciu o technologię blockchain. Pozwalają na szybkie i bezpieczne przesyłanie wartości między użytkownikami bez pośredników, takich jak banki. Każda transakcja jest zapisywana w rozproszonej bazie danych, co zwiększa bezpieczeństwo i przejrzystość. Najbardziej znane kryptowaluty to Bitcoin i Ethereum.',
        en:'Cryptocurrencies are digital currencies based on blockchain technology. They allow fast and secure transfers of value between users without intermediaries like banks. Every transaction is recorded on a distributed ledger, enhancing security and transparency. The most well-known cryptocurrencies are Bitcoin and Ethereum.'
    }
}

function langValuesSetter(field,lang)
{
    const localLang = lang.toLowerCase()
    return texts[field][localLang]
}

export default langValuesSetter