// Components
import TopHeader from "../components/headers/TopHeader"
// Styling
import "../../style/pages/Home.css"
import BottomHeader from "../components/headers/BottomHeader"
export function Home(){
    return(
        <>
        <header>
            <TopHeader />
            <BottomHeader />
        </header>
        </>
    )
}