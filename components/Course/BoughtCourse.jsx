import Link from "next/link";
import {Line} from "rc-progress";
import React, {useEffect} from "react";
import {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {useIntl} from "react-intl";
import {useSelector} from "react-redux";
import HomeLayout from "../HomeLayout";
import Spinner from "../Spinner";

export const BoughtCourse = () => {
    const {formatMessage} = useIntl();
    const data = useSelector((state) => state.course.course);
    const [state, setState] = useState();
    const Program = (index) => {
        if (state === index) {
            return setState(null);
        }
        return setState(index);
    };
    const Modal = (index) => {
        return index + 1;
    };


    const [val1, setVal1] = useState(0);
    const dataLes = useSelector((state) => state.course.courseLis);
    let results = data.modules.map(el => el.lessons.length)
    let sum = 0;
    for( let i = 0; i < results.length; i++){
        sum += results[i]
        console.log(results)
    }
    useEffect(() => {
        let vek1 = dataLes?.data.id_of_module?.length
        let result = (100 - (((sum - vek1) * 100) / sum)).toFixed(1)
        setVal1(result)
    }, [val1])

    return (
        <HomeLayout>
            <div className="container mx-auto pt-[70px]">
                {data.modules.length === 0 ? (
                    <Spinner/>
                ) : (
                    <div>
                        <div className="flex justify-between items-center">
                            <div className="mt-8 lg:w-[70%] md:w-[97%]">
                                <h1 className="title_hero text-white leading-tight mb-3   md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                                    {data.title_ky}
                                </h1>
                                <p className="text-white font-light  leading-[24px]">
                                    {data.subtitle_ky}
                                </p>
                            </div>
                            <div>
                                <h1 className="text-white py-5"> Прогресс по курсу</h1>
                                <Line
                                    percent={val1}
                                    strokeWidth="1"
                                    strokeColor="red"
                                    style={{width: "309px"}}
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    <div>
                                        <div className="text-[#9099A3]">
                      <span className="font-bold text-white text-[36px]">
                        {dataLes?.data?.id_of_module?.length}
                      </span>
                                            /<span>{sum}</span>
                                        </div>
                                        <h1 className="text-white">
                                            Пройдено <br/>
                                            уроков
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="pt-[100px] pb-[50px]">
                            <h1 className="font-bold text-white text-[36px]">
                                Курстун программасы
                            </h1>
                            {data.modules.map((item, index) => {
                                return (
                                    <div className="flex flex-col md:flex-row  md:w-[80%] programCard">
                                        <div className="programCard_modal">
                                            <h1 className="text-white">
                                                Модуль<span className="ml-1">{Modal(index)}</span>
                                            </h1>
                                        </div>
                                        <div>
                                            <div
                                                className="programCard_block"
                                                onClick={() => Program(index)}
                                            >
                                                <h1 className="flex flex-col">
                                                    {item.title}
                                                    {/*<p className="text-[12px]">Пройдено материалов: 5/11</p>*/}
                                                    <span className="programCard_block_line">
                            {index === state ? (
                                <IoIosArrowUp/>
                            ) : (
                                <IoIosArrowDown/>
                            )}
                          </span>
                                                </h1>
                                            </div>
                                            {state === index ? (
                                                <div className="programCard_block_desc">
                                                    {item.lessons.map((el) => {
                                                        return (
                                                            <Link
                                                                href={`/course/playlist/${data.id}?module=${el.module}`}
                                                            >
                                                                <h3 className="text-white mt-5">
                                                                    • {el.title}
                                                                </h3>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </HomeLayout>
    );
};
