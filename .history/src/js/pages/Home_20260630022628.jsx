// Components
import TopHeader from "../components/headers/TopHeader"
import BottomHeader from "../components/headers/BottomHeader"
import HSwiper from "../components/home/HSwiper"
// Styling
import "../../style/pages/Home.css"
import CategorySection from "../components/CategorySection"
export function Home(){
    return(
        <>
        <header>
            <TopHeader />
            <BottomHeader />
        </header>
        <main>
            <HSwiper />
            <CategorySection />
        </main>
        </>
    )
}