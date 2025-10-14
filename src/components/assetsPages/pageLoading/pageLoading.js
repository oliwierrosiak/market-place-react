import { useEffect, useRef } from 'react'
import styles from './pageLoading.module.css'

function PageLoading()
{
    const loadingArray = [{},{},{},{},{},{},{},{},{},{}]

    const animationFunc = (x) =>{
        x.style.transition = `all 1.5s linear`
        x.classList.add(styles.animationDone)
        setTimeout(() => {
            x.style.transition = `none`
            x.classList.remove(styles.animationDone)
        }, 1500);
    }

    useEffect(()=>{
        const el = [...document.querySelectorAll('.animationEl')]
        el.forEach(x=>{
            animationFunc(x)
            setInterval(() => {
                animationFunc(x)
            }, 1600);
        })
    },[])

    return(
        <>
            {loadingArray.map(x=><div className={styles.item}>
                <div className={styles.element}>
                    <div className={`${styles.animationBox} animationEl`}></div>
                </div>
                <div className={styles.element}>
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