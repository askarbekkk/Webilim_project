import Link from "next/link";


export default function TripsCard({el}) {
    return (

        <div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className=" w-[95%] relative my-2.5  mx-auto ">
                            <div
                                className=" relative w-[100%] h-[100%] -mt-2 my-1 rounded-[15px] overflow-hidden bg-white">
                                <div className=" w-[100%] ">
                                    <img src={el.image}/>
                                    <p className="SoldOut ">{el.sold_out ? "soldOud" : "new"}</p>
                                    <p className="New">{el.new ? "new" : "soldOud"}</p>
                                </div>
                                <div className="p-3">
                                    <div className="flex">
                                        <h1 className="text-[#9099A3] mx-4 font-light">{el.title_ky}</h1>
                                        <p className='text-[#9099A3] mx-4 font-light'>{el.duration} дня</p>
                                    </div>
                                    <div>
                                        <h1 className="text-[#2C3E50] my-2  text-[18px] leading-[30px]">
                                            {el.subtitle_ru}
                                        </h1>
                                        <p className="text-[#2C3E50] my-2 font-light text-[13px]">
                                            {el.description_ru}
                                        </p>
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <Link href={`/travel/${el.id}`}>
                                            <a
                                                className="btn">Подробнее <span
                                                className=" ml-6">➡</span></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>

        </div>


    )
}