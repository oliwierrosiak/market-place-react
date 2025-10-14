const texts = {
    register:{
        pl:'Zarejestruj się',
        en:'Sign up'
    },
    login:{
        pl:'Zaloguj się',
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
    },
    metalsHeader:{
        pl:"Metale szlachetne",
        en:'Precious metals'
    },
    headersDescription:{
        pl:"Metale szlachetne to rzadkie, odporne na korozję metale, takie jak złoto, srebro czy platyna. Od wieków wykorzystywane są jako środek przechowywania wartości, w jubilerstwie i przemyśle. Są cenione za stabilność, trwałość i ograniczoną podaż.",
        en:'Precious metals are rare, corrosion-resistant metals such as gold, silver, and platinum. For centuries, they have been used as a store of value, in jewelry, and in industry. They are valued for their stability, durability, and limited supply.'
    },
    etfHeader:{
        pl:"ETF'y",
        en:"ETFs"
    },
    etfDescription:{
        pl:'ETF (Exchange Traded Fund) to fundusz inwestycyjny notowany na giełdzie, który odwzorowuje zachowanie określonego indeksu, surowca lub sektora. Pozwala inwestorom w prosty sposób uzyskać dostęp do szerokiego rynku przy niskich kosztach i wysokiej płynności.',
        en:'ETF (Exchange Traded Fund) is an investment fund traded on the stock exchange that tracks the performance of a specific index, commodity, or sector. It allows investors to gain broad market exposure easily, with low costs and high liquidity.'
    },
    stockHeader:{
        pl:"Akcje",
        en:'Stocks'
    },
    stockDescription:{
        pl:"Akcje to papiery wartościowe potwierdzające udział w kapitale spółki. Dają prawo do części zysków (dywidendy) oraz możliwość wzrostu wartości wraz z rozwojem firmy. Są jednym z najpopularniejszych sposobów inwestowania na giełdzie.",
        en:'Stocks are securities that represent ownership in a company. They give investors the right to share in profits (dividends) and benefit from potential price growth as the company develops. They are one of the most common forms of stock market investment.'
    },
    currenciesHeader:{
        pl:"Waluty",
        en:'Currencies'
    },
    currenciesDescription:{
        pl:"Waluty to oficjalne środki płatnicze poszczególnych krajów, takie jak dolar amerykański, euro czy złoty. Ich wartość zmienia się w zależności od sytuacji gospodarczej i politycznej, a handel nimi odbywa się na rynku Forex.",
        en:'Currencies are the official means of payment of individual countries, such as the US dollar, euro, or Polish zloty. Their value fluctuates based on economic and political conditions, and they are traded on the foreign exchange (Forex) market.'
    },
    downloadingError:{
        pl:"Wystąpił bład pobierania danych z serwera. Spróbuj ponownie później.",
        en:'There was an error retrieving data from the server. Please try again later.'
    },
    last24hData:{
        pl:"Ostatnie 24h",
        en:"last 24h"
    }
}

function langValuesSetter(field,lang)
{
    const localLang = lang.toLowerCase()
    return texts[field][localLang]
}

export default langValuesSetter