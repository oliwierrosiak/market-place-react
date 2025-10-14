import { useEffect, useState } from 'react'
import styles from './pageChanger.module.css'
import ArrowIcon from '../../../assets/svg/arrow'

function PageChanger(props)
{
    const maxPageSetter = () =>{
        return Math.ceil(props.dataLength/10)
    }

    const [maxPage,setMaxPage] = useState(maxPageSetter())

    const previousPageSetter = () =>{
        const previousPage = []
        for(let i = props.currentPage-1;i>0;i--)
        {
            if(previousPage.length === 2)
            {
                break
            }
            else
            {
                previousPage.push(i)

            }
        }
        return previousPage.reverse()
    }

    const nextPagesSetter = () =>{
        const nextPages = []
        for(let i = props.currentPage+1;i<=maxPage;i++)
        {
            if(nextPages.length === 2)
            {
                break
            }
            else
            {
                nextPages.push(i)

            }
        }
        if(nextPages.at(-1) != maxPage && nextPages.at(-1))
        {
            if(nextPages.at(-1) != maxPage-1)
            {
                nextPages.push("...")
                nextPages.push(maxPage)
            }
            else
            {
                nextPages.push(maxPage)
            }
        }
        
        return nextPages
    }

    
    const [previousPages,setPreviousPages] = useState(previousPageSetter())
    const [nextPages,setNextPages] = useState(nextPagesSetter())

    useEffect(()=>{
        setPreviousPages(previousPageSetter())
        setNextPages(nextPagesSetter())
    },[props.currentPage,maxPage])

    useEffect(()=>{
        setMaxPage(maxPageSetter())
    },[props.dataLength])

    const setPage = (number) =>{
        props.setPage(number)
    }

    const arrowClicked = (dir,e)=>
    {
        if(dir === "left")
        {
            if(!e.target.closest('div').classList.contains(styles.arrowDisabled))
            {
                setPage(props.currentPage-1)
            }
        }
        else if(dir === 'right')
        {
            if(!e.target.closest('div').classList.contains(styles.arrowDisabled))
            {
                setPage(props.currentPage+1)
            }
        }
    }

    return(
        <div className={styles.container}>
            <div onClick={e=>arrowClicked('left',e)} className={`${styles.arrowContainer} ${props.currentPage === 1?styles.arrowDisabled:''}`}>
                <ArrowIcon class={`${styles.arrow} ${styles.leftArrow}`}/>
            </div>
            {previousPages.map(x=><div className={styles.item} onClick={e=>setPage(x)}>{x}</div>
            )}
            <div className={`${styles.item} ${styles.currentPage}`}>{props.currentPage}</div>
            {nextPages.map(x=><div onClick={e=>x!=="..." && setPage(x)} className={`${styles.item} ${x==="..."?styles.noHover:''}`}>
                {x}
            </div>)}
            <div onClick={e=>arrowClicked('right',e)} className={`${styles.arrowContainer} ${props.currentPage === maxPage?styles.arrowDisabled:''}`}>
                <ArrowIcon class={styles.arrow}/>

            </div>
        </div>
    )
}

export default PageChanger