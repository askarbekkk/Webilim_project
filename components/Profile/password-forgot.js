import {useState} from 'react'
import {Field, Form, Formik} from "formik";
import Image from "next/image";
import Eye from "../../assets/img/img_6.png";
import EyeSlash from "../../assets/img/img_7.png";
import React from "react";
import api from "../axiosAPI/api";
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'
export default function  PasswordForgot(){
    const [error,setError] = useState(null)
    const router = useRouter()
    const token = useSelector(state => state.main.access_token)
    function InputEyes() {
        const x = document.querySelector("#EntryInputPasswordP")
        const y = document.querySelector("#eyesP")
        const z = document.querySelector("#eyesP2")

        if (x.type === "password"){
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            x.type = "password";
            y.style.display = "none";
            z.style.display = "block";
        }
    }
    function InputEyes2() {
        const x = document.querySelector("#EntryInputPasswordP2")
        const y = document.querySelector("#eyesP2")
        const z = document.querySelector("#eyesP22")

        if (x.type === "password"){
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            x.type = "password";
            y.style.display = "none";
            z.style.display = "block";
        }
    }
    function InputEyes3() {
        const x = document.querySelector("#EntryInputPasswordP3")
        const y = document.querySelector("#eyesP3")
        const z = document.querySelector("#eyesP33")

        if (x.type === "password"){
            x.type = "text";
            y.style.display = "block";
            z.style.display = "none";
        } else {
            x.type = "password";
            y.style.display = "none";
            z.style.display = "block";
        }
    }
    return(
        <>
            <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E] rounded-[15px]">
                <Formik
                    initialValues={{password_old: "", password1:"",password2:''}}
                    onSubmit={ ({password1,password2,password_old}) => {
                        if(password1 !== password2) return setError('Пароли не совпадают!')
                        api.put('ru/api/v2/change-password/', {old_password:password_old,new_password:password2},{
                            headers: {
                                Authorization: "Bearer " + token
                            }
                        })
                        .then(data=>{
                            if(data.data.code == 200) return router.push('/profile/private-page')
                        })
                        .catch(e=>{
                            if(e?.response?.data?.code === "token_not_valid") return router.push('/login')
                            setError("Не правильный пароль!!!")
                        })
                        console.log(values);
                    }}
                >
                    <Form className=" w-[100%]  ">
                        <div className='w-[100%] mt-4'>
                            {error && (<p className="text-white my-8 text-[14px] text-[#C70039] font-bold">
                                {error}
                            </p>)}
                            <p className="text-[#9099A3] text-[14px] font-light">Старый пароль</p>
                            <Field name="password_old" type="password" className="EntryInputP"
                                   id="EntryInputPasswordP" />
                            <span onClick={InputEyes} className="EntryInputPasswordEyesP">
                                        <div className="eyeP"><Image src={Eye} layout="fill" id="eyesP"/></div>
                                        <div className="eyeP"><Image src={EyeSlash} layout="fill" id="eyesP2"/></div>
                                    </span>
                        </div>
                        <div className='w-[100%] mt-4'>
                            <p className="text-[#9099A3] text-[14px] font-light">Новый пароль</p>
                            <Field name="password1" type="password" className="EntryInputP"
                                   id="EntryInputPasswordP2" placeholder="" />
                            <span onClick={InputEyes2} className="EntryInputPasswordEyesP">
                                        <div className="eyeP"><Image src={Eye} layout="fill" id="eyesP2"/></div>
                                        <div className="eyeP"><Image src={EyeSlash} layout="fill" id="eyesP22"/></div>
                                    </span>
                        </div>
                        <div className='w-[100%] mt-4'>
                            <p className="text-[#9099A3] text-[14px] font-light">Потвердите новый пароль</p>
                            <Field name="password2" type="password" className="EntryInputP"
                                   id="EntryInputPasswordP3" placeholder="" />
                            <span onClick={InputEyes3} className="EntryInputPasswordEyesP">
                                        <div className="eyeP"><Image src={Eye} layout="fill" id="eyesP3"/></div>
                                        <div className="eyeP"><Image src={EyeSlash} layout="fill" id="eyesP33"/></div>
                                    </span>
                        </div>
                        <button className="btn" type="submit">Сохранить</button>
                    </Form>
                </Formik>

            </div>
        </>
    )
}