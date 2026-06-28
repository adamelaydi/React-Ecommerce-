// Components
import TopHeader from "../components/headers/TopHeader"
import BottomHeader from "../components/headers/BottomHeader"

// Styling
import "../../style/pages/Home.css"
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