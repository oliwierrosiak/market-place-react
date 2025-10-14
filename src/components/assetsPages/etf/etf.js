import Nav from "../nav/nav";
import PageHeader from "../pageHeader/pageHeader";
import TopBar from "../../topBar/topBar";
import styles from '../pages.module.css'
import PageArticle from "../pageArticle/pageArticle";

function ETF()
{
    return(
        <>
            <TopBar />
            <PageHeader page='etf'/>
            <Nav />
            {/* <main className={styles.main}>
                <PageArticle data={[]}/>
            </main> */}
        </>
    )
}

export default ETF