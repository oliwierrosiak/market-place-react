import { useContext, useRef } from 'react'
import styles from './search.module.css'
import LangContext from '../context/langContext'
import langValuesSetter from '../helpers/langValuesSetter'

function Search()
{
    const bottomBorderRef = useRef()
    const inputRef = useRef()

    const lang = useContext(LangContext)

    const inputFocused = () =>
    {
        bottomBorderRef.current.classList.add(styles.bottomBorderFilledDisplay)
    }

    const inputBlur = () =>
    {
        bottomBorderRef.current.classList.remove(styles.bottomBorderFilledDisplay)
    }

    const setPlaceholderVisibility = (e,action) =>
    {
        if(action === "focus")
        {
            e.target.placeholder = ''
        }
        else if(action === "blur")
        {
            e.target.placeholder = langValuesSetter('searchPlaceholder',lang.lang)
        }
    }

    return(
        <div className={styles.search} onClick={e=>inputRef.current.focus()}>
            <input ref={inputRef} className={styles.searchInput} type='text' placeholder={langValuesSetter('searchPlaceholder',lang.lang)} onFocus={e=>{setPlaceholderVisibility(e,'focus');inputFocused()}} onBlur={e=>{setPlaceholderVisibility(e,'blur');inputBlur()}}/>
            <div className={styles.bottomBorder}>
                <div className={styles.bottomBorderFilled} ref={bottomBorderRef}></div>
            </div>
        </div>
    )
}

export default Search