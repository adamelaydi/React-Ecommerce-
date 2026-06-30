// Components
import TopHeader from "../components/headers/TopHeader"
import BottomHeader from "../components/headers/BottomHeader"
import HSwiper from "../components/home/HSwiper"
import CategorySection from "../components/general/CategorySection"
// Styling
import "../../style/pages/Home.css"
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
            <CategorySection />
            <CategorySection />
            <CategorySection />
            <CategorySection />
        </main>
        </>
    )
}