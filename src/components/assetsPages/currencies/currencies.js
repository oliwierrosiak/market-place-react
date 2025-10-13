import Nav from "../nav/nav";
import PageHeader from "../pageHeader/pageHeader";
import TopBar from "../../topBar/topBar";

function Currencies()
{
    return(
        <>
            <TopBar />
            <PageHeader page="currencies"/>
            <Nav />
        </>
    )
}

export default Currencies