import React, { useEffect, useState } from "react";
import Avatar from "../../../assets/img/avatar.png";
import HomeLayout from "../../../components/HomeLayout";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setPlayData } from "../../../redux/reducers/palylistOne";
import { useIntl } from "react-intl";
import { ContentList } from "../../../components/Course/ContentList";
import { getData } from "../../../components/axiosAPI/api_axios";
import api from "../../../components/axiosAPI/api";
import jsCookie from "js-cookie";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const playListId = () => {
    const [dataOne, setDataOne] = useState([]);
    const [dataMore, setDataMore] = useState("12345678");
    const [mentor, setMentor] = useState([]);
    const { locale } = useIntl();

    const router = useRouter();

    const fetchChek = (el) => {
        if (el) {
            setDataOne(el);
        }
    };
    const dataChek = useSelector((state) => state.chek.chek);

    const dispatch = useDispatch();
    const fetchCourse = async () => {
        const { id, module } = router.query;
        const data = await getData(`/ru/api/v2/lessons/contents/${id}/${module}`);
        return dispatch(setPlayData(data));
    };

    useEffect(() => {
        if (router.isReady === false) {
            return;
        }
        fetchCourse();
    }, [router.isReady]);

    const data = useSelector((state) => state.playlistOne.data);

    useEffect(() => {
        if (data[0]) {
            setDataOne(data[0]);
        }
    }, [data]);

    const dataLes = useSelector((state) => state.course.courseLis);

    const clickMe = (item) => {
        api.post(`ru/api/v2/course-progress/${dataLes.course}/add/`, {
            "id_of_module": `${item.id}`
        }, {
            headers: {
                'Authorization': `Bearer ${jsCookie.get("access")}`
            }
        }).then(() => {
            toast("sucsess")
        })
            .catch((e) => {
                console.log(e)
                toast.error("Этот урок уже просмторено")
            })
    }

    return (
        <HomeLayout>
            <ToastContainer/>
            <section id="playlist" className="pt-[120px] pb-[120px]">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div>
                            <></>
                            <h1 className="text-white text-[36px] font-bold">
                                {dataOne?.title}
                            </h1>
                            <p className="text-white">{dataOne?.subtitle}</p>
                        </div>
                        <div>
                            <img src={dataOne?.image} alt="" />
                            <div>
                                <h4 className="text-white">{mentor.full_name}</h4>
                                <p
                                    className="text-[#9099A3]"
                                    dangerouslySetInnerHTML={{
                                        __html: mentor[`short_bio_${locale}`],
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start  items-center">
                        <ContentList data={dataOne} />

                        <ul>
                            <li className="programCard_block_desc flex flex-col justify-start  overflow-y-scroll h-[417px] w-[424px]">
                                {data.map((item, i) => {
                                    return (
                                        <div
                                            key={item.item + "" + i}
                                            className="flex items-center "
                                        >
                                            <h2
                                                onClick={() => fetchChek(item)}
                                                className={
                                                    dataOne.title === item.title
                                                        ? "text-white ml-[15px] p-5 activeOnClick w-[100%]"
                                                        : "text-white activeOnClick1  p-5 ml-[15px] w-[100%]"
                                                }
                                            >
                                                {item?.title}

                                                {
                                                    dataLes?.data?.id_of_module?.includes(String(item.id)) ? <span className="text-red-900 mx-3">ok</span>:
                                                        <button onClick={() => clickMe(item)}
                                                                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">•</button>
                                                }
                                            </h2>
                                        </div>
                                    );
                                })}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
};

export default playListId;