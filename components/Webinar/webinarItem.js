import Link from 'next/link'
import {useIntl} from "react-intl";

export default function WebinarItem({el}) {
    const locale = useIntl()
    return (
        <Link href={`/webinar-detail/${el.id}`} key={el.id}>

            <div className="  bg-white rounded-2xl pl-3 ">
                <div className="grid md:grid-cols-2 course__item ">
                    <div className="flex items-between text-left flex-col pt-3">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <i className="fas fa-book-open"/>
                                <h6 className="text-[#9099A3] ml-2">Вебинар</h6>
                            </div>
                            <h6 className="text-[#9099A3]">{el.start_date}</h6>
                            <h6 className="text-[#9099A3]">{el.new}</h6>
                        </div>
                        <h2 className="font-bold h-[66px] sm:mt-6 mt-3 leading-6   sm:mb-4 mb-3 p-2 md:text-[18px] text-[20px]">{el[`title_${locale}`].substr(0, 120)}</h2>
                        <div className="w-[100%] h-[55px] bg-red ">
                            <p className="md:text-[15px]">{el[`subtitle_${locale}`].substr(0, 60)}</p>
                        </div>
                        <div className="course-sdl-1-btn sm:mt-10 relative">
                            <Link href={`/webinar/${el.id}`}>
                                <a className="course-btn w-[60%] flex items-center">
                                    Кененирээк
                                    <i className="fas fa-arrow-right ml-10"/>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="course-sld-2 rounded-tr-xl rounded-br-xl ">
                        <img src={el.image} alt="ментор" className="course-img "/>
                    </div>
                </div>
            </div>

        </Link>
    )
}