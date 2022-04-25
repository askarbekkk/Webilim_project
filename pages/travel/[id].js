import HomeLayout from "../../components/HomeLayout";
import TravelPageHero from "../../components/TravelPage/TravelPageHero";
import TravelPageTicket from "../../components/TravelPage/TravelPageTicket";
import AboutTravel from "../../components/TravelPage/AboutTravel/AboutTravel";
import ProgramTravel from "../../components/TravelPage/ProgramTravel/ProgramTravel";
import ConcaptTravel from "../../components/TravelPage/ConcaptTravel";
import Faq from "../../components/Home/FAQ/FAQ";
import TravelApplication from "../../components/TravelPage/TravelApplication";
import CoursesTravel from "../../components/TravelPage/CoursesTravel/CoursesTravel";
import {useDispatch} from "react-redux";
import api from "../../components/axiosAPI/api";
import {useRouter} from "next/router";

import {useEffect, useState} from "react";
import {setTravelOne} from "../../redux/reducers/travelOne";
import Spiner from "../../components/Spinner";
import RewiesTravel from "../../components/TravelPage/RewiesTravel/RewiesTravel";


export default function TravelPage() {

    const dispatch = useDispatch()

    const router = useRouter()

    const [faqData , setFaqData] = useState({})


    const fetchCourse = async (id) => {
        dispatch(setTravelOne(null))
        const {data} = await api.get(`/ru/api/v2/travel-detail/${id}`)
        dispatch(setTravelOne(data))
    }

    useEffect(() => {
        if (router.isReady === false) {
            return;
        }
        fetchCourse(router.query.id);

        api.get("/ru/api/v2/travel-faq-list")
            .then(({data}) => setFaqData(data))

    }, [router.isReady, router.query]);
    //
    // const data = useSelector(state => state.travelOne.data)
    // console.log(data)
    //
    // // const fetchCourse = async (id) => {
    // //     const {data} = await api.get(`/ru/api/v2/travel-detail/${id}`)
    // //     data &&  dispatch(setTravelOne(data))
    // //
    // // }
    // //
    // // useEffect(() => {
    // //     if (router.isReady === false) {
    // //         return;
    // //     }
    // //     fetchCourse(router.query.id);
    // // }, []);


    return (

                    <HomeLayout>
                        <TravelPageHero/>
                        {/*true*/}
                        <TravelPageTicket/>
                        {/*true*/}
                        <AboutTravel/>
                        {/*true*/}
                        <CoursesTravel/>
                        {/*true*/}
                        <ProgramTravel/>
                        {/*true*/}
                        <RewiesTravel/>
                        <ConcaptTravel/>

                        <TravelApplication/>
                        <Faq children={faqData && faqData}/>
                    </HomeLayout>



    )
}