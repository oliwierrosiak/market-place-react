import PageHeader from "../pageHeader/pageHeader"
import Nav from "../nav/nav"
import TopBar from "../../topBar/topBar"
import styles from '../pages.module.css'
import PageArticle from "../pageArticle/pageArticle"

function Metals()
{
    return(
        <>
            <TopBar />
            <PageHeader page="metals" />
            <Nav />
            <main className={styles.main}>
                <PageArticle />
            </main>
        </>

    )
}

export default Metals