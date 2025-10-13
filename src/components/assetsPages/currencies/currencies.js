import Nav from "../nav/nav";
import PageHeader from "../pageHeader/pageHeader";
import TopBar from "../../topBar/topBar";
import styles from '../pages.module.css'
import PageArticle from "../pageArticle/pageArticle";

function Currencies()
{
    return(
        <>
            <TopBar />
            <PageHeader page="currencies"/>
            <Nav />
            <main className={styles.main}>
                <PageArticle />
            </main>
        </>
    )
}

export default Currencies