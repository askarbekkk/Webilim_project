import ProfileForm from "../components/Profile/ProfileForm";
import {useIntl} from "react-intl";
import Link from "next/link";
import React from "react";

export default function Login() {
const {formatMessage} = useIntl()


    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col items-center w-[100%] ">
                    <div className="sm:w-[70%] w-[100%] relative flex flex-col items-center my-20">
                        <h1 className="text-[36px] text-white font-extrabold my-8 ">{formatMessage({id: 'login'})}</h1>
                        <ProfileForm/>
                    </div>
                    <Link href={"/"}>
                        <a className="btn-ere ">
                            <i className="fas fa-arrow-left"/>
                        </a>
                    </Link>
                </div>

            </div>
        </>
    )
}
