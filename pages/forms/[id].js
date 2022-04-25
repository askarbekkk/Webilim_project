import HomeLayout from "../../components/HomeLayout";
import PhoneInput from "react-phone-number-input";
import {useState} from "react";
import {Field, Form, Formik} from "formik";
import {useSelector} from "react-redux";
import api from "../../components/axiosAPI/api";


export default function Id() {
    const [value, setValue] = useState('')
    const data = useSelector(state => state.packege.handlePacket)
    const [error, setError] = useState(null)

    console.log(data)
    return (
        <HomeLayout>
            <div className="container pt-[40px]">
                {
                    data.length === 0 ?
                        (<h1>loading...</h1>)
                        :
                        (<div className="flex justify-center">
                            <div className="relative flex flex-col mb-8 items-start w-[616px]">
                                <div className="mt-4">
                                    <h1 className=" text-white leading-relaxed  md:text-[32px] lg:text-[40px] text-[22px]  font-bold">{data.type}</h1>
                                </div>
                                <div className="mb-10 w-[100%]">
                                    <div className="relative ">
                                        <Formik
                                            initialValues={{full_name: "", email: "", promo_code: ""}}
                                            onSubmit={async (values) => {
                                                setError(null)
                                                api.post('ru/api/v2/register-request/', {
                                                    ...values,
                                                    phone: value,
                                                    package_membership: data.id
                                                })
                                                    .then(data => {
                                                        window.location.assign(JSON.parse(data.data['payment-data']).payment_page_url).call(this)
                                                    })
                                                    .catch(e => {
                                                        setError(e.response && e.response.data?.email || 'Некоторые поля заполнены не корректно!')
                                                    })

                                            }}
                                        >
                                                {(formik) => (
                                                    <Form>
                                                        {error ? (
                                                            <div className="mt-6 text-[#C0392B]">{error}</div>
                                                        ) : null}
                                                        <div className="mt-4">
                                                            <p className="text-[#9099A3] text-[14px] font-light">ФИО *</p>
                                                            <Field name="full_name" type="text"
                                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                                   placeholder="Name"/>
                                                        </div>
                                                        <div className="mt-4">
                                                                <p className="text-[#9099A3] text-[14px] font-light">Номер телефона *</p>
                                                                <PhoneInput
                                                                    international
                                                                    countryCallingCodeEditable={false}
                                                                    defaultCountry="KG"
                                                                    value={value}
                                                                    onChange={setValue}/>
                                                        </div>
                                                        <div className="mt-4">
                                                            <p className="text-[#9099A3] text-[14px] font-light">E-mail *</p>
                                                            <Field name="email" type="email"
                                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                                   placeholder="E-mail"/>
                                                        </div>
                                                        <div className="mt-4">
                                                            <p className="text-[#9099A3] text-[14px] font-light">Промокод *</p>
                                                            <Field name="promo_code" type="text"
                                                                   className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                                   placeholder="###"/>
                                                        </div>
                                                        <div className="mt-6">

                                                                    <button

                                                                        type="submit"
                                                                        className="mt-4 text-white font-bold w-[95%] flex justify-center items-center pt-3 pb-3  btn rounded-[15px] box-shadow: 0px 5px 8px rgba(26, 92, 255, 0.2)">Оплатить
                                                                         сом /  мес
                                                                    </button>
                                                        </div>
                                                    </Form>
                                                )}
                                            </Formik>
                                        {/*<Form>*/}
                                        {/*    <div className="mt-4">*/}
                                        {/*        <p className="text-[#9099A3] text-[14px] font-light">ФИО *</p>*/}
                                        {/*        <Field name="name" type="text" className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"*/}
                                        {/*               placeholder="Name" />*/}
                                        {/*    </div>*/}
                                        {/*    <div className="mt-4">*/}
                                        {/*        <p className="text-[#9099A3] text-[14px] font-light">Номер телефона *</p>*/}
                                        {/*        <PhoneInput*/}
                                        {/*            countryCallingCodeEditable={false}*/}
                                        {/*            defaultCountry="KG"*/}
                                        {/*            value={value}*/}
                                        {/*            onChange={setValue}/>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="mt-4">*/}
                                        {/*        <p className="text-[#9099A3] text-[14px] font-light">E-mail *</p>*/}
                                        {/*        <Field name="email" type="email" className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"*/}
                                        {/*               placeholder="E-mail" />*/}
                                        {/*    </div>*/}
                                        {/*    <div className="mt-4">*/}
                                        {/*        <p className="text-[#9099A3] text-[14px] font-light">Промокод *</p>*/}
                                        {/*        <Field name="promo_code" type="text" className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"*/}
                                        {/*        />*/}
                                        {/*    </div>*/}
                                        {/*    <div className="mt-6">*/}
                                        {/*        <button*/}
                                        {/*            type="submit"*/}
                                        {/*            className="mt-4 text-white font-bold w-[95%] flex justify-center items-center pt-3 pb-3  btn rounded-[15px] box-shadow: 0px 5px 8px rgba(26, 92, 255, 0.2)">Оплатить  {data.price} $/{data.type}*/}
                                        {/*        </button>*/}
                                        {/*    </div>*/}
                                        {/*</Form>*/}
                                    </div>

                                </div>
                                <div>
                                    <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]">{data.description}</h5>

                                    <div className="flex flex-col sm:flex-row items-center">
                                        <a href={'#'}>
                                            <button
                                                className="btn">
                                                Год
                                                - 225,00 $/год
                                            </button>
                                        </a>
                                        <h5 className="text-white font-bold text-[16px] mx-3 leading-[20px]">ИЛИ</h5>
                                        <a href={'#'}>
                                            <button
                                                className="btn ">Год
                                                + - 585,00 $/год
                                            </button>
                                        </a>
                                    </div>
                                    <h5 className="text-white sm:font-bold text-[16px] my-3 leading-[20px]">Отменить можно в любой
                                        момент!</h5>
                                    <p className="leading-[22px] text-[#9099A3] text-[15px] sm:text-[16px] my-3 font-light">С Вашей карты автоматически будут списываться 19,00 $/мес, которые
                                        являются стандартной ценой участия.</p>
                                    <p className="leading-[22px] text-[#9099A3]  text-[15px] sm:text-[16px] my-3 font-light">Вы всегда можете отменить подписку в Вашем личном кабинете
                                        и больше списаний не будет.</p>
                                </div>
                            </div>

                        </div>)
                }
            </div>
        </HomeLayout>
    )
}
