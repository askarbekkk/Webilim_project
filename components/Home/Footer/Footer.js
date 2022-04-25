import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/img/web.png";
import Visa from "../../../assets/img/Visa_Inc._logo 1.png";
import MasterCard from "../../../assets/img/1609314895logo-mastercard-mobile 1.png";
import { useIntl } from "react-intl";

export default function Footer() {
  const { formatMessage } = useIntl();
  return (
    <footer>
      <div className="container md:container sm:container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="md:block hidden">
            <svg
              width="81"
              height="74"
              viewBox="0 0 81 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.7015 3.51415V50.8589C66.7015 53.3039 65.6998 55.6487 63.9168 57.3775C62.1338 59.1063 59.7155 60.0776 57.194 60.0776C54.6724 60.0776 52.2542 59.1063 50.4712 57.3775C48.6882 55.6487 47.6865 53.3039 47.6865 50.8589V8.18365L33.3384 11.6978V50.8589C33.3384 53.3039 32.3367 55.6487 30.5537 57.3775C28.7707 59.1063 26.3524 60.0776 23.8308 60.0776C21.3093 60.0776 18.891 59.1063 17.108 57.3775C15.325 55.6487 14.3233 53.3039 14.3233 50.8589V16.3914L2.62256e-05 19.8814V50.8589C-0.00693906 55.4123 1.37368 59.8661 3.96852 63.6612C6.56336 67.4562 10.2568 70.4234 14.5849 72.19C18.9131 73.9566 23.683 74.4439 28.2959 73.5908C32.9087 72.7376 37.1588 70.5821 40.5124 67.3947C43.8657 70.5725 48.1113 72.7204 52.7176 73.5697C57.324 74.4189 62.0863 73.9317 66.4085 72.1691C70.7306 70.4064 74.4204 67.4467 77.0159 63.6603C79.6114 59.874 80.9973 55.4294 81 50.883V0L66.7015 3.51415Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="md:block hidden">
            <Link href={"https://webilim.kg"}>
              <a className="text-white font-bold mb-4 cursor-pointer">
                webilim.kg
              </a>
            </Link>
            <ul>
              <li className="mb-4">
                <Link href={"/"}>
                  <a className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">
                    {formatMessage({ id: "home" })}
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <Link href={"/all-courses"}>
                  <a className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">
                    {formatMessage({ id: "schoolLink" })}
                  </a>
                </Link>
              </li>


              <li className="mb-4">
                <Link href={"/ishker-club"}>
                  <a className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">
                    {formatMessage({ id: "club" })}
                  </a>
                </Link>
              </li>
              <li className="mb-4">
                <a className="font-medium text-gray-400 text-sm leading-5 mx-4 hover:text-white">
                  {formatMessage({ id: "tripLink" })}
                </a>
              </li>
              {/*<li className="mb-4 ml-4">*/}
              {/*    <Link href={"/login"}>*/}
              {/*        <a className=" btn w-[30%] ">войти</a>*/}
              {/*    </Link>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-white font-bold mb-4">
              {formatMessage({ id: "Connect" })}
            </h1>
            <p className="font-medium text-gray-400 text-sm leading-5">
              {formatMessage({ id: "footerText" })} :
              <a href="mailto:webilim.university@gmail.com"> webilim.university@gmail.com</a>
            </p>
            <div className="flex justify-between items-center flex-wrap mt-4">
              <a href="https://www.instagram.com/webilim24">
                <i className="fab fa-instagram text-white  text-2xl rounded-full px-2 py-2	" />
              </a>
              {/*<a href="https://instagram.com">*/}
              {/*    <i className="fab fa-facebook text-white  text-2xl rounded-full px-2 py-2	"/>*/}
              {/*</a>*/}
              <a href="https://t.me/webilim24">
                <i className="fab fa-telegram-plane text-white  text-2xl rounded-full px-2 py-2	" />
              </a>
              <a href="https://www.youtube.com/channel/UCO3609q78G8v8pC0Wp6hgow">
                <i className="fab fa-youtube text-white  text-2xl rounded-full px-2 py-2	" />
              </a>
            </div>
          </div>
          <div className="relative flex flex-start flex-col">
            <h3 className="text-white font-bold leading-3 	mt-4 md:mt-0 mb-6 md:mb-2">
              Адрес
            </h3>
            {/*<div className="relative">*/}
            {/*  <input*/}
            {/*    type="email"*/}
            {/*    placeholder="Email"*/}
            {/*    className="footer_input leading-4 text-[#2C3E50] w-60 rounded  py-3 px-2"*/}
            {/*  />*/}
            {/*  <Link href={"/login"}>*/}
            {/*    <a className=" footer-btn absolute top-[0px] right-[30px]">*/}
            {/*      кирүү*/}
            {/*    </a>*/}
            {/*  </Link>*/}
            {/*</div>*/}
            <p className="font-medium text-gray-400 text-sm leading-5 mt-4   mb-4">
              ВЕБИЛИМ24, Кыргызстан, г.Бишкек ул. Турусбекова. 109/2
            </p>
          </div>
        </div>
        <div className="flex  justify-between items-center    flex-col-reverse sm:flex-row">
          <h4 className="font-medium text-gray-400 text-sm leading-5 mx-4 mb-4">
            Автордук укук © 2022 "Webilim 24 Online Education"
          </h4>
          <div className="mb-4 flex">
            <h4 className="font-medium text-gray-400 text-sm leading-5 mx-4">
              Көрсөтүүнүн шарттары
            </h4>
            <h4 className="font-medium text-gray-400 text-sm leading-5 mx-4">
              Кайтаруу саясаты
            </h4>
          </div>
          <div className="flex   justify-between items-center mb-4">
            <a href="#" className="ml-4">
              <Image src={Visa} />
            </a>
            <a href="#" className="ml-4">
              <Image src={MasterCard} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
