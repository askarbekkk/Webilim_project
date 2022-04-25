import { Formik, Field, Form } from "formik";
import Image from "next/image";
import Eye from "../../assets/img/img_6.png";
import EyeSlash from "../../assets/img/img_7.png";
import Link from "next/link";
import api from "../axiosAPI/api";
import React from "react";
import * as yup from "yup";
import {
  setAccessToken,
  setRefreshToken,
  setUserId,
} from "../../redux/reducers/main";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {useIntl} from "react-intl";


const validationSchema = yup.object({
  email: yup.string().email("Бул жерге email жазыңыз"),
});

export default function ProfileForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {formatMessage} = useIntl()
  function InputEyes() {
    const x = document.querySelector("#EntryInputPassword");
    const y = document.querySelector("#eyes1");
    const z = document.querySelector("#eyes2");

    if (x.type === "password") {
      x.type = "text";
      y.style.display = "block";
      z.style.display = "none";
    } else {
      x.type = "password";
      y.style.display = "none";
      z.style.display = "block";
    }
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
          console.log(values , "loginValues")
        api
          .post("/ru/api/v2/login/", values)
          .then((data) => {
            dispatch(setAccessToken(data.data.access));
            dispatch(setRefreshToken(data.data.refresh));
            dispatch(setUserId(data.data.user_id));
            router.push("/profile/private-page");
            actions.setStatus(
              "Сиздин буйрутмаңыз ийгиликтүү кетти, жакын арада биздин менеджерлер сизге  байланышат"
            );
          })
          .catch((e) => {
            actions.setStatus(
              (e.response && e.response.data.detail) || "Серверден ката кетти"
            );
          });
      }}
    >
      {(formik) => (
        <Form className="flex flex-col w-[100%] items-center">
          <Field
            name="email"
            type="email"
            className="EntryInput"
            placeholder="E-mail"
          />
          <div className="flex flex-col w-[100%] items-center ">
            <Field
              name="password"
              type="password"
              className="EntryInput"
              id="EntryInputPassword"
              placeholder="Password"
            />
            <span onClick={InputEyes} className="EntryInputPasswordEyes">
              <div className="eye">
                <Image src={Eye} layout="fill" id="eyes1" />
              </div>
              <div className="eye">
                <Image src={EyeSlash} layout="fill" id="eyes2" />
              </div>
            </span>
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
            <div className="flex">
                <button type="EntryBtn" className="btn ">
                    {formatMessage({id: "login"})}
                </button>

            </div>

          {<h1 className="text-white">!!formik.status</h1> && <h1 className="text-white">{formik.status}</h1>}
          <div>
            <Link href={"/password-recovery"}>
                <span className="EntryPassword mt-4">{formatMessage({id: 'forgotPassword'})}</span>
            </Link>
          </div>


        </Form>
      )}
    </Formik>
  );
}
