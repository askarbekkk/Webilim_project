
import {useEffect, useState} from "react";
import { useRouter } from 'next/router';

export default function TimeOut() {
    let data = new Date()
    console.log(data)
    const [time , setTime] = useState(30)

    const router = useRouter()
    console.log(router , "router")

    useEffect(() => {
        const start = () => {
            setTimeout(() => {
                setTime(time - 1)
            },1000)
        }

        if (time === 0) {
            setTime(0)
            router.push("/")
        } else {
            start()
        }
    } , [time])




    return (
            <section id="package" className="mb-14 pt-[40px]">

                <div className="container mx-auto">
                    <div className="flex justify-center flex-col items-center mt-4">
                        <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mt-10 lg:mb-6">ВЫ ВЕРНЕТЕСЬ ЧЕРЕЗ {time} СЕК</h1>
                        <p className="text-center text-white">
                            Присоединяйтесь к международному сообществу учеников
                            Кайдзен Школы и
                            <br/>
                            становитесь эффективными и счастливыми без хронической занятости и выгорания</p>
                    </div>
                </div>
            </section>
    )
}

