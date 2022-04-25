import HomeLayout from "../components/HomeLayout";
import TripsCard from "../components/Trips/TripsCard/TripsCard";
import api from "../components/axiosAPI/api";
import React, { useEffect } from "react";
import  { setTravel } from "../redux/reducers/travel_list";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function Travel() {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const fetchAllCourses = async () => {
    const { data } = await api.get(`/ru/api/v2/travel-list/`);
    dispatch(setTravel(data));
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const data = useSelector((state) => state.travel_list.data);
  console.log(data);
  return (
    <HomeLayout>
      <section className=" container pt-[90px]">
        <div className=" mx-auto">
          <h1 className="text-white text-[36px] font-bold leading-[54px] uppercase ">
            {formatMessage({id: "travelWorld"})}
          </h1>
          <p className="text-white">
            Получайте новые знания, навыки и возможности
            для эффективной жизни и бизнеса
          </p>

        </div>
        <div>
          <h1 className="font-bold text-white lg:text-[36px] md:text-[32px] text-[26px] mb-6">
            БЛИЖАЙШИЕ ПУТЕШЕСТВИЯ
          </h1>
        </div>
        <div className="">
          {data.map((el) => (
            <TripsCard el={el} />
          ))}
        </div>

        <div className="flex justify-center p-10">
          <button className="btn2 text-center ">
            <Link href={"/travel"}>
              <a>Смотреть все мастер-классы</a>
            </Link>
          </button>
        </div>
      </section>
    </HomeLayout>
  );
}
