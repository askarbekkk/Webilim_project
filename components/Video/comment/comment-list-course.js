import React, { useState } from "react";
import Image from "next/image";
import Img from "../../../assets/img/To_be_youself 1.png";
import { useSelector, useDispatch } from "react-redux";
import { setCourse } from "../../../redux/reducers/course";
import api from "../../axiosAPI/api";
import { useRouter } from "next/router";
import { getData, postData } from "../../axiosAPI/api_axios";
function CommentList({ comment }) {
  const dispatch = useDispatch();
  console.log(comment)
  const {
    text,
    author: { full_name , avatar},
    id: commentId,
    replies,
  } = comment;
  const access = useSelector((state) => state.main.access_token);
  const refresh = useSelector((state) => state.main.refresh_token);
  const userID = useSelector((state) => state.main.user_id);

  const router = useRouter();

  const isAuth = access && refresh && userID;
  const [showReplyComment, setReplyComment] = useState(false);
  const [replyCommentText, setReplyCommentText] = useState("");

  const postComment = async (commentId) => {
    const data = {
      comment: commentId,
      author: userID,
      text: replyCommentText,
    };
    await postData("ru/api/v2/add-course-reply-comment/", data);

    const newData = await getData(`ru/api/v2/course-detail/${router.query.id}`);
    if (newData?.free) {
      dispatch(setCourse(newData.free));
    } else {
      dispatch(setCourse(newData.data));
    }
    setReplyCommentText("");
  };
  console.log(replies , "avatar")
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center my-6">
        <div className="relative w-[80px] h-[80px] overflow-hidden mx-6">
          {avatar ? (
            <img src={avatar} layout="fill" />
          ) : (
            <img src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png" layout="fill" />
          )}
        </div>
        <div className="md:w-[80%] w-[100%]">
          <h1 className="text-white text-[20px] font-bold">{full_name}</h1>
          <p className="text-[#9099A3] my-1 text-[14px] font-light">{text}</p>
          <div className="flex">
            <button className="text-[#9099A3] bg-transparent text-[14px]  font-light border-0">
              Нравится
            </button>
            <button
              onClick={() => setReplyComment(!showReplyComment)}
              className=" bg-transparent border-0 text-[#9099A3] text-[14px] font-light mx-4"
            >
              Ответить
            </button>
          </div>
        </div>
      </div>
      {showReplyComment &&
        (isAuth ? (
          <div className="flex ml-[13%] gap-2 reply-container">
            <input
              value={replyCommentText}
              onChange={(e) => setReplyCommentText(e.target.value)}
              placeholder="ответить на коментарий..."
            />
            <button onClick={() => postComment(commentId)}>отправить</button>
          </div>
        ) : (
          <h2 className="ml-[13%] text-[#B70825] ">вы не авторизованы</h2>
        ))}
      {replies &&
        replies
          .map((i, k) => {
            console.log(i , "i")
            return (
              <div className="flex ml-[10%] flex-col md:flex-row md:items-center my-6">
                <div className="relative w-[40px] h-[40px]  overflow-hidden mx-6">
                  {i?.author ? (
                    <img src={i?.author?.avatar}/>
                  ) : (
                    <img src="https://www.nicepng.com/png/full/136-1366211_group-of-10-guys-login-user-icon-png.png" layout="fill" />
                  )}
                </div>
                <div className="md:w-[80%] w-[100%]">
                  <h1 className="text-white text-[20px] font-bold">
                    {i.author.full_name}{" "}
                    <span className="text-[12px] ml-[20px] text-[#9099A3]">
                      {i.created.slice(0, 10)}
                    </span>
                  </h1>
                  <p className="text-[#9099A3] my-1 text-[14px] font-light">
                    {i.text}
                  </p>
                </div>
              </div>
            );
          })
          .reverse()}
    </div>
  );
}

export default CommentList;
