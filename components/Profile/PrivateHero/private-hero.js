import Link from "next/link"
import {useState} from "react";
import api from "../../axiosAPI/api";
import {useSelector} from 'react-redux';
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useIntl} from "react-intl";


export default function PrivateHero({fetchAllCourses}) {
    const {formatMessage} = useIntl()
    const [error, setError] = useState(null)
    const userId = useSelector(state => state.main.user_id)
    const userToken = useSelector(state => state.main.access_token)


    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData()
        formData.append("avatar", data.avatar[0]);
        formData.append("city", data.city);
        formData.append("company", data.company);
        formData.append("country", data.country);
        formData.append("date_of_birth", data.date_of_birth);
        formData.append("email", data.email);
        formData.append("expertise", data.expertise);
        formData.append("expertise_description", data.expertise_description);
        formData.append("full_name", data.full_name);
        formData.append("gender", "male");
        formData.append("linkedin", data.linkedin);
        formData.append("occupation", data.occupation);
        formData.append("phone", data.phone);
        formData.append("telegram", data.telegram);
        formData.append("timezone", data.timezone);
        formData.append("web_site", data.web_site);
        formData.append("whatsapp", data.whatsapp);
        formData.append("youtube", data.youtube);
        formData.append("instagram", data.instagram);
        api.patch(`/ru/api/v2/user-profile/${userId}/`, formData, {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        })
            .then(() => {
                toast.success("Успешно изменено")
                window.scrollTo(0, 0)
                fetchAllCourses()
            }).catch((e) => {
            console.log(e)
            toast.error("Заполните все поля")
            console.log(e.response.data)

            // toast.error()
        })
            .catch((e) => console.log(e))

    };


    const {data: form} = useSelector(state => state.profileOne);

    console.log(form, "profileOne")

    const blobToBase64 = blob => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const [newImg, setNewImg] = useState('')

    return (
        <div>
            <ToastContainer/>


            <form onSubmit={handleSubmit(onSubmit)} className="flex">

                <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E] rounded-[15px]">
                    <h1 className="text-white text-[36px] font-bold mt-4">{formatMessage({id: "personalData"})}</h1>
                    <p className="text-white text-[18px] font-bold">{formatMessage({id: "basicData"})}</p>
                    {error && (<p className="text-white my-8 text-[14px] text-[#C70039] font-bold">
                        {error.map(i => <span>{i[0]} : {i[1]}</span>)}
                    </p>)}

                    <div className="flex items-center my-8">

                        {
                            form?.avatar ? (
                                <div>
                                    <img
                                        className="w-[200px] h-[200px] object-cover rounded-full bg-[#CFCEDC]"
                                        src={newImg || form?.avatar} alt="аватар"/>
                                </div>
                            ) : (
                                <div className="w-[80px] h-[80px] bg-[#CFCEDC] rounded-[50%] overflow-hidden"/>)
                        }

                    <div className="mx-5">
                        {/*<label for="uploadBtn" className="btn">Выбрать фото</label>*/}
                        <input {...register("avatar")} accept="image/*" onChange={(e) => {
                            blobToBase64(e.target.files[0]).then(data => {
                                setNewImg(data)
                            })
                        }} type="file" id="uploadBtn" className="btn"/>
                    </div>
                    </div>


                    <div>
                        <div className="grid md:grid-cols-2 ">
                            <div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light">ФИО *</p>
                                    <input name="nsdame" type="text"
                                           {...register("full_name")}
                                           className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                           placeholder="Name"
                                           defaultValue={form?.full_name ? form?.full_name : ''}
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light">{formatMessage({id: "phone"})} *</p>

                                    <input
                                        name="phone"
                                        type="text"
                                        {...register("phone")}
                                        className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                        defaultValue={form?.phone ? form?.phone : +996}
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light">E-mail *</p>
                                    <input
                                        name="email1"
                                        type="email"
                                        className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                        placeholder="E-mail"
                                        {...register("email")}
                                        value={form?.email ? form?.email : ''}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light">Компания *</p>
                                    <input name="nsdasdcme" type="text"
                                           className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                           placeholder="Компания *"
                                           {...register("company")}
                                           defaultValue={form?.company ? form?.company : ""}
                                    />
                                </div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light">{formatMessage({id: "dateOfBirth"})} *</p>
                                    <div className=" grid md:grid-cols-7">
                                        <input
                                            type="date"
                                            style={{width: "200px"}}
                                            className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[100%]" {...register("date_of_birth")}
                                            defaultValue={form?.date_of_birth ? form?.date_of_birth : ''}/>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-[#9099A3] text-[14px] font-light ">{formatMessage({id: "gender"})}</p>
                                    <div className="grid md:grid-cols-2 gap-2 ">

                                        <select defaultValue={form?.gender ? form?.gender : ""}
                                                {...register("gender")}
                                                name="timezone" id="1"
                                                className="col-span-2  rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]">
                                            <option value="male">Мужчина</option>
                                            <option value="female">Женщина</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <h1 className="text-white sm:text-[22px] text-[19px] font-bold">{formatMessage({id: "AdditionalInformation"})}</h1>
                        <div className="">
                            <div className="grid md:grid-cols-2">
                                <div>
                                    <div className="mt-4">
                                        <p className="text-[#9099A3] text-[14px] font-light">{formatMessage({id: "country"})}</p>
                                        <div className="">
                                            <input type="text"
                                                   {...register("country")}
                                                   defaultValue={form?.country ? form?.country : ""}
                                                   className="col-span-2  rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-[#9099A3] text-[14px] font-light">{formatMessage({id: "city"})}</p>
                                        <div className="">
                                            <input
                                                className="col-span-2  rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                {...register("city")}
                                                defaultValue={form?.city ? form?.city : ""}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-[#9099A3] text-[14px] font-light">{formatMessage({id: "timezone"})}</p>
                                        <select defaultValue={form?.timezone ? form?.timezone : ""}
                                                {...register("timezone")}
                                                name="timezone" id="1"
                                                className="col-span-2  rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]">
                                            <option value="bishkek">(UTC+06:00) Бишкек</option>
                                            <option value="moscow">(UTC+03:00) Москва</option>
                                            <option value="newYork">(UTC+03:00) NewYork</option>
                                        </select>
                                    </div>
                                </div>
                                <div>

                                    <div className="">
                                        <div>
                                            <div className="mt-4">
                                                <p className="text-[#9099A3] text-[14px] font-light">
                                                    {formatMessage({id: "Occupation"})}
                                                </p>
                                                <input
                                                    name="sdc"
                                                    type="text"
                                                    {...register("occupation")}
                                                    defaultValue={form?.occupation ? form?.occupation : ""}
                                                    className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                    placeholder=""/>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-[#9099A3] text-[14px] font-light">Экспертиза</p>
                                                <input
                                                    name="nsdasdme"
                                                    type="text"
                                                    defaultValue={form?.expertise ? form?.expertise : ""}
                                                    {...register("expertise")}
                                                    className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                    placeholder=""/>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-[#9099A3] text-[14px] font-light">Веб-сайт</p>
                                                <input
                                                    name="nsdamsde"
                                                    type="text"
                                                    {...register("web_site")}
                                                    defaultValue={form?.web_site ? form?.web_site : ""}
                                                    className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                    placeholder="https.//example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 mt-4">
                                <p className="text-[#9099A3] text-[14px] font-light">Экспертиза</p>
                                <textarea id="story" name="story"
                                          {...register("expertise_description")}
                                          defaultValue={form?.expertise_description ? form?.expertise_description : ""}
                                          rows="5" cols="33"
                                          className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[97.5%]"
                                />
                            </div>
                        </div>
                        <div className="mt-20">
                            <h1 className="text-white text-[22px] font-bold">{formatMessage({id: "SocialNetwork"})}</h1>
                            <div className="grid md:grid-cols-2">
                                <div>

                                    <div className="">
                                        <div>
                                            <div className="mt-4">
                                                <p className="text-[#9099A3] text-[14px] font-light">Instagram</p>
                                                <input name="nsqwdame" type="text"
                                                       defaultValue={form?.instagram ? form?.instagram : ""}
                                                       {...register("instagram")}
                                                       className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                       placeholder="http.//Instagram.com/user_name"/>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-[#9099A3] text-[14px] font-light">Whatsapp</p>
                                                <input name="nsdaqwme" type="text"
                                                       defaultValue={form?.whatsapp ? form?.whatsapp : ""}
                                                       {...register("whatsapp")}
                                                       className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                       placeholder="http.//Whatsapp.com/user_name"/>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-[#9099A3] text-[14px] font-light">Linkedin</p>
                                                <input
                                                    name="nsdqwame"
                                                    type="text"
                                                    defaultValue={form?.linkedin ? form?.linkedin : ""}
                                                    {...register("linkedin")}
                                                    className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                    placeholder="http.//Linkedin.com/user_name"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <div className="">
                                        <div>
                                            <div className="mt-4">
                                                <p className="text-[#9099A3] text-[14px] font-light">Telegram</p>
                                                <input
                                                    name="nsdame"
                                                    type="text"
                                                    defaultValue={form?.telegram ? form?.telegram : ""}
                                                    {...register("telegram")}
                                                    className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                    placeholder="http.//Telegram.com/user_name"/>
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-[#9099A3] text-[14px] font-light">YouTube</p>
                                                <input
                                                    name="nsdaasdme"
                                                    type="text"
                                                    defaultValue={form?.youtube ? form?.youtube : ""}
                                                    {...register("youtube")}
                                                    className="rounded-[15px] bg-[#464951] pt-3 pb-3 pl-4 pr-4 text-white outline-none w-[95%]"
                                                    placeholder="http.//YouTube.com/user_name"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-8">
                        <div>
                            <button type="submit" className="btn">{formatMessage({id: "save"})}</button>
                        </div>
                        <div className="sm:ml-4">
                            <Link href={"/profile/forgot-password"}>
                                <a>
                                    <button className="btn2">
                                        {formatMessage({id: "edit-password"})}
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
