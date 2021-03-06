import Header from "../components/header/Header"
import TourList from "../components/tours/TourList"
import DestinationList from "../components/destinations/DestinationList"
import Footer from "../components/footer/Footer"
import Slider from "../components/slider/Slider"
import SearchBar from "../components/search_bar/SearchBar"
import ClosetTour from "../components/closet-tour/ClosetTour"


function Home() {

    return (
        <>
            <div className="app-container">
                <div className="grid wide">
                    <Header />
                    <Slider />
                    <SearchBar />
                    <ClosetTour />
                    <TourList heading="Tour trong nước" />
                    <DestinationList />
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Home;
