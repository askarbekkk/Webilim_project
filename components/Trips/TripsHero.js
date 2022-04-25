import { SplitChars ,Tween } from 'react-gsap';




export default function TripsHero() {
    return (
        <section id="tripHero">
            <div className="container mx-auto">
                <div className="relative w-[90%] h-[100vh] pt-20">
                    <h1 className=" text-[24px] lg:text-[36px]  sm:text-[30px]  sm:text-[32px] leading-[44px] font-bold text-white w-[100%] md:w-[73%] lg:w-[57%]">
                        <Tween from={{  opacity : 0 }} stagger={0.07}>
                            <SplitChars wrapper={<div style={{ display: 'inline-block'}} />}>
                                ПУТЕШЕСТВИЯ ПО ВСЕМУ МИРУ
                            </SplitChars>
                        </Tween>
                    </h1>
                    <p className="  text-[15px] sm:text-[17px]   md:text-[20px] w-[88%] lg:w-[57%] md:w-[70%] mt-3 font-light leading-[32px] text-white">
                        <Tween from={{ x: '20px' , scale :0.4 , opacity : 0 , duration : .1 }} stagger={0.02}>
                            <SplitChars
                                wrapper={<div style={{ display: 'inline-block'}} />}
                            >
                                Получайте новые знания, навыки и возможности
                                для эффективной жизни и бизнеса
                            </SplitChars>
                        </Tween></p>
                </div>
            </div>
        </section>
    )
}
