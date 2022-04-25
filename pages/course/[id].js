import HomeLayout from "../../components/HomeLayout";
import CourseHero from "../../components/Course/courseHero/course-hero";
import CourseLearn from "../../components/Course/courseLearn";
import MentorCourse from "../../components/Course/mentor-course";
import Faq from "../../components/Home/FAQ/FAQ";
import { useDispatch, useSelector } from "react-redux";
import {setCourse, setCoursesLesions} from "../../redux/reducers/course";
import { useEffect } from "react";
import { useRouter } from "next/router";
import CourseProgram from "../../components/Course/courseProgram/courseProgram";
import TeamAbout from "../../components/Course/courseAbout";
import MainForm from "../../components/Home/FormReq/MainForm";
import CourseComments from "../../components/Course/CourseComments";
import { getData } from "../../components/axiosAPI/api_axios";
import { useState } from "react";
import { BoughtCourse } from "../../components/Course/BoughtCourse";
import Spinner from "../../components/Spinner";
import api from "../../components/axiosAPI/api";

export default function Course() {

  const [isbought, setIsBought] = useState(false);
  const data = useSelector((state) => state.course.course);
  const dispatch = useDispatch();
  const router = useRouter();
    const [faqData , setFaqData] = useState({})

    const fetchCourse = async (id) => {
    dispatch(setCourse(null));
    const data = await getData(`/ru/api/v2/course-detail/${id}/`);
    const dataLess = await getData(`/ru/api/v2/course-progress/${id}/`);
        dispatch(setCoursesLesions(dataLess))

      console.log(data , "course")
    if (data?.bought) {
      setIsBought(true);
      dispatch(setCourse(data?.bought));
    } else {
      setIsBought(false);
      dispatch(setCourse(data?.free));
    }
  };
  const dataLes = useSelector((state) => state.course.courseLis);


  useEffect(() => {
    if (router.isReady === false) {
      return;
    }
    fetchCourse(router.query.id);

    api.get("/ru/api/v2/course-faq-list")
        .then(({data}) => setFaqData(data))


  }, [router.isReady, router.query, dispatch ]);

  if (!data) {
    return <Spinner/>;
  }

  if (isbought) {
    return <BoughtCourse />;
  }

  const faqCourse = "/ru/api/v2/course-faq-list"



  return (
    <HomeLayout>
      <CourseHero />
      <TeamAbout />
      <CourseProgram />
      <CourseLearn />
      <MentorCourse />
      <CourseComments />
      <MainForm />
      <Faq children={faqData && faqData} />
    </HomeLayout>
  );
}
