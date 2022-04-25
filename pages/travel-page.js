import HomeLayout from "../components/HomeLayout";
import TravelPageHero from "../components/TravelPage/TravelPageHero";
import TravelPageTicket from "../components/TravelPage/TravelPageTicket";
import AboutTravel from "../components/TravelPage/AboutTravel/AboutTravel";
import ProgramTravel from "../components/TravelPage/ProgramTravel/ProgramTravel";
import ConcaptTravel from "../components/TravelPage/ConcaptTravel";
import Faq from "../components/Home/FAQ/FAQ";
import TravelApplication from "../components/TravelPage/TravelApplication";
import CoursesTravel from "../components/TravelPage/CoursesTravel/CoursesTravel";


export default function TravelPage() {
    return (
        <HomeLayout>
            <TravelPageHero/>
            <TravelPageTicket/>
            <AboutTravel/>
            <CoursesTravel/>
            <ProgramTravel/>
            <ConcaptTravel/>
            <TravelApplication/>
            <Faq/>
        </HomeLayout>
    )
}