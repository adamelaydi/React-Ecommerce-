// Components
import TopHeader from "../components/headers/TopHeader"
import BottomHeader from "../components/headers/BottomHeader"
import <H></H>Swiper from "../components/home/HSwiper"
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
        </main>
        </>
    )
}