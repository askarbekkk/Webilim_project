import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import api from "../axiosAPI/api";
import { useEffect } from "react";
import { setArticleList } from "../../redux/reducers/article";
import ArticleItem from "./articleItem";
import Spinner from "../Spinner";

export default function ArticleList({ el }) {
  const dispatch = useDispatch();
  const fetchArticleList = async () => {
    dispatch(setArticleList(null));
    const { data } = await api.get(`ru/api/v1/article-list/`);
    dispatch(setArticleList(data));
  };
  useEffect(() => {
    fetchArticleList();
  }, []);
  const data = useSelector((state) => state.article.articleList);

  return (
    <section id="courses" className="mt-14 lg:mt-0">
      <div className="container  mx-auto">
        <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">
          Статья
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data ? (
            data?.map((elem) => <ArticleItem el={elem} key={elem.id} />)
          ) : (
           <Spinner/>
          )}
        </div>
        <div className="flex justify-center">
          <Link href={"/all-articles"}>
            <a className="btn2">Баардык статьялар</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
