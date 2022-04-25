import {useIntl} from "react-intl";
// import Pagination from 'rc-pagination';
import {useDispatch, useSelector} from "react-redux";
import api from "../components/axiosAPI/api";
import {useEffect, useState} from "react";
import {setAllCourses, setAllCoursesLoaded, setTotalCourses, setCurrentPage} from "../redux/reducers/course";
import CourseItem from "../components/Course/CourseItem";
import HomeLayout from "../components/HomeLayout";
// import CourseContentLoader from "../components/ContentLoaders/courseContentLoader";
import AllCoursesLoader from "../components/ContentLoaders/all-coursesLoader";
import {data} from "autoprefixer";


export default function AllCourses() {
    const {formatMessage} = useIntl();
    const dispatch = useDispatch();
    const [oneCategory, setOneCategory] = useState('')

    const fetchAllCourses = async () => {
        const {data} = await api.get(`/ru/api/v2/course-list/?page=${course.currentPage}&category=${oneCategory}`);
        // dispatch(setTotalCourses(data.total));
        dispatch(setAllCoursesLoaded(true));
        dispatch(setAllCourses(data));
    }
    const course = useSelector(state => state.course);

    useEffect(() => {
        fetchAllCourses();
    }, [course]);
    api.get("/ru/api/v2/course-category-list/")
        .then(({data}) => {
            setCategory(data)
            console.log(data, "category")
        })

    const [category, setCategory] = useState([])
    console.log(course)
    return (
        <HomeLayout>
            <section id="courses">
                <div className="container container-2sm md:container mx-auto">
                    <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">
                        Баардык
                        тренингдер
                    </h1>
                    <div className="flex ">
                        <button className={oneCategory === "" ? "btn3-click" : "btn3"} onClick={() => setOneCategory('')}>{formatMessage({"id": "all"})}</button>
                        {
                            category.map(el => (
                                <div className="ml-2">
                                    <button className={oneCategory === el.id ? "btn3-click" :  "btn3"} onClick={() => setOneCategory(el.id)}>{el.title}</button>
                                </div>
                            ))
                        }

                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 m-auto gap-6 mb-24">
                        {course?.allCoursesLoaded ? (
                            course?.allCourses?.map((elem) => (
                                <CourseItem el={elem} key={elem.id}/>
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