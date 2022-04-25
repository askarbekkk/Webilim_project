
import {useIntl} from "react-intl";
import {Data} from "./Data";
import React, {useEffect, useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import Image from "next/image"
import Card from "../../../assets/img/Group.svg"
import {gsap} from 'gsap';
import {useSelector} from "react-redux";




export default function  ProgramTravel() {
    const {formatMessage} = useIntl()
    const [state, setState] = useState()

    const Program = index => {
        if (state === index) {
            return setState(null)
        }
        return setState(index)
    }
    const Modal = (index) => {
        return index + 1
    }
    useEffect(()=>{
        gsap.from(".programTravel",{
        })
    })
    const data = useSelector(state => state.travelOne.data)


    return (
        <section>
            <div className="container">
                <div className="pt-14">
                    <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold ">{formatMessage({id: "Программа путешествие"})}</h1>
                    {
                        data?.days?.map((item, index) => {
                            return (
                                    <div className=" flex flex-col sm:flex-row  w-[100%] sm:w-[88%] programCard ">
                                        <div className="programCard_modal my-3 sm:my-0">
                                            <h1 className="text-white">День<span
                                                className="ml-1">{Modal(index)}</span></h1>
                                        </div>
                                        <div className="loveMe">
                                            <div className="programCard_block" onClick={() => Program(index)}>
                                                <h1 className="flex ">
                                                    <div className="  -mt-3">

                                                        <span className="bg-[#9099A3] mx-5 text-white text-[13px] font-light px-1  rounded-[5px]">{item?.start_date}</span>
                                                        <span className=" text-white text-[13px] font-light px-1  rounded-[5px]">{item?.title_ru}</span>
                                                    </div>
                                                    <span
                                                        className="programCard_block_line">{index === state ? <IoIosArrowUp/> :
                                                        <IoIosArrowDown/>}</span></h1>
                                            </div>
                                            {state === index ? (
                                                <div className="programCard_block_desc ">
                                                    <p className="">{item?.body_ru}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                            )
                        })
                    }
                    <div className="flex flex-col sm:flex-row mb-4 ">
                        <div>
                            <button className="btn ">Зарегистрироваться
                            </button>
                        </div>

                    </div>
                    <div className="pt-14 grid md:grid-cols-2 gap-4  lg:grid-cols-3 gap-4 mt-8 programTravel">
                        <div className=" flex-initial  ProgramCard">
                            <div className="relative p-1 w-[46px] ml-3 mt-3"><Image src={Card}/></div>
                            <h1 className="mt-10">Количество мест ограничено</h1>
                            <p>Чтобы каждый участник получил
                                максимум от путешествия</p>
                        </div>
                        <div className=" flex-initial  ProgramCard">
                            <div className="relative p-1 w-[46px] ml-3 mt-3"><Image src={Card}/></div>
                            <h1 className="mt-10">Личная работа с
                                Маргуланом</h1>
                            <p>Разборы, советы, обсуждение один
                                на один или в узком кругу</p>
                        </div>
                        <div className="   ProgramCard">
                            <div className="relative p-1 w-[46px] ml-3 mt-3"><Image src={Card}/></div>
                            <h1 className="mt-10">100% эксклюзив</h1>
                            <p>Здесь и так все понятно :)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}