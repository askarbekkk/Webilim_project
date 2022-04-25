import {useState} from 'react'
// import {Field, Form, Formik} from "formik";
// import Image from "next/image";
// import Eye from "../../assets/img/img_6.png";
// import EyeSlash from "../../assets/img/img_7.png";
import React from "react";
import api from "../../components/axiosAPI/api";
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function PasswordForgot() {
    const [error, setError] = useState('')
    const router = useRouter()
    const token = useSelector(state => state.main.access_token)

    // function InputEyes() {
    //     const x = document.querySelector("#EntryInputPasswordP")
    //     const y = document.querySelector("#eyesP")
    //     const z = document.querySelector("#eyesP2")
    //
    //     if (x.type === "password") {
    //         x.type = "text";
    //         y.style.display = "block";
    //         z.style.display = "none";
    //     } else {
    //         x.type = "password";
    //         y.style.display = "none";
    //         z.style.display = "block";
    //     }
    // }
    //
    // function InputEyes2() {
    //     const x = document.querySelector("#EntryInputPasswordP2")
    //     const y = document.querySelector("#eyesP2")
    //     const z = document.querySelector("#eyesP22")
    //
    //     if (x.type === "password") {
    //         x.type = "text";
    //         y.style.display = "block";
    //         z.style.display = "none";
    //     } else {
    //         x.type = "password";
    //         y.style.display = "none";
    //         z.style.display = "block";
    //     }
    // }
    //
    // function InputEyes3() {
    //     const x = document.querySelector("#EntryInputPasswordP3")
    //     const y = document.querySelector("#eyesP3")
    //     const z = document.querySelector("#eyesP33")
    //
    //     if (x.type === "password") {
    //         x.type = "text";
    //         y.style.display = "block";
    //         z.style.display = "none";
    //     } else {
    //         x.type = "password";
    //         y.style.display = "none";
    //         z.style.display = "block";
    //     }
    // }

    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = data => {
        if(data.password !== data.password_confirmation) {
            setError("Пароли не совпадают")
        }else {
            api.post("/ru/api/v2/forgot-password/confirm/" , data)
                .then(() => {
                    toast("Успешно изменено")
                    setTimeout(() => {
                        router.push("/login")
                    }, 3000)
                })
                .catch(e => console.log("error" , e))
        }
        console.log(data)
    };
    return (
        <>
            <ToastContainer/>
            <div className="w-[100%] min-h-screen py-[50px]	   bg-[#282B2E] top-0">
                <div className="container">
                    <h1 className="text-white text-4xl	py-5	">Изменения паролья</h1>
                    <h3 className="text-white text-2xl	py-5	">Мы отправили на {router.query.email} почту код с подверждением паролья</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <p className="text-[#9099A3] text-[14px] font-light">Код активация</p>
                        <input
                            placeholder="Код подверждения"
                            {...register("code", {required: true})}
                            className={errors.example ? "EntryInput_err" : "EntryInput"} type="text"
                        />
                        <p className="text-[#9099A3] text-[14px] font-light">Email</p>
                        <input
                            value={router.query.email}
                            {...register("email", {required: true})}
                            className={errors.example ? "EntryInput_err" : "EntryInput"}
                        />
                        <p className="text-[#9099A3] text-[14px] font-light">Новый пароль</p>
                        <input
                            placeholder="Новий пароль"
                            {...register("password", {required: true})}
                            className={errors.example ? "EntryInput_err" : "EntryInput"}
                        />
                        <p className="text-[#9099A3] text-[14px] font-light">Подвеждения пароля</p>
                        <input
                            placeholder="Подверждения паролья"
                            {...register("password_confirmation", {required: true})}
                            className={errors.example ? "EntryInput_err" : "EntryInput"}
                        />
                        <p className="text-red-500">{error}</p>

                        <button type="EntryBtn" className="btn ">
                            Изменить
                        </button>
                    </form>
                    {/*<Formik*/}
                    {/*    initialValues={{password_old: "", password1:"",password2:''}}*/}
                    {/*    onSubmit={ (values) => {*/}
                    {/*        // if(password1 !== password2) return setError('Пароли не совпадают!')*/}
                    {/*        console.log(values)*/}
                    {/*        // api.put('ru/api/v2/change-password/', {old_password:password_old,new_password:password2},{*/}
                    {/*        //     headers: {*/}
                    {/*        //         Authorization: "Bearer " + token*/}
                    {/*        //     }*/}
                    {/*        // })*/}
                    {/*        //     .then(data=>{*/}
                    {/*        //         if(data.data.code == 200) return router.push('/profile/private-page')*/}
                    {/*        //     })*/}
                    {/*        //     .catch(e=>{*/}
                    {/*        //         if(e?.response?.data?.code === "token_not_valid") return router.push('/login')*/}
                    {/*        //         setError("Не правильный пароль!!!")*/}
                    {/*        //     })*/}
                    {/*        // console.log(values);*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <Form className=" w-[100%]  ">*/}
                    {/*        <div className='w-[100%] mt-4'>*/}
                    {/*            {error && (<p className="text-white my-8 text-[14px] text-[#C70039] font-bold">*/}
                    {/*                {error}*/}
                    {/*            </p>)}*/}
                    {/*            <p className="text-[#9099A3] text-[14px] font-light">Email</p>*/}
                    {/*            <Field name="code" type="text" className="EntryInputP"*/}
                    {/*                   id="EntryInputPassword" value={router.query.email} />*/}
                    {/*        </div>*/}
                    {/*        <Field name="code" type="text" className="EntryInputP"*/}
                    {/*               id="code" value={router.query.email} />*/}
                    {/*        <div className='w-[100%] mt-4'>*/}
                    {/*            <p className="text-[#9099A3] text-[14px] font-light">Новый пароль</p>*/}
                    {/*            <Field name="password1" type="password" className="EntryInputP"*/}
                    {/*                   id="EntryInputPasswordP2" placeholder="" />*/}
                    {/*            <span onClick={InputEyes2} className="EntryInputPasswordEyesP">*/}
                    {/*                    <div className="eyeP"><Image src={Eye} layout="fill" id="eyesP2"/></div>*/}
                    {/*                    <div className="eyeP"><Image src={EyeSlash} layout="fill" id="eyesP22"/></div>*/}
                    {/*                </span>*/}
                    {/*        </div>*/}
                    {/*        <div className='w-[100%] mt-4'>*/}
                    {/*            <p className="text-[#9099A3] text-[14px] font-light">Потвердите новый пароль</p>*/}
                    {/*            <Field name="password2" type="password" className="EntryInputP"*/}
                    {/*                   id="EntryInputPasswordP3" placeholder="" />*/}
                    {/*            <span onClick={InputEyes3} className="EntryInputPasswordEyesP">*/}
                    {/*                    <div className="eyeP"><Image src={Eye} layout="fill" id="eyesP3"/></div>*/}
                    {/*                    <div className="eyeP"><Image src={EyeSlash} layout="fill" id="eyesP33"/></div>*/}
                    {/*                </span>*/}
                    {/*        </div>*/}
                    {/*        <button className="btn" type="submit">Сохранить</button>*/}
                    {/*    </Form>*/}
                    {/*</Formik>*/}

                </div>

            </div>
        </>
    )
}
