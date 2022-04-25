import React  from 'react'
import {useIntl} from "react-intl"
import Link from 'next/link'
import Image from "next/image";
import HeroImg from '../../../assets/img/web.png';


export default function Hero() {
    const {formatMessage} = useIntl();

    return (
        <section id="hero">
            <div className="container md:container container-3sm mx-auto">
                <div className="grid md:grid-cols-2  lg:grid-cols-2  ">
                    <div className="pt-[100px] hero_tit ">
                        <h2 className="upTitle font-normal leading-8 text-[14px] md:text-[18px] lg:text-[20px] text-[#9099A3] ">
                            {formatMessage({id: "heroTitle"})}
                        </h2>
                        <h1 className=" title_hero text-white leading-relaxed tracking-wider font-bold">
                            WEBILIM24
                        </h1>
                        <h2 className="upTitle mb-4 font-normal leading-8 text-[14px] md:text-[18px] lg:text-[20px]  text-white">

                            ONLINE EDUCATION
                        </h2>

                        <div className="sm:flex md:flex lg:flex xl:flex items-center  ">

                            <Link href="#subscribe">
                                <a className="btn">{formatMessage({id: "heroBtn1"})}</a></Link>
                            <div className="sm:ml-4">
                                <Link href={'/login'}>
                                    <a className="btn2">{formatMessage({id: "login"})}</a></Link>
                            </div>

                        </div>
                    </div>
                    <div className="relative" >
                        <Image src={HeroImg}  />

                        <div className="hero-shadow"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

