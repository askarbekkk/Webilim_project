import {useIntl} from "react-intl"
import Accordion from "./AccordionSection";
import {useEffect, useState} from "react";
import api from "../../axiosAPI/api";

export default function Faq({children}) {
    const {formatMessage} = useIntl();
    console.log(children , 'faqChildren')
    return (
        <section id="faq" className="mt-32">
            <div className="container  md:container sm:container mx-auto">
                <div className="grid grid-cols-1   lg:grid-cols-2 quiz">
                    <div className="quiz-left ">
                        <h1 className="title_hero text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">
                            {formatMessage({id: 'faqTitle'})}?
                        </h1>
                        <h1 className="text-[#B70825] text-[300px] leading-[366px] text-center font-bold hidden	lg:block faq">?</h1>
                    </div>
                    <div className="ml-2 lg:ml-14 sm:ml-14">
                        <Accordion children={children} />
                    </div>
                </div>
            </div>
        </section>
    )
}
