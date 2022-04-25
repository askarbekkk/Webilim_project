import Hero from "../components/Home/hero/Hero";
import Form from "../components/Home/FormReq/MainForm";
import Webinar from "../components/Webinar/webinar";
import CourseList from "../components/Course/courseList";
import MasterClass from "../components/Master-Class/MasterClass";
import ArticleList from "../components/Article/articleList";
import Faq from "../components/Home/FAQ/FAQ";
import Subscribe from "../components/Home/Subscribe/subscribe";
import dynamic from "next/dynamic";
import Head from "next/head";
const HomeLayout = dynamic(() =>  import("../components/HomeLayout") , {ssr: false})

export default function Home() {

  return (
      <>
          <Head>
              <title>Webilim 24</title>
              <link rel="icon" href="/web.png/"/>
              <meta name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
              <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
              <meta
                  name="description"
                  content="
                         ИШКЕРДИК АКАДЕМИЯСЫ📍БИЗНЕС
                        Образование
                       🇰🇬КРдеги №1 кыргыз тилдүү тренинг борбору!
                       📍Натыйжалар @otzivi_iakademy
                       📍30 миңден ашуун бүтүрүүчү🥳
                       📍Онлайн ж/а оффлайн
⠀
                       Турусбеков 109/2 (Maximum)
                       "
              />


          </Head>
          <HomeLayout>
              <Hero/>
              <CourseList/>
              <ArticleList/>
              <Webinar/>
              <MasterClass/>
              <Subscribe/>
              <Form/>
              <Faq/>
          </HomeLayout>
      </>


  )
}
