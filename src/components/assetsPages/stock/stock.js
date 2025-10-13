import Nav from "../nav/nav";
import PageHeader from "../pageHeader/pageHeader";
import TopBar from "../../topBar/topBar";

function Stock()
{
    return(
        <>
            <TopBar />
            <PageHeader page="stock"/>
            <Nav />
        </>
    )
}

export default Stock