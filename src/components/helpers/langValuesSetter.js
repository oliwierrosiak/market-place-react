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
    }
}

function langValuesSetter(field,lang)
{
    const localLang = lang.toLowerCase()
    return texts[field][localLang]
}

export default langValuesSetter