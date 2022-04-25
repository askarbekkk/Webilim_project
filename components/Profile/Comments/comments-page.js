import React, {useEffect, useState} from "react";
import api from "../../axiosAPI/api";
import Cookies from "js-cookie";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const CommentsPage = () => {
        const [comments, setComments] = useState([])
        useEffect(() => {
            api.get(`ru/api/v2/user-profile-comments/${Cookies.get("user_id")}`)
                .then(({data}) => {
                    setComments(data?.user_comments)
                })
        }, [comments])

        const deleteComments = (id) => {
            api.delete(`/ru/api/v2/user-profile-comments/update/${id}`)
                .then(() => {
                    toast.success("Успешно")
                })
                .catch(() => {
                    toast.error("error")
                })
        }

        return (
            <div className="w-[100%] px-6 py-10 mb-5 bg-[#282B2E] rounded-[15px]">
                <ToastContainer/>
                <div className="flex  items-center justify-between">
                    <h1 className="text-white text-[24px] font-bold">КОММЕНТАРИИ</h1>
                </div>
                {
                    comments?.map(el => (
                        <div className="w=[100%] p-5 bg=[#282B2E]">
                            <h4>{el.text}</h4>
                            <h4>{el.created}</h4>
                            <button className="btn2 w=[20px]" onClick={() => deleteComments(el.id)}>Удалить</button>
                        </div>
                    ))
                }

                {/*<div className="relative flex justify-end">*/}
                {/*    <button className="btn2 flex items-center">Удалить <i*/}
                {/*        className="fas fa-trash-alt text-[#9099A3] ml-4"/></button>*/}
                {/*</div>*/}
            </div>

        )
    }


export default CommentsPage;


