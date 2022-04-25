import {CoursesTravelData} from './CourseTravelData'
import Slider from "react-slick";
import Image from "next/image";
import {useSelector} from "react-redux";



const settings = {
    infinite: true,
    slidesPerRow: 1,
};


export default function CourseSlider() {

    const data = useSelector(state => state.travelOne.data)


    return (
        <>
            <div className="CourseTitle2 mt-20  ">
                <div className="">
                    <h1 className="font-bold text-white text-[36px]">ОСОБЕННОСТИ И ЭМОЦИИ</h1>
                </div>
                <Slider {...settings} className="grid grid-cols-2 gap-4 CourseSlider">
                    {data?.peculiarities?.map((el) => {
                        return (
                            <div className="bg-white rounded-2xl">
                                <div className="flex items-center h-[220px] overflow-hidden w-[95%]">
                                    <div className="w-[40%] h-[100%] relative ">
                                        <img src={el.image} layout="fill"/>
                                    </div>
                                    <div className="w-[60%] p-4 ">
                                        <h1 className="text-[black] text-[16px] font-bold">{el.title_ru}</h1>
                                        <p className="text-[black] text-[13px] font-light">{el.description_ru}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>


        </>


    )
}
