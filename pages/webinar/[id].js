import HomeLayout from "../../components/HomeLayout";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import api from "../../components/axiosAPI/api";
import {useEffect, useState} from "react";
import WebinarHero from "../../components/Webinar/webinar-hero";
import WebinarVideo from "../../components/Webinar/webinar-video";
import {setWebinar} from "../../redux/reducers/webinar";
import WebinarAbout from "../../components/Webinar/webinar-about";
import WebinarMentor from "../../components/Webinar/webinar-mentor";
import MainForm from "../../components/Home/FormReq/MainForm";
import Faq from "../../components/Home/FAQ/FAQ";

export default function Webinar() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [faqData , setFaqData] = useState({})

    const fetchWebinar = async (id) => {
        dispatch(setWebinar(null))
        const {data} = await api.get(`api/v1/webinar-detail/${id}`)
        dispatch(setWebinar(data))

    }

    useEffect(() => {
        if (router.isReady === false) {
            return;
        }
        fetchWebinar(router.query.id);
        api.get("/ru/api/v2/course-faq-list")
            .then(({data}) => setFaqData(data))
    }, [router.isReady, router.query]);
    return (
        <HomeLayout>
            <WebinarHero/>
            <WebinarVideo/>
            <WebinarAbout/>
            <WebinarMentor/>
            <Faq children={faqData && faqData} />
            <MainForm/>
        </HomeLayout>
    )
}