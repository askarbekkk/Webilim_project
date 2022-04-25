import {useIntl} from "react-intl";
// import Pagination from 'rc-pagination';
import {useDispatch, useSelector} from "react-redux";
import api from "../components/axiosAPI/api";
import {useEffect} from "react";
import HomeLayout from "../components/HomeLayout";
import AllCoursesLoader from "../components/ContentLoaders/all-coursesLoader";

import {setAllWebinarLoaded, setAllWebinars} from '../redux/reducers/webinar'
import WebinarItem from "../components/Webinar/webinarItem";

export default function AllWebinars() {
    const {formatMessage} = useIntl();
    const dispatch = useDispatch();
    const webinar = useSelector(state => state.webinar);


    const fetchAllWebinars = async () => {
        dispatch(setAllWebinarLoaded(false));
        const {data} = await api.get(`/ru/api/v1/webinar-list/?page=${webinar.currentPage}`);
        // dispatch(setTotalCourses(data.total));
        dispatch(setAllWebinars(data));
        dispatch(setAllWebinarLoaded(true));
    }


    useEffect(() => {
        fetchAllWebinars();
    }, []);

    // const handlePageChange = (page) => {
    //     dispatch(setCurrentPage(page));
    // }
    return (
        <HomeLayout>
            <section id="courses">
                <div className="container container-2sm md:container mx-auto">
                    <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">
                        Баардык материалдар
                    </h1>
                    <div className="flex ">
                        <button className="btn3">{formatMessage({"id": "all"})}</button>
                        <div className="ml-2">
                            <button className="btn2">{formatMessage({"id": "progress"})}</button>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 m-auto gap-6 mb-24">
                        {webinar.allWebinarLoaded ? (
                            webinar.allWebinars.map((elem) => (
                                <WebinarItem el={elem} key={elem.id}/>
                            ))
                        ) : (
                            Array(4).fill(0).map((_, i) => (
                                <AllCoursesLoader key={i}/>
                            ))
                        )}
                    </div>
                    {/*<Pagination*/}
                    {/*    total={course.totalCourses}*/}
                    {/*    pageSize={7}*/}
                    {/*    current={course.currentPage}*/}
                    {/*    onChange={handlePageChange}*/}
                    {/*/>*/}
                </div>
            </section>
        </HomeLayout>
    )
}