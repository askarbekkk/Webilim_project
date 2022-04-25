import Image from "next/image"
import Arrow from "../../assets/img/Arrow 2 (1).png"
import {useEffect} from "react";
import {gsap} from "gsap";

export default function ConcaptTravel() {

    useEffect(() => {
        gsap.from(".rigth2", {})
    })
    useEffect(() => {
        gsap.from(".left2", {})
    })
    return (
        <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 mt-12 mb-4">
                <div>
                    <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">КОНЦЕПЦИЯ
                        ПУТЕШЕСТВИЯ
                    </h1>
                </div>
                <div className="p-4  col-span-2 md:w-[85%] left2">
                    <div className="flex  flex-col md:flex-row  items-center my-6">
                        <span className="mx-1 md:mx-12">️
                        <Image src={Arrow}/>
                    </span>
                        <p className="font-light text-white leading-[24px]  ">
                            Анализировать и устранять типичные ошибки
                            руководителей в
                            управлении командой
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center my-6">
                        <span className="mx-1 md:mx-12">
                            ️<Image src={Arrow}/>
                        </span>
                        <p className="font-light text-white leading-[24px]  ">
                            Внедрять специальные приемы работы с
                            людьми и
                            командой
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center my-6">
                        <span className="mx-1 md:mx-12">
                            ️<Image src={Arrow}/>
                        </span>
                        <p className="font-light text-white leading-[24px]  ">
                            Создавать команду и эффективно ею управлять
                            в любом проекте
                        </p>
                    </div>
                    <div className="flex  flex-col md:flex-row items-center my-6">
                        <span
                            className="mx-1 md:mx-12">️
                            <Image src={Arrow}/>
                        </span>
                        <p className="font-light text-white leading-[24px]  ">
                            Правильно прогнозировать и масштабировать
                            результат работы команды
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row  items-center my-6">
                        <span className=" mx-1 md:mx-12">
                            ️<Image src={Arrow}/>
                        </span>
                        <p className="font-light text-white leading-[24px]  ">
                            Правильно подходить к вопросам увольнения и
                            продвижения по карьерной лестнице
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

