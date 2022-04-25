import Image from "next/image"
import TravelPageHeroImage1 from "../../assets/img/формат.png"
import TravelPageHeroImage2 from "../../assets/img/people.png"
import TravelPageHeroImage3 from "../../assets/img/календарь (1).png"
import TravelPageHeroImage4 from "../../assets/img/время.png"
// import {SplitChars, SplitWords, Timeline, Tween} from 'react-gsap';
// import {gsap} from 'gsap';
import {useSelector} from "react-redux";
// import { formatDistance, subDays } from 'date-fns'


export default function TravelPageHero() {
    // useEffect(() => {
    //     const tl = gsap.timeline()
    //     tl.from(".TravelPageHeroBlock",{
    //         duration : 2,
    //         opacity : 0 ,
    //     })
    //         .from(".TravelPageHeroCard",{
    //             height: 1,
    //             duration : 1,
    //             borderBottom : "2px solid black"
    //         })
    // })
    const data = useSelector(state => state.travelOne.data)
    console.log(data)

    return (
        <section id="TravelPageHero" style={{background: `url(${data?.image})` , minHeight: "100vh"}}>
            {

                data?.length === 0
                ?
                    <h1>loading...</h1>
                    :

                    <div className="container">
                        <div >
                            <div className="flex justify-center pt-[20%] w-[100%] text-center">
                                <h1 className="text-[20px] lg:text-[36px] md:text-[30px] lg:w-[58%] leading-[44px] text-white font-extrabold ">
                                    {data?.subtitle_ru}
                                </h1>
                            </div>
                            <div className="grid grid-cols-1  md:grid-cols-2    lg:grid-cols-4  mt-16 text-center   w-[100%] p-10 bg-white z-10   rounded-[15px]">
                                <div className=" flex flex-col items-center p-2">
                                    <div className="w-[30px] relative h-[32px]"><Image src={TravelPageHeroImage1} layout="fill"/>
                                    </div>
                                    <h1 className="text-[20px] text-[#2C3E50] font-bold mt-4">Формат</h1>

                                    <p className="text-[17px] w-[90%] text-center text-[#2C3E50] font-extralight mt-4">{data?.category?.title_ru}</p>


                                </div>
                                <div className=" flex flex-col items-center p-2">
                                    <div className="w-[30px] relative h-[32px]"><Image src={TravelPageHeroImage2} layout="fill"/>
                                    </div>
                                    <h1 className="text-[20px] text-[#2C3E50] font-bold mt-4">Количество мест</h1>

                                    <p className="text-[17px] w-[90%] text-center text-[#2C3E50] font-extralight mt-4">Всего {data?.seats}
                                        мест</p>
                                </div>
                                <div className=" flex flex-col items-center p-2">
                                    <div className="w-[30px] relative h-[32px]"><Image src={TravelPageHeroImage3} layout="fill"/>
                                    </div>
                                    <h1 className="text-[20px] text-[#2C3E50] font-bold mt-4">Старт</h1>
                                    <p className="text-[17px] w-[90%] text-center text-[#2C3E50] font-extralight mt-4">{data?.start_date}</p>
                                </div>
                                <div className=" flex flex-col items-center p-2">
                                    <div className="w-[30px] relative h-[32px]"><Image src={TravelPageHeroImage4} layout="fill"/>
                                    </div>
                                    <h1 className="text-[20px] text-[#2C3E50] font-bold mt-4">Длительность</h1>
                                    <p className="text-[17px] w-[90%] text-center text-[#2C3E50] font-extralight mt-4">{data?.duration } дней</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }

</section>
)
}