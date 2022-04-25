import CommentList from "../Video/comment/comment-list-course";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import api from "../axiosAPI/api";
import { useRouter } from "next/router";
import Img24 from "../../assets/img/profile-circle.png";
import Image from "next/image";
import Link from "next/link";
import { setCourse } from "../../redux/reducers/course";
import {useIntl} from "react-intl";

export default function CourseComments() {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

  const course = useSelector((state) => state.course.course);
  const access = useSelector((state) => state.main.access_token);
  const refresh = useSelector((state) => state.main.refresh_token);
  const userID = useSelector((state) => state.main.user_id);

  const isAuth = access && refresh && userID;

  const renderComments = (article_comments) => {
    const comments = article_comments;

    return comments
      .map((comment) => {
        const { id } = comment;
        return <CommentList key={id} comment={comment} />;
      })
      .reverse();
  };
  const router = useRouter();
  const postComment = () => {
    const data = {
      course: router.query.id,
      author: userID,
      text: comment,
    };
    api
      .post("ru/api/v2/add-course-comment/", data)
      .then((data) => {
        setComment("");
        api.get(`/ru/api/v2/course-detail/${router.query.id}`).then((data) => {
          dispatch(setCourse(data.data?.free));
        });
      })
      .catch((error) => {
        console.log(error);
      });


  };
  const {formatMessage} = useIntl()
    const userComents = useSelector((state) => state.course);
    console.log(userComents)
  return (
    <div className="course-comment-container">
      <h1 className="invTitle text-[36px] mt-20">{formatMessage({id: "comments"})}</h1>
      {!isAuth ? (
        <div className="my-4 Investment_block flex flex-col md:flex-row md:items-center md:p-10 p-3 rounded-[15px] ">
          <div className="relative w-[60px] h-[60px]">
            <Image src={Img24} layout="fill" />
          </div>
          <div className="md:ml-8 ">
            <h1 className="font-bold text-white text-[24px] my-2">
                {formatMessage({id:'noAuth'})}
            </h1>
            <p className="text-[17px] flex flex-row text-[#9099A3] font-light">
                {formatMessage({id:'writeComment'})}
              <span>
                <Link href="/login">
                  <a className="text-[17px] border-b-2 border-[white] text-[white] font-light  md:mx-2 ">
                    {formatMessage({id:"auth"})}
                  </a>
                </Link>
              </span>
                {formatMessage({id:'if'})}
              <span>
                <Link href="#">
                  <a className="text-[17px] border-b-2 border-[white] text-[white] font-light  md:mx-2">
                   {formatMessage({id:"register"})}
                  </a>
                </Link>
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="container-comment">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={formatMessage({id:"yourComment"})}
          />
          <button className="btn" onClick={postComment}>
              {formatMessage({id:"send"})}
          </button>
        </div>
      )}
      <div className="py-4 my-4 relative w-[100%]">
        {course && course?.course_comments ? (
          <>{renderComments(course.course_comments)}</>
        ) : (
          <h1>Жүтөлүүдө</h1>
        )}
      </div>
    </div>
  );
}
