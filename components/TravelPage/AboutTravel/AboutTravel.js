import Image from "next/image";
import Img from "../../../assets/img/Rectangle 2068.png"
import Link from "next/link"
import {useSelector} from "react-redux";
import {useIntl} from "react-intl";

export default function AboutTravel() {
    const data = useSelector(state => state.travelOne.data)
    const {locale} = useIntl()

    return (
        <>
            <div className="container">
                <div className="mt-20 flex ">
                    <h1 className="text-white font-bold text-[36px] leading-[54px] m-4 ">ПРО ПУТЕШЕСТВИЕ</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2  overflow-hidden rounded-[15px]  mb-5">
                    <div className="p-10 aboutTr  bg-white ">
                        <h1 className="  text-[20px] leading-[30px] font-bold">Описание экспедиционного тура:</h1>
                        <p className=" text-[16px] leading-[21px] font-light mt-4" dangerouslySetInnerHTML={{ __html: data?.[`description_${locale}`]}}/>
                        <div className="grid  grid-cols-1  md:grid-cols-2 p-2 mt-8 mb-4 aboutTrBlock">

                            <div className="">
                                <h1 className="text-[#2C3E50 ] font-bold w-[80%]">Формат:</h1>
                                <p className="text-[#2C3E50 ] text-[15px] font-light w-[80%]">{data?.title_ru}</p>
                            </div>
                            <div className="">
                                <h1 className="text-[#2C3E50 ] font-bold w-[80%]">Количество мест:</h1>
                                <p className="text-[#2C3E50 ] text-[15px] font-light w-[80%]">Всего {data?.seats} мест</p>
                            </div>
                            <div className="">
                                <h1 className="text-[#2C3E50 ] font-bold w-[80%]">Старт:</h1>
                                <p className="text-[#2C3E50 ] text-[15px] font-light w-[80%]">{data?.start_date} </p>
                            </div>
                            <div className="">
                                <h1 className="text-[#2C3E50 ] font-bold w-[80%]">Длительность:
                                </h1>
                                <p className="text-[#2C3E50 ] text-[15px] font-light w-[80%]">{data?.duration} дней</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[100%] lg:block hidden ">
                        <Image src={Img} layout="fill"/>
                    </div>
                </div>
            </div>
        </>

    )
}