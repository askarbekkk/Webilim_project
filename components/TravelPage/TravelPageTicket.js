import React, {useEffect} from 'react';
// import {SplitChars, SplitWords, Timeline, Tween} from 'react-gsap';
// import {gsap} from 'gsap';
// import {Data} from "./TravelPageTicketData/TravelPageTicketData";
// import Image from "next/image";
// import Person from "../../assets/img/img_2.png"
import {gsap} from 'gsap';
// import {Data} from "./TravelPageTicketData/TravelPageTicketData";
// import Image from "next/image";
// import Person from "../../assets/img/img_2.png"
// import {SplitChars, Tween} from "react-gsap";
import {useSelector} from "react-redux";
import {useIntl} from "react-intl";


export default function TravelPageTicket() {

    const data = useSelector(state => state.travelOne.data)
    const {locale} = useIntl()
    //
    let arr = []


    for (let i = 1; i <= data?.seats; i++) {
        arr.push({card: i && true})
    }

    console.log(arr)


    useEffect(() => {
        gsap.from(".TravelPageTicketBox", {})
    })
    useEffect(() => {
        gsap.from(".TravelPageTicketBlock2", {})
    })
    useEffect(() => {
        gsap.from(".TravelPageTicketcard", {
            opacity: 0,
            stagger: 0.05,
            scrollTrigger: {

                trigger: ".TravelPageTicketcard",
                start: "top 60%",
                end: "bottom 10%",
                toggleActions: "restart play pause none"

            }
        })
    })
    console.log(data, "data")
    return (
        <section id="TravelPageTicket w-[100%] h-auto">

            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 my-10 ">
                    <div className="p-2">
                        <div className="grid grid-cols-12 w-[96%] TravelPageTicketBlock p-4 rounded-[15px]">
                            {
                                arr.map((item) => {
                                    if (item.card === true) {
                                        return (
                                            <>
                                                <div
                                                    className="TravelPageTicketcard w-[90%] h-16 bg-[#F99300] ml- mt-1 rounded-[3px]">
                                                    {item.card}
                                                </div>
                                            </>
                                        )
                                    } else {
                                        return (
                                            <>
                                                <div
                                                    className="TravelPageTicketcard w-[90%] h-16 bg-[#9C9C9C] ml- mt-1 rounded-[3px]">
                                                    {item.card}
                                                </div>
                                            </>
                                        )
                                    }
                                })
                            }
                            <div>
                                <p className="text-white text-[15px] font-bold  w-[120px] p-2">Осталось <br/>
                                    {data?.seats} мест из {arr.length}</p>
                            </div>
                        </div>
                        <div className="TravelPageTicketBlock2">
                            <h1 className="text-[white] text-[36px] font-bold my-4">12 500,00 $</h1>
                            <button className="btn">Зарегистрироваться</button>
                            <p className="text-white font-light text-[15px] mt-4">
                                Килиманджаро - уникальный и высочайший
                                стратовулкан Африки,
                                который находится на северо-востоке Танзании и является самой
                                высочайшей точкой континента. Целых 5895 метров над уровнем
                                моря. Круглый год Килиманджаро возвышается над плоскогорьем
                                Масаи. Удивительно, но Килиманджаро находится гораздо дальше
                                от центра Земли, чем Эверест".</p>
                        </div>
                    </div>
                    <div className="p-10 rounded-[15px] bg-white TravelPageTicketBlock3 mb-4 overflow-hidden">
                        <div className="">
                            <p className="text-[#9099A3] text-[14px] font-light">
                                КУРАТОР ПУТЕШЕСТВИЯ
                            </p>
                            <h1 className="text-[36px] text-[#2C3E50] font-bold leading-[54px]">
                                <p>{data?.mentor?.full_name}</p>
                            </h1>
                            <div className=" relative TravelPageTicketBox flex">
                                <div className="">
                                    <img src={data?.mentor?.image} alt={data?.mentor?.full_name}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}