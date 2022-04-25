import PhoneInput from 'react-phone-number-input'
import {useEffect, useState} from "react";
import { Formik, Field, Form } from "formik";

export default function  TravelApplication() {
    const [value, setValue] = useState()

    return (
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 mt-4">
                    <div className="lg:p-10 p-4">
                        <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[20px] mb-6">ЗАРЕГИСТРИРОВАТЬСЯ
                            НА ПУТЕШЕСТВИЕ</h1>
                        <p className="text-[#9099A3] leading-[24px] w-[100%] lg:w-[60%] ">После регистрации наш менеджер
                            свяжется с вами и уточнит все детали</p>
                    </div>
                    <div className="lg:p-10 p-4">
                        <div className="relative">
                            <div className="mt-4">
                                <p className="text-[#9099A3] text-[14px] font-light">ФИО *</p>
                                <input type="text"
                                       className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                       placeholder="Era$oft"/>
                            </div>
                            <div className="mt-4">
                                <p className="text-[#9099A3] text-[14px] font-light">Номер телефона *</p>
                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="RU"
                                    value={value}
                                    onChange={setValue}/>
                            </div>
                            <div className="mt-4">
                                <p className="text-[#9099A3] text-[14px] font-light">E-mail *</p>
                                <input type="email"
                                       className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                       placeholder="example@mail.com"/>
                            </div>
                        </div>
                        <div className="flex items-start flex-col md:flex-row md:items-center relative mt-4 p-2">
                            <p className="text-white text-[14px]  md:w-[53%] md:font-light">Ваши данные надежно защищены и не будут
                                переданы третьим лицам</p>
                            <button
                                className="btn">Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}