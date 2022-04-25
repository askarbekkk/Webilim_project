import Link from "next/link";
import {setBatch} from "../../redux/reducers/batch";
import api from "../axiosAPI/api";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPacket} from "../../redux/reducers/packege";

export default function BatchItem({el}) {
    const dispatch = useDispatch()

    const fetchPackets = async (item) => {
        // JSON.stringify(localStorage.setItem(`packet` , item))
        dispatch(setPacket(item))
    }




    return (
        <div>
            (<div id={el.id} className="package  w-[100%] h-[720px] px-2 py-0.5 sm:py-1  sm:px-3   lg:py-2  lg:px-4  bg-white rounded-[15px]">
                <h1 className="text-[#2C3E50] mt-4 font-bold">{el.type}</h1>
                <div className="flex items-end mt-2">
                    <h2 className="text-[#2C3E50] text-[36px]  leading-[54px] font-bold">{el.price}</h2>
                    <p className="text-[#9099A3] newPrice ">{el.newPrice}</p>
                </div>
                <h5 className="text-[12px] text-white rounded-[5px]  bg-[#9099A3] w-[80px] h-[20px] flex justify-center items-center">{el.time}</h5>
                <div className="h-[480px] overflow-y-scroll">
                    <p className="text-[#2C3E50] text-[16px] font-light mt-6">{el.description}</p>
                </div>
                <Link href={`/forms/${el.id}`}>
                    <button
                        onClick={() => fetchPackets(el)}
                        className="flex justify-center align-center mx-auto px-8 py-3 md:text-[18px]   bg-[#2C3E50] rounded-[15px] text-white ClubPackage_btn ">
                        Оформить подписку
                    </button>
                </Link>
            </div>
            )
        </div>
    )
}