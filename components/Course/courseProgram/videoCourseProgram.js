import React, {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
// import {useSelector} from "react-redux";
import VideoLesson from "./videoLesson";


export default function VideoCourseProgram() {
    const [state, setState] = useState()
    // const course = useSelector(state => state.course.course);

    const Program = index => {
        if (state === index) {
            return setState(null)
        }
        return setState(index)
    }


    return (
        <section id="program ">
            <div className="container">
                <div className="pt-14">
                    <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                        Курстун программасы
                    </h1>
                    {
                        Data.map((el, i) =>
                            (
                                <div className="flex md:w-[80%] flex-col md:flex-row  programCard" key={el.id}>
                                    <div className="programCard_modal">
                                        <h1 className="text-white">Модуль<span
                                            className="ml-1">{i + 1}</span></h1>
                                    </div>
                                    <div>
                                        <div className="programCard_block" onClick={() => Program(i)}>
                                            {
                                                    <h1 className="flex"> {el.title} <span className="programCard_block_line">
                                                        {i === state ? <IoIosArrowUp/> : <IoIosArrowDown/>
                                                        }
                                                    </span>
                                                    </h1>

                                            }
                                        </div>
                                        {state === i ? (

                                            <ul className="text-white flex justify-around flex-col">
                                                {el.lessons.map((el, idx) => <VideoLesson el={el} idx={idx}
                                                                                          key={idx}/>)}
                                            </ul>

                                        ) : null}
                                    </div>
                                </div>
                            )
                        )}


                </div>
            </div>

        </section>
    )
}
