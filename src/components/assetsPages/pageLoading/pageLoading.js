import { useEffect, useRef } from 'react'
import styles from './pageLoading.module.css'

function PageLoading(props)
{
    const loadingArray = [{},{},{},{},{},{},{},{},{},{}]

    const interval = []

    const animationFunc = (x) =>{
        x.style.transition = `all 1.5s linear`
        x.classList.add(styles.animationDone)
        setTimeout(() => {
            if(x)
            {
                x.style.transition = `none`
                x.classList.remove(styles.animationDone)
            }
        }, 1500);
    }

    useEffect(()=>{
        const el = [...document.querySelectorAll('.animationEl')]
        el.forEach(x=>{
            animationFunc(x)
            interval.push(setInterval(() => {
                animationFunc(x)
            }, 1600))
        })
        return()=>{
            interval.forEach(x=>clearInterval(x))
            // console.log(interval)
        }
    },[])

    return(
        <>
            {loadingArray.map(x=><div className={styles.item}>
                {props.withoutImg?null:<div className={styles.element}>
                    <div className={`${styles.animationBox} animationEl`}></div>
                </div>}
                
                <div className={`${styles.element} ${props.withoutImg?styles.longContainer:''}`}>
                    <div className={`${styles.animationBox} animationEl`}></div>
                </div>
                <div className={styles.element}>
                    <div className={`${styles.animationBox} animationEl`}></div>
                </div>
                <div className={styles.priceContainer}>
                    <div className={styles.element}>
                        <div className={`${styles.animationBox} animationEl`}></div>
                    </div>
                    <div className={styles.element}>
                        <div className={`${styles.animationBox} animationEl`}></div>
                    </div>
                </div>
                <div className={styles.element}>
                    <div className={`${styles.animationBox} animationEl`}></div>
                </div>
            </div>)}
            <div className={styles.pageChanger}>
                <div className={`${styles.animationBox} animationEl`}></div>
            </div>
        </>
    )
}

export default PageLoading