import SliderTravel from "./SliderTravel";
import {useEffect} from "react";
import {gsap} from "gsap";


export default function CoursesTravel() {
    // useEffect(() => {
    //     gsap.from(".Top",{
    //         y: 400,
    //         opacity:0,
    //         scale:0.5,
    //         duration :1.5,
    //         scrollTrigger:{
    //             trigger : ".Top" ,
    //             start :"top 95%",
    //             end : "bottom 55%" ,
    //             markers:true,
    //             toggleActions: "restart play pause none",
    //             scrub:1,
    //         }
    //     })
    // })
    return (
        <div className="container mx-auto Top">
            <SliderTravel/>
        </div>
    )
}
