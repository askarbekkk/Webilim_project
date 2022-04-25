import HomeLayout from "../../components/HomeLayout";
import {useDispatch, useSelector} from "react-redux";
import api from "../../components/axiosAPI/api";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {setArticle, setArticleList} from "../../redux/reducers/article";
import ArticleHero from "../../components/Article/articleHero";
import Faq from "../../components/Home/FAQ/FAQ";


export default function Article() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [faqData , setFaqData] = useState({})
    const fetchArticle = async (id) => {
        dispatch(setArticleList(null))
        const {data} = await api.get(`ru/api/v1/article-detail/${id}`)
        dispatch(setArticle(data))
    }

    useEffect(() => {
        if (router.isReady === false) {
            return;
        }
        fetchArticle(router.query.id);
        api.get("/ru/api/v2/article-faq-list")
            .then(({data}) => setFaqData(data))
    }, [router.isReady, router.query]);

    return (
        <HomeLayout>
            <ArticleHero/>
            <Faq children={faqData && faqData} />
        </HomeLayout>
    )
}