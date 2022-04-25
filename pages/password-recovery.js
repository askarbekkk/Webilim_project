import Image from "next/image";
import Eye from "../assets/img/img_6.png"
import EyeSlash from "../assets/img/img_7.png"
import {Formik, Field, Form} from "formik";
import Link from  "next/link"
import PasswordForgot from "../components/Profile/password-forgot";
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import { useRouter } from 'next/router';
import api from "../components/axiosAPI/api";
import axios from "axios";


export default function PasswordRecovery() {

    // function InputEyes() {
    //     const x = document.querySelector("#EntryInputPassword")
    //     const y = document.querySelector("#eyes1")
    //     const z = document.querySelector("#eyes2")
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
    const router = useRouter()
    const [error, setError] = useState({})

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        api.post("ru/api/v2/forgot-password/", data).then(() => {
                router.push("/password-recovery/" + data.email)
            })
            .catch((e) => {
                console.log(e?.response?.data)
                setError(e?.response?.data)
            })
    };

    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-[36px] text-white font-extrabold my-8 ">Восстановить пароль</h1>
                <div className="container mx-auto">
                    <div className="flex flex-col  w-[100%] ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <p className="text-white">Ведите email</p>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input  placeholder="email" {...register("email" , {required: true} )}  className={errors.example ? "EntryInput_err" :"EntryInput"}/>

                            <span>{error.email}</span>
                            <button type="submit" className="btn ">
                                Изменить
                            </button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}
